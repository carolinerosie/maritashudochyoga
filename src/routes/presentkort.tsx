import { createFileRoute } from "@tanstack/react-router";
import { Gift } from "lucide-react";
import bild from "@/assets/stamning-beroring.jpg";
import { absoluteUrl, contact } from "@/content/site";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import { TreatmentLink } from "@/components/site/TreatmentLink";

const TITLE = "Presentkort på hudvård och massage – Maritas, Frillesås";
const DESC =
  "Ge bort en ansiktsbehandling, tibetansk faceliftmassage eller massage med varma stenar. Presentkort hos Maritas Hud- och Yogaateljé i Frillesås.";

export const Route = createFileRoute("/presentkort")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/presentkort") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/presentkort") }],
  }),
  component: GiftCards,
});

const ideas: [string, string][] = [
  ["massage-varma-stenar", "Massage med varma stenar – 60 min"],
  ["tibetansk-faceliftmassage", "Tibetansk faceliftmassage – provbehandling"],
  ["ansiktsbehandlingar", "Ansiktslyx – 90 min"],
  ["beroring-reiki-healing", "Beröring, Reiki & healing"],
];

function GiftCards() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-6">
          <Eyebrow>Presentkort</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            Ge bort tid – <em className="text-clay">inte en sak till.</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Ett presentkort hos Marita passar till födelsedagar, Mors dag, jul eller bara som ett
            tack. Välj en behandling eller ett belopp.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {ideas.map(([slug, label]) => (
              <li key={slug}>
                <TreatmentLink
                  slug={slug}
                  className="group flex items-center justify-between gap-4 py-4 font-serif text-xl"
                >
                  {label}
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </TreatmentLink>
              </li>
            ))}
          </ul>
          <div className="mt-10 bg-sand p-6">
            <p className="flex items-center gap-3 font-serif text-2xl">
              <Gift aria-hidden className="size-6 text-clay" strokeWidth={1.5} />
              Så köper du
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Ring eller skicka ett sms till Marita på{" "}
              <a
                href={contact.phoneHref}
                data-event="gift_card_click"
                className="border-b border-foreground/40 font-semibold"
              >
                {contact.phone}
              </a>{" "}
              och berätta vilken behandling eller vilket belopp du vill ge bort. Betalning sker med
              Swish eller Bankgiro.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5 md:col-start-8">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={bild}
              alt="Stämningsbild: en behandlare lägger handen lätt på en vilande kunds panna"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
