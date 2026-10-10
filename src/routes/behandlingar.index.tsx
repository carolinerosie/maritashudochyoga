import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl, byGroup, groupOrder, groups } from "@/content/site";
import { BookButton, ConsultButton, Kicker, Reveal, textLink } from "@/components/site/primitives";
import { TreatmentCard } from "@/components/site/Cards";
import { Guide } from "@/components/site/Guide";

const TITLE = "Behandlingar – ansiktsbehandlingar, hudkurer och massage i Frillesås | Maritas";
const DESC =
  "Alla behandlingar hos hudterapeut Marita i Frillesås: ansiktsbehandlingar, microneedling, PRX-PLUS, tibetansk faceliftmassage, massage med varma stenar, fransar och bryn.";

export const Route = createFileRoute("/behandlingar/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/behandlingar") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/behandlingar") }],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <Kicker>Behandlingar</Kicker>
            <h1 className="mt-4 text-[2.6rem] leading-[1.08] md:text-6xl">Alla behandlingar</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Här hittar du allt Marita erbjuder, samlat efter typ av behandling. Vill du hellre
              utgå från vad du vill ha hjälp med?{" "}
              <a href="#hudbehov" className="text-primary underline underline-offset-4">
                Sök efter hudbehov
              </a>
              .
            </p>
          </Reveal>
          <nav aria-label="Hoppa till område" className="mt-8 flex flex-wrap gap-2.5">
            {groupOrder.map((g) => (
              <a
                key={g}
                href={`#${groups[g].slug}`}
                className="min-h-11 rounded-full border border-ink/20 bg-white px-5 py-2.5 text-[0.95rem] hover:border-primary hover:text-primary"
              >
                {groups[g].label}
              </a>
            ))}
            <Link
              to="/prislista"
              className="min-h-11 rounded-full bg-primary px-5 py-2.5 text-[0.95rem] text-primary-foreground"
            >
              Prislista
            </Link>
          </nav>
        </div>
      </section>

      {groupOrder.map((g, gi) => (
        <section
          key={g}
          id={groups[g].slug}
          className={`scroll-mt-28 py-14 md:py-20 ${gi % 2 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl leading-tight">{groups[g].label}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{groups[g].text}</p>
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {byGroup(g).map((t, i) => (
                <Reveal as="li" key={t.slug} delay={(i % 3) * 70}>
                  <TreatmentCard t={t} showGroup={false} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section id="hudbehov" className="bg-sand scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <Kicker>Hitta rätt behandling</Kicker>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Sök efter hudbehov</h2>
          </Reveal>
          <div className="mt-10">
            <Guide />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl">Osäker på vad du ska välja?</h2>
          <div className="flex flex-wrap gap-3">
            <ConsultButton />
            <BookButton />
          </div>
          <Link to="/prislista" className={textLink}>
            Se hela prislistan →
          </Link>
        </div>
      </section>
    </>
  );
}
