import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, byGroup, contact, groupOrder, groups } from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Kicker,
  Reveal,
} from "@/components/site/primitives";
import { TreatmentLink } from "@/components/site/TreatmentLink";

const TITLE = "Prislista – hudterapeut i Frillesås | Maritas Hud- och Yogaateljé";
const DESC =
  "Priser och tider för alla behandlingar hos Marita i Frillesås: ansiktsbehandlingar från 490 kr, hudkurer, massage, fransar, bryn och epilering.";

export const Route = createFileRoute("/prislista")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/prislista") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/prislista") }],
  }),
  component: PriceList,
});

function PriceList() {
  return (
    <section className="pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-[1040px] px-6 md:px-10">
        <Reveal>
          <Kicker>Prislista</Kicker>
          <h1 className="mt-4 text-[2.6rem] leading-[1.08] md:text-6xl">Priser och tider</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            Där det finns två priser gäller det lägre för dig som köper din hudvård hos Marita.{" "}
            {contact.payment}
          </p>
          <nav aria-label="Hoppa till område" className="mt-8 flex flex-wrap gap-2.5">
            {groupOrder.map((g) => (
              <a
                key={g}
                href={`#pris-${groups[g].slug}`}
                className="min-h-11 rounded-full border border-ink/20 bg-white px-5 py-2.5 text-[0.95rem] hover:border-primary hover:text-primary"
              >
                {groups[g].label}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-12 space-y-10">
          {groupOrder.map((g) => (
            <Reveal key={g} as="section" className="scroll-mt-28 rounded-2xl bg-white p-6 md:p-10">
              <h2 id={`pris-${groups[g].slug}`} className="scroll-mt-28 text-3xl md:text-4xl">
                {groups[g].label}
              </h2>
              <div className="mt-6 space-y-8">
                {byGroup(g).map((t) => (
                  <div key={t.slug}>
                    <TreatmentLink
                      slug={t.slug}
                      className="font-serif text-xl text-primary underline-offset-4 hover:underline"
                    >
                      {t.name} →
                    </TreatmentLink>
                    <dl className="mt-2 divide-y divide-border border-y border-border">
                      {t.prices.map((p) => (
                        <div
                          key={p.label + p.price}
                          className="flex items-baseline justify-between gap-6 py-3"
                        >
                          <dt className="leading-snug">
                            {p.label}
                            {p.duration ? (
                              <span className="block text-sm text-muted-foreground sm:ml-2 sm:inline">
                                {p.duration}
                              </span>
                            ) : null}
                          </dt>
                          <dd
                            className={`text-right font-medium ${p.price.length < 18 ? "shrink-0 whitespace-nowrap" : "max-w-[50%]"}`}
                          >
                            {p.price}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    {t.priceNote ? (
                      <p className="mt-2 text-sm text-muted-foreground">{t.priceNote}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-salvia-tint p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-3xl">Boka din tid</h2>
            <p className="mt-3 text-ink/75">
              Ring eller sms:a {contact.phone}, eller ring {contact.landline}.{" "}
              {contact.cancellation}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <ConsultButton />
            </div>
          </div>
          <CareNotice className="self-end bg-white" />
        </div>
      </div>
    </section>
  );
}
