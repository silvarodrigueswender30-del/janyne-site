import { homeContent } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function IdentityStrip() { return <section aria-label="Identidade profissional" className="identity-strip bg-background-primary"><Container><ul className="identity-grid">{homeContent.identityStrip.map((item) => <li key={item} className="type-label text-text-secondary">{item}</li>)}</ul></Container></section>; }
