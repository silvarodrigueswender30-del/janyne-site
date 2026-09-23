import { CTASection } from "@/components/ui/CTASection";
import { homeContent } from "@/data/site";

export function FinalCTA() {
  const { finalCta } = homeContent;
  return <CTASection id="contato" eyebrow={finalCta.eyebrow} heading={finalCta.title} body={finalCta.body} action={finalCta.action} actionHref={finalCta.actionHref} />;
}
