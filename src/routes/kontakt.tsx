import { createFileRoute, Link } from "@tanstack/react-router";
import boka from "@/assets/boka.jpg.asset.json";
import { BOOKING_URL } from "@/content/site";
import { BookButton, CareNotice, Eyebrow, Reveal } from "@/components/site/primitives";

const TITLE = "Hitta hit & kontakt – Anna Flatöe, Mölndal";
const DESC = "Skapa din hälsa finns i Mölndal, nära Göteborg. Boka via Bokadirekt eller hör av dig om du är osäker.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/kontakt" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <Eyebrow>Hitta hit</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            Välkommen till <em className="text-moss">Mölndal.</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Ett lugnt behandlingsrum en kort bit från Göteborg. Boka enklast via Bokadirekt – där ser du
            alla lediga tider.
          </p>
          <div className="mt-10">
            <BookButton>Boka tid via Bokadirekt</BookButton>
          </div>

          <dl className="mt-16 divide-y divide-border border-y border-border">
            <div className="grid grid-cols-3 py-5">
              <dt className="eyebrow text-muted-foreground">Bokning</dt>
              <dd className="col-span-2">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="border-b border-foreground/30 hover:border-foreground">
                  bokadirekt.se
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-6 md:col-span-6 md:col-start-7">
          <Reveal delay={150}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={boka.url} alt="Anna tar emot en klient" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="mt-6 text-3xl">Osäker på vad som passar dig?</h2>
            <p className="mt-3 leading-relaxed text-foreground/75">
              Du behöver inte kunna behandlingarna. Börja med hur du mår, så visar vägvisaren var du kan börja.
            </p>
            <Link to="/" hash="var-sitter-det" className="group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground">
              Hitta rätt behandling <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
          <CareNotice />
        </div>
      </div>
    </section>
  );
}
