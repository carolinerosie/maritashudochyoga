import { useEffect, useRef, useState } from "react";
import { BatteryLow, Bone, Brain, Check, Compass, Droplets, Moon, Repeat, type LucideIcon } from "lucide-react";
import { getTreatment, groups, guideOptions, type GuideOption } from "@/content/site";
import { BookButton, ConsultButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  kake: Moon,
  huvud: Brain,
  tung: Droplets,
  vark: Bone,
  stress: BatteryLow,
  monster: Repeat,
  vetinte: Compass,
};

function Answer({ option }: { option: GuideOption }) {
  return (
    <div key={option.id} className="animate-in fade-in duration-300 bg-background p-6 md:p-10">
      <p className="eyebrow text-clay">Mitt förslag</p>
      <p className="mt-4 font-serif text-2xl leading-snug md:text-[1.75rem]">{option.reply}</p>
      <p className="eyebrow mt-8 text-muted-foreground">Det här kan passa dig</p>
      <ul className="mt-3 divide-y divide-border border-y border-border">
        {option.treatments.map((slug) => {
          const t = getTreatment(slug);
          if (!t) return null;
          return (
            <li key={slug}>
              <TreatmentLink slug={slug} className="group flex items-center justify-between gap-4 py-4">
                <span>
                  <span className={cn("eyebrow mr-3 text-[0.62rem]", groups[t.group].color)}>{groups[t.group].label}</span>
                  <span className="font-serif text-xl">{t.name}</span>
                </span>
                <span aria-hidden className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">→</span>
              </TreatmentLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <BookButton>Boka tid</BookButton>
        <ConsultButton />
      </div>
    </div>
  );
}

/**
 * Vägvisaren "Hur mår du just nu?".
 * Dator: valen till vänster, svaret i ett eget fält till höger.
 * Mobil: svaret fälls ut direkt under valet, och det valda påståendet hålls kvar i bild.
 */
export function Guide() {
  const [active, setActive] = useState<string>("kake");
  const [userChose, setUserChose] = useState(false);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const current = guideOptions.find((o) => o.id === active);

  useEffect(() => {
    if (!userChose) return;
    if (typeof window === "undefined" || window.matchMedia("(min-width: 1024px)").matches) return;
    const el = itemRefs.current[active];
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    });
  }, [active, userChose]);

  if (!current) return null;

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="min-w-0 lg:col-span-6">
        <p className="mb-4 text-sm font-semibold text-foreground/70">Tryck på det som stämmer bäst:</p>
        <ul className="min-w-0 space-y-2" role="list">
          {guideOptions.map((o) => {
            const on = o.id === active;
            const Icon = icons[o.id] ?? Compass;
            return (
              <li key={o.id} ref={(el) => { itemRefs.current[o.id] = el; }} className="scroll-mt-24">
                <button
                  type="button"
                  onClick={() => {
                    setActive(o.id);
                    setUserChose(true);
                  }}
                  aria-pressed={on}
                  aria-controls={`guide-answer-${o.id}`}
                  className={cn(
                    "grid min-h-16 w-full grid-cols-[2.75rem_minmax(0,1fr)_1.5rem] items-center gap-4 border px-4 py-4 text-left transition-colors duration-200",
                    on
                      ? "border-primary bg-background text-foreground"
                      : "border-transparent bg-background/45 text-foreground/75 hover:border-foreground/20 hover:bg-background/80 hover:text-foreground",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-11 place-items-center rounded-full transition-colors duration-200",
                      on ? "bg-primary text-primary-foreground" : "bg-sand text-clay",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 font-serif text-lg leading-snug md:text-xl">{o.feeling}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-6 place-items-center rounded-full border transition-colors duration-200",
                      on ? "border-primary bg-primary text-primary-foreground" : "border-foreground/30",
                    )}
                  >
                    {on ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
                  </span>
                </button>
                {on && (
                  <div id={`guide-answer-${o.id}`} className="border-x border-b border-primary lg:hidden">
                    <Answer option={o} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-28 border border-primary" aria-live="polite">
          <div className="flex items-center gap-3 border-b border-border bg-background px-10 pt-8 pb-6">
            <span className="eyebrow shrink-0 whitespace-nowrap text-muted-foreground">Du valde</span>
            <span className="font-serif text-lg italic text-foreground">”{current.feeling}”</span>
          </div>
          <Answer option={current} />
        </div>
      </div>
    </div>
  );
}
