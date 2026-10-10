import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import boka from "@/assets/boka.jpg";
import { absoluteUrl, BOOKING_URL, contact, localBusinessJsonLd } from "@/content/site";
import { BookButton, CareNotice, ConsultButton, Eyebrow, Reveal } from "@/components/site/primitives";

const TITLE = "Hitta hit & kontakt – Anna Flatöe, Mölndal";
const DESC = "Skapa din hälsa finns i Mölndal, nära Göteborg. Boka via Bokadirekt eller hör av dig om du är osäker.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/kontakt") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/kontakt") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
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
            <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-4 py-5">
              <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><CalendarCheck aria-hidden className="size-4 text-clay" strokeWidth={1.5} />Bokning</dt>
              <dd className="min-w-0">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="border-b border-foreground/30 hover:border-foreground">
                  bokadirekt.se
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-4 py-5">
              <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><Phone aria-hidden className="size-4 text-clay" strokeWidth={1.5} />Telefon</dt>
              <dd className="min-w-0">
                <a href={contact.phoneHref} className="border-b border-foreground/30 hover:border-foreground">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-4 py-5">
              <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><Mail aria-hidden className="size-4 text-clay" strokeWidth={1.5} />E-post</dt>
              <dd className="min-w-0">
                <a href={`mailto:${contact.email}`} className="border-b border-foreground/30 hover:border-foreground">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-4 py-5">
              <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><MapPin aria-hidden className="size-4 text-clay" strokeWidth={1.5} />Mottagning</dt>
              <dd className="min-w-0">
                <address className="not-italic">
                  {contact.venue}
                  <br />
                  {contact.street}, {contact.postalCode} {contact.locality}
                </address>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block border-b border-foreground/30 text-sm hover:border-foreground">
                  Visa på Google Maps
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-6 md:col-span-6 md:col-start-7">
          <Reveal delay={150}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={boka} alt="Anna tar emot en klient" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="mt-6 text-3xl">Osäker på vad som passar dig?</h2>
            <p className="mt-3 leading-relaxed text-foreground/75">
              Du behöver inte kunna behandlingarna. Börja med hur du mår, så visar vägvisaren var du kan börja – eller boka ett kostnadsfritt samtal på 30 minuter så pratar vi först.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <ConsultButton />
              <Link to="/" hash="var-sitter-det" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground">
                Hitta rätt behandling <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
          <CareNotice />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1280px] px-6 md:mt-28 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Karta</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl">{contact.venue}, {contact.street}</h2>
            </div>
            <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-foreground/30 text-sm font-semibold hover:border-foreground">
              Vägbeskrivning i Google Maps <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="mt-8 aspect-[4/5] overflow-hidden border border-border bg-sand sm:aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src={contact.mapsEmbedUrl}
              title={`Karta: ${contact.venue}, ${contact.street}, ${contact.postalCode} ${contact.locality}`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
