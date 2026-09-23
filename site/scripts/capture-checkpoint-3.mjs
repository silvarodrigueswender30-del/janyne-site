import { chromium } from "playwright";
import fs from "node:fs/promises";

const widths = [1440, 1280, 1024, 768, 480, 390];
const browser = await chromium.launch({ headless: true, executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe" });
const results = [];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error" || message.type() === "warning") errors.push(`${message.type()}: ${message.text()}`); });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
  const menuTrigger = page.getByRole("button", { name: "Abrir menu" });
  let menuTest = "desktop";
  if (await menuTrigger.count()) {
    await menuTrigger.click();
    const panelOpen = await page.locator(".mobile-menu").count();
    await page.keyboard.press("Escape");
    const panelClosed = await page.locator(".mobile-menu").count() === 0;
    menuTest = panelOpen === 1 && panelClosed ? "open-close-escape-passed" : "failed";
  }
  const metrics = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > window.innerWidth,
    h1: document.querySelector("h1")?.getBoundingClientRect().toJSON(),
    heroImage: document.querySelector(".hero-visual")?.getBoundingClientRect().toJSON(),
    headerHeight: document.querySelector("header")?.getBoundingClientRect().height,
    menuVisible: Boolean(document.querySelector(".mobile-menu")),
  }));
  await page.screenshot({ path: `docs/qa/home-checkpoint-3-type-refine-${width}.png`, fullPage: true });
  results.push({ width, metrics, menuTest, errors });
  await page.close();
}

await fs.writeFile("docs/qa/home-checkpoint-3-type-refine-results.json", JSON.stringify(results, null, 2));
await browser.close();
console.log(JSON.stringify(results, null, 2));
