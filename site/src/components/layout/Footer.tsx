import { Container } from "@/components/ui/Container";
import { contact, siteNavigation } from "@/data/site";

const footerNavigation = siteNavigation.filter(({ href }) => href !== "#inicio" && href !== "#contato");

export function Footer() {
  const contactItems: Array<{ label: string; href: string | null }> = [];
  if (contact.whatsapp.href) contactItems.push({ label: contact.whatsapp.label, href: contact.whatsapp.href });
  if (contact.email) contactItems.push({ label: contact.email, href: `mailto:${contact.email}` });
  if (contact.instagram) contactItems.push({ label: "Instagram", href: contact.instagram });
  if (contact.location) contactItems.push({ label: contact.location, href: null });

  return <footer className="site-footer canvas-dark"><Container><div className="site-grid footer-grid"><div className="footer-brand"><p className="type-heading-md text-text-inverse">Janyne Porfirio</p><p className="type-body-sm mt-2 text-text-inverse">Psicóloga</p></div><nav className="footer-navigation" aria-label="Navegação do rodapé"><p className="type-label text-text-inverse">Navegação</p><ul className="footer-link-list mt-4">{footerNavigation.map((item) => <li key={item.href}><a className="type-body-sm footer-link" href={item.href}>{item.label}</a></li>)}</ul></nav>{contactItems.length ? <div className="footer-contact"><p className="type-label text-text-inverse">Contato</p><ul className="footer-link-list mt-4">{contactItems.map((item) => <li key={item.label}>{item.href ? <a className="type-body-sm footer-link" href={item.href}>{item.label}</a> : <span className="type-body-sm text-text-inverse">{item.label}</span>}</li>)}</ul></div> : null}</div><div className="footer-legal"><p className="type-caption text-text-inverse">© {new Date().getFullYear()} Janyne Porfirio</p><p className="type-caption text-text-inverse">Desenvolvido por{" "}<a className="footer-credit-link" href="https://www.offdata.digital" target="_blank" rel="nofollow noopener noreferrer" aria-label="Acessar o site da Offdata">Offdata</a></p></div></Container></footer>;
}
