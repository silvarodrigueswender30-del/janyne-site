"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteNavigation, contact } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const sectionOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--space-6"));
      const marker = window.scrollY + headerHeight + sectionOffset;
      let currentHref = "#inicio";
      for (const item of siteNavigation) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.offsetTop <= marker) currentHref = item.href;
      }
      setActiveHref(currentHref);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); requestAnimationFrame(() => triggerRef.current?.focus()); return; }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = [...panelRef.current.querySelectorAll<HTMLElement>("a, button")].filter((element) => !element.hasAttribute("disabled"));
      if (!focusables.length) return;
      const firstFocusable = focusables[0]; const lastFocusable = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === firstFocusable) { event.preventDefault(); lastFocusable.focus(); }
      else if (!event.shiftKey && document.activeElement === lastFocusable) { event.preventDefault(); firstFocusable.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const closeMenuAndRestoreFocus = () => { setOpen(false); requestAnimationFrame(() => triggerRef.current?.focus()); };
  const headerClass = cn("site-header", scrolled && "site-header--scrolled");
  return <header className={headerClass}>
    <nav aria-label="Navegação principal"><Container className="flex h-full items-center justify-between">
      <a href="#inicio" aria-current={activeHref === "#inicio" ? "page" : undefined} className="type-heading-sm text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2">Janyne Porfirio</a>
      <div className="hidden items-center gap-5 xl:flex"><div className="flex items-center gap-5">{siteNavigation.map((item) => <a key={item.href} href={item.href} aria-current={activeHref === item.href ? "location" : undefined} className={cn("type-body-md nav-link", activeHref === item.href && "nav-link--active")}>{item.label}</a>)}</div>{contact.whatsapp.href ? <Button asChild variant="secondary" canvas={scrolled ? "light" : "dark"} href={contact.whatsapp.href}>Entrar em contato</Button> : null}</div>
      <div className="xl:hidden"><IconButton ref={triggerRef} canvas={scrolled ? "light" : "dark"} aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={20} strokeWidth={1.5} aria-hidden="true" /></IconButton></div>
    </Container></nav>
    {open ? <aside ref={panelRef} className="mobile-menu" aria-label="Menu mobile"><Container className="flex min-h-full flex-col py-5"><div className="flex items-center justify-between"><a href="#inicio" onClick={closeMenu} className="type-heading-md text-text-primary">Janyne Porfirio</a><IconButton aria-label="Fechar menu" onClick={closeMenuAndRestoreFocus}><X size={20} strokeWidth={1.5} aria-hidden="true" /></IconButton></div><div className="mt-10 flex flex-1 flex-col gap-5">{siteNavigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} aria-current={activeHref === item.href ? "location" : undefined} className={cn("type-heading-md nav-mobile-link", activeHref === item.href && "nav-link--active")}>{item.label}</a>)}</div>{contact.whatsapp.href ? <Button asChild href={contact.whatsapp.href} className="w-full">Entrar em contato</Button> : null}</Container></aside> : null}
  </header>;
}
