import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import marita from "@/assets/marita-dorren.jpg";
import ateljen from "@/assets/ateljen-reception.jpg";
import { absoluteUrl, trustProof } from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Eyebrow,
  Reveal,
} from "@/components/site/primitives";

const TITLE = "Om Marita – hudterapeut i Frillesås sedan 2001";
const DESC =
  "Marita började på Varbergs Kurort och har haft egen ateljé på Målarns Gård i Frillesås sedan 2001. Auktoriserad hudterapeut med intresse för hudens hälsa inifrån och utifrån.";

export const Route = createFileRoute("/om-marita")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/om-marita") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/om-marita") }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="mx-auto grid max-w-[1280px] items-end gap-10 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-6">
            <Eyebrow>Om Marita</Eyebrow>
            <h1 className="mt-5 text-5xl leading-[1.01] md:text-6xl">
              ”Jag brukar säga att jag har{" "}
              <em className="not-italic text-primary">världens bästa jobb.</em>”
            </h1>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:col-start-8">
            <div className="arch aspect-square">
              <img
                src={marita}
                alt="Marita står i dörren till sin ateljé på Målarns Gård och ler"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-14 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:col-span-6 md:col-start-2">
            <Reveal>
              <p className="font-serif text-3xl leading-snug text-foreground">
                Marita började som hudterapeut på Varbergs Kurort och har haft sin egen ateljé sedan
                2001.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Ateljén ligger inne på Målarns Gård i Frillesås. Här tar hon emot i lugn och ro –
                med gratis parkering intill och några minuter till havet.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Marita har ett stort intresse för hudens hälsa – både inifrån och utifrån. Därför
                skräddarsyr hon varje behandling och den hemvård du får med dig, och hon
                vidareutbildar sig regelbundet.
              </p>
            </Reveal>
            <Reveal>
              <ul className="mt-4 space-y-3 border-t border-border pt-6 text-base">
                {[...trustProof.items, "Behandlingsskadeförsäkring"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <BadgeCheck aria-hidden className="size-5 text-champagne" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-4 md:col-start-9">
            <div className="arch aspect-[4/5]">
              <img
                src={ateljen}
                alt="Receptionen i ateljén med Maria Åkerberg-produkter, levande ljus och kursintyg på väggen"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-4xl md:text-5xl">Välkommen till ateljén.</h2>
            <div className="flex flex-wrap gap-4">
              <BookButton />
              <ConsultButton />
            </div>
          </div>
          <CareNotice className="mt-10 max-w-xl md:mt-14" />
        </div>
      </section>
    </>
  );
}
