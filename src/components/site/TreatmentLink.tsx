import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type TreatmentLinkProps = {
  slug: string;
  children: ReactNode;
  className?: string;
};

export function TreatmentLink({ slug, children, className }: TreatmentLinkProps) {
  if (slug === "lymfmassage") {
    return <Link to="/lymfmassage" className={className}>{children}</Link>;
  }

  return (
    <Link to="/behandlingar/$slug" params={{ slug }} className={className as ComponentProps<typeof Link>["className"]}>
      {children}
    </Link>
  );
}