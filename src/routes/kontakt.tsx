import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Car, Clock, Mail, MapPin, Phone, Wallet } from "lucide-react";
import ateljen from "@/assets/malarns-gard-ateljen.jpg";
import { absoluteUrl, contact, localBusinessJsonLd } from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Eyebrow,
  Reveal,
} from "@/components/site/primitives";

const TITLE = "Hitta hit & kontakt – Maritas Hud- och Yogaateljé, Frillesås";
const DESC =
  "Maritas ateljé ligger på Målarns Gård, Målarns väg 5 i Frillesås – nära Åsa och Kungsbacka. Ring 0702-38 46 54 eller 0340-65 73 88. Gratis parkering.";

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

const row = "grid grid-cols-[8.5rem_minmax(0,1fr)] gap-x-4 py-5";
const dt = "text-sm font-medium flex items-center gap-2 text-muted-foreground";
const link = "border-b border-foreground/30 hover:border-foreground";

function Contact() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <Eyebrow>Hitta hit</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            Välkommen till <em className="not-italic text-primary">Målarns Gård.</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Ateljén ligger inne på gården i Frillesås, några minuter från havet. Hör av dig för att
            boka – eller ring för ett konsultationssamtal om du är osäker på vad som passar dig.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookButton>Boka tid</BookButton>
          </div>

          <dl className="mt-16 divide-y divide-border border-y border-border">
            <div className={row}>
              <dt className={dt}>
                <Phone aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                Telefon
              </dt>
              <dd className="min-w-0 space-y-1">
                <a href={contact.phoneHref} data-event="call_click" className={link}>
                  {contact.phone}
                </a>
                <span className="text-sm text-muted-foreground"> (mobil, även sms)</span>
                <br />
                <a href={contact.landlineHref} data-event="call_click" className={link}>
                  {contact.landline}
                </a>
              </dd>
            </div>
            <div className={row}>
              <dt className={dt}>
                <CalendarCheck aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                Bokning
              </dt>
              <dd className="min-w-0">
                Ring eller{" "}
                <a href={contact.smsHref} data-event="sms_click" className={link}>
                  skicka ett sms
                </a>
              </dd>
            </div>
            {contact.email ? (
              <div className={row}>
                <dt className={dt}>
                  <Mail aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                  E-post
                </dt>
                <dd className="min-w-0">
                  <a href={`mailto:${contact.email}`} className={link}>
                    {contact.email}
                  </a>
                </dd>
              </div>
            ) : null}
            {contact.openingHours ? (
              <div className={row}>
                <dt className={dt}>
                  <Clock aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                  Öppettider
                </dt>
                <dd className="min-w-0">{contact.openingHours}</dd>
              </div>
            ) : null}
            <div className={row}>
              <dt className={dt}>
                <MapPin aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                Ateljén
              </dt>
              <dd className="min-w-0">
                <address className="not-italic">
                  {contact.businessName}
                  <br />
                  {contact.venue}, {contact.street}
                  <br />
                  {[contact.postalCode, contact.locality].filter(Boolean).join(" ")}
                </address>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="directions_click"
                  className={`mt-2 inline-block text-sm ${link}`}
                >
                  Visa på Google Maps
                </a>
              </dd>
            </div>
            <div className={row}>
              <dt className={dt}>
                <Car aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                Parkering
              </dt>
              <dd className="min-w-0">Gratis parkering intill ateljén.</dd>
            </div>
            <div className={row}>
              <dt className={dt}>
                <Wallet aria-hidden className="size-4 text-jord-ink" strokeWidth={1.5} />
                Betalning
              </dt>
              <dd className="min-w-0">
                {contact.payment} {contact.cancellation}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-6 md:col-span-6 md:col-start-7">
          <Reveal delay={150}>
            <div className="arch aspect-[4/5]">
              <img
                src={ateljen}
                alt="Ateljén på Målarns Gård – vit trästuga med blå knutar, skylten Välkommen och flaggor för SHR och Maria Åkerberg"
                className="h-full w-full object-cover object-[50%_55%]"
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="mt-6 text-3xl">Osäker på vad som passar dig?</h2>
            <p className="mt-3 leading-relaxed text-foreground/75">
              Du behöver inte kunna behandlingarna. Börja med hur du mår, så visar vägvisaren var du
              kan börja – eller ring Marita så pratar ni först.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <ConsultButton />
              <Link
                to="/"
                hash="hur-mar-du"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground"
              >
                Hitta rätt behandling{" "}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
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
              <h2 className="mt-4 text-3xl md:text-4xl">
                {contact.venue}, {contact.street}, {contact.locality}
              </h2>
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-event="directions_click"
              className="inline-flex min-h-11 items-center gap-2 border-b border-foreground/30 text-sm font-semibold hover:border-foreground"
            >
              Vägbeskrivning i Google Maps <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="mt-8 aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-sand sm:aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src={contact.mapsEmbedUrl}
              title={`Karta: ${contact.venue}, ${contact.street}, ${contact.locality}`}
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
