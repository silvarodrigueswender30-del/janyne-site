import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  variant?: "primary" | "secondary";
  canvas?: "light" | "dark";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

type ButtonElementProps = ButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({ variant = "primary", canvas = "light", children, className, asChild = false, ...props }: ButtonElementProps) {
  const classes = cn(
    "type-button inline-flex min-h-12 items-center justify-center gap-2 radius-token-pill px-5 transition-colors duration-normal ease-standard active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && (canvas === "dark" ? "button-primary-dark bg-interactive-primary-dark hover:bg-interactive-primary-dark-hover active:bg-interactive-primary-dark-active focus-visible:ring-focus-ring-dark" : "button-primary-light bg-interactive-primary hover:bg-interactive-primary-hover active:bg-interactive-primary-active focus-visible:ring-focus-ring-light"),
    variant === "secondary" && (canvas === "dark" ? "button-secondary-dark border border-interactive-secondary-dark-border hover:bg-interactive-secondary-dark-hover active:bg-interactive-secondary-dark-active focus-visible:ring-focus-ring-dark" : "button-secondary-light border border-interactive-secondary-light-border hover:bg-interactive-secondary-light-hover active:bg-interactive-secondary-light-active focus-visible:ring-focus-ring-light"),
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    className,
  );
  if (asChild) return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
