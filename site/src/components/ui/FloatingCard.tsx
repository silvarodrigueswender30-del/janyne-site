import type { HTMLAttributes } from "react";
import { Card } from "./Card";

export function FloatingCard(props: HTMLAttributes<HTMLDivElement>) {
  return <Card variant="floating" className="z-10 lg:absolute" {...props} />;
}
