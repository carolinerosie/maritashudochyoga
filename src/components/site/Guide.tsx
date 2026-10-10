import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getTreatment, groups, guideOptions, type GuideOption } from "@/content/site";
import { BookButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Answer({ option }: { option: GuideOption }) {
  return (
    <div key={option.id} className="animate-in fade-in duration-300">
      <p className="font-serif text-2xl leading-snug md:text-[1.75rem]">{option.reply}</p>
      <p className="eyebrow mt-10 text-muted-foreground">Det här kan passa dig</p>
      <ul className="mt-4 space-y-1 bg-background/70 px-5 py-2">
        {option.treatments.map((slug) => {
          const t = getTreatment(slug);
          if (!t) return null;
          return (
            <li key={slug}>
              <TreatmentLink slug={slug} className="group flex items-baseline justify-between gap-4 py-4">
                <span>
                  <span className={cn("eyebrow mr-3 text-[0.62rem]", groups[t.group].color)}>
                    {groups[t.group].label}
                  </span>
                  <span className="font-serif text-xl">{t.name}</span>
                </span>
                <span className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">→</span>
              </TreatmentLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <BookButton>Boka tid</BookButton>
        <Link to="/kontakt" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground">
          Hör av dig om du är osäker <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export function Guide() {
  const [active, setActive] = useState<string>("kake");
  const current = guideOptions.find((o) => o.id === active);
  if (!current) return null;
  return (
    <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-20">
      <ul className="min-w-0 space-y-2 lg:col-span-6">
        {guideOptions.map((o, i) => {
          const on = o.id === active;
          return (
            <li key={o.id}>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setActive(o.id)}
                aria-pressed={on}
                className={cn(
                  "relative grid h-auto min-h-16 w-full grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 rounded-sm px-4 py-5 text-left font-normal whitespace-normal transition-colors duration-200",
                  on ? "bg-background text-foreground hover:bg-background" : "text-foreground/60 hover:bg-background/45 hover:text-foreground",
                )}
              >
                <span className={cn("eyebrow mt-1 text-[0.68rem]", on ? "text-clay" : "text-muted-foreground")}>0{i + 1}</span>
                <span className="min-w-0 font-serif text-lg leading-snug md:text-xl">{o.feeling}</span>
                <span
                  aria-hidden
                  className={cn("absolute inset-y-0 left-0 w-0.5 bg-clay transition-opacity duration-300", on ? "opacity-100" : "opacity-0")}
                />
              </Button>
              {on && (
                <div className="pb-10 pl-12 pr-4 pt-5 lg:hidden">
                  <Answer option={o} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-32">
          <Answer option={current} />
        </div>
      </div>
    </div>
  );
}
