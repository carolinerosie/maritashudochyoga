import { Clock } from "lucide-react";
import { durationOf, fromPrice, groups, type Treatment } from "@/content/site";
import { TreatmentLink } from "./TreatmentLink";
import { cn } from "@/lib/utils";

/** Behandlingskort – samma storlek för alla behandlingar. */
export function TreatmentCard({
  t,
  className,
  showGroup = true,
}: {
  t: Treatment;
  className?: string;
  showGroup?: boolean;
}) {
  const duration = durationOf(t);
  return (
    <TreatmentLink
      slug={t.slug}
      className={cn(
        "lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card",
        className,
      )}
    >
      <span className="block aspect-[4/3] overflow-hidden">
        <img
          src={t.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </span>
      <span className="flex flex-1 flex-col p-6">
        {showGroup ? (
          <span className="text-sm font-medium text-tegel">{groups[t.group].label}</span>
        ) : null}
        <span className="mt-1.5 font-serif text-[1.55rem] leading-snug">{t.name}</span>
        <span className="mt-2 block flex-1 leading-relaxed text-ink/70">{t.short}</span>
        <span className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            {duration ? (
              <>
                <Clock aria-hidden className="size-4" strokeWidth={1.75} />
                {duration}
              </>
            ) : null}
          </span>
          <span className="font-medium text-primary">{fromPrice(t)}</span>
        </span>
      </span>
    </TreatmentLink>
  );
}
