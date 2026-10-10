import { useState } from "react";
import { concerns, getTreatment } from "@/content/site";
import { BookButton, ConsultButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { cn } from "@/lib/utils";

/**
 * Hitta behandling efter hudbehov.
 * Välj ett hudbehov (knappar) – förslagen visas direkt under. Fungerar likadant i dator och mobil.
 */
export function Guide() {
  const [active, setActive] = useState(concerns[0]?.id ?? "");
  const current = concerns.find((c) => c.id === active);
  if (!current) return null;
  return (
    <div>
      <div role="tablist" aria-label="Välj hudbehov" className="flex flex-wrap gap-2.5">
        {concerns.map((c) => {
          const on = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="hudbehov-svar"
              onClick={() => setActive(c.id)}
              className={cn(
                "min-h-12 rounded-full border px-5 py-2.5 text-[0.95rem] transition-colors duration-200",
                on
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-ink/20 bg-white text-ink hover:border-primary hover:text-primary",
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      <div
        id="hudbehov-svar"
        role="tabpanel"
        aria-live="polite"
        className="mt-6 grid gap-8 rounded-3xl bg-white p-6 md:grid-cols-12 md:p-10"
      >
        <div className="md:col-span-5">
          <h3 className="text-3xl">{current.label}</h3>
          <p className="mt-4 leading-relaxed text-ink/75">{current.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookButton />
            <ConsultButton />
          </div>
        </div>
        <ul className="divide-y divide-border md:col-span-6 md:col-start-7">
          {current.treatments.map((slug) => {
            const t = getTreatment(slug);
            if (!t) return null;
            return (
              <li key={slug}>
                <TreatmentLink
                  slug={slug}
                  className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-4"
                >
                  <span className="block aspect-square overflow-hidden rounded-xl">
                    <img
                      src={t.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-serif text-xl">{t.name}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{t.short}</span>
                  </span>
                  <span
                    aria-hidden
                    className="text-primary transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </TreatmentLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
