import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type TreatmentLinkProps = {
  slug: string;
  children: ReactNode;
  className?: string;
};

/** Gemensam länk till en behandlingssida. Alla behandlingar ligger under /behandlingar/:slug. */
export function TreatmentLink({ slug, children, className }: TreatmentLinkProps) {
  return (
    <Link
      to="/behandlingar/$slug"
      params={{ slug }}
      className={className as ComponentProps<typeof Link>["className"]}
    >
      {children}
    </Link>
  );
}
