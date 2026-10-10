import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/stamning-massage-rum.jpg";
import skylt from "@/assets/malarns-gard-skylt.jpg";
import marita from "@/assets/marita-dorren.jpg";
import butik from "@/assets/malarns-gard-butik.jpg";
import imgAnsikte from "@/assets/stamning-mask.jpg";
import imgKurer from "@/assets/stamning-ansikte-hals.jpg";
import imgKropp from "@/assets/stamning-massage-rum.jpg";
import imgFransar from "@/assets/stamning-ansiktsmassage.jpg";
import imgHalsa from "@/assets/stamning-beroring.jpg";
import {
  BadgeCheck,
  Car,
  Clock,
  Gift,
  MapPin,
  Phone,
  Plus,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import {
  absoluteUrl,
  byGroup,
  contact,
  generalFaq,
  groupOrder,
  groups,
  localBusinessJsonLd,
  popularTreatments,
  testimonials,
  trustProof,
  type Group,
} from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Kicker,
  Reveal,
  SectionHead,
  textLink,
} from "@/components/site/primitives";
import { Guide } from "@/components/site/Guide";
import { TreatmentCard } from "@/components/site/Cards";

const TITLE = "Hudterapeut i Frillesås | Maritas Hud- och Yogaateljé – nära Kungsbacka";
const DESC =
  "Auktoriserad hudterapeut på Målarns Gård i Frillesås sedan 2001. Ansiktsbehandlingar, hudkurer, massage med varma stenar, fransar och bryn. Nära Åsa, Fjärås och Kungsbacka.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: Index,
});

/** Bild per kategori (stämningsbilder – byts mot egna bilder från ateljén när de finns). */
const groupImage: Record<Group, string> = {
  ansikte: imgAnsikte,
  kurer: imgKurer,
  kropp: imgKropp,
  fransar: imgFransar,
  halsa: imgHalsa,
};

const visitSteps: [string, string][] = [
  [
    "Boka",
    "Ring eller sms:a. Är du osäker på vad du ska välja tar vi ett kort konsultationssamtal först.",
  ],
  ["Hudanalys", "Vi börjar med att titta på din hud och prata om vad du vill uppnå."],
  [
    "Behandling",
    "Du ligger bekvämt i ateljén på Målarns Gård. Det är lugnt och varmt, och du kan alltid säga till.",
  ],
  [
    "Med dig hem",
    "Du får råd om hemvård som passar din hud. Produkterna kan du beställa med ett sms.",
  ],
];

function Index() {
  const review = testimonials[0];
  return (
    <>
      {/* 1. HERO – hel bildyta */}
      <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-ink pt-32 text-white md:min-h-[760px] md:items-center">
        <img
          src={hero}
          alt="Stämningsbild: lugn nackmassage i ett varmt, ombonat behandlingsrum"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_40%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10 md:bg-gradient-to-r md:from-ink/75 md:via-ink/35 md:to-transparent"
        />
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-14 md:px-10 md:pb-0">
          <div className="max-w-xl">
            <Reveal>
              <Kicker className="text-white/85">Auktoriserad hudterapeut · Frillesås</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[3.1rem] leading-[1.02] md:text-[5rem]">
                Hudvård med omsorg, <em className="font-medium italic">inne på gården.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
                Ansiktsbehandlingar, hudkurer och massage hos Marita på Målarns Gård i Frillesås –
                sedan 2001.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
              <BookButton variant="light" />
              <Link
                to="/prislista"
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-7 py-3 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ink"
              >
                Se prislistan
              </Link>
            </Reveal>
            <Reveal
              delay={320}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/25 pt-5 text-sm text-white/85"
            >
              {trustProof.items.slice(0, 3).map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <BadgeCheck aria-hidden className="size-4" strokeWidth={1.5} />
                  {item}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. KATEGORIER */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <SectionHead
            kicker="Behandlingar"
            title="Vad vill du boka?"
            lead="Alla behandlingar är samlade i fem områden. Välj ett område – eller sök efter ditt hudbehov längre ner."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {groupOrder.map((g, i) => (
              <Reveal as="li" key={g} delay={i * 70}>
                <Link
                  to="/behandlingar"
                  hash={groups[g].slug}
                  className="lift group flex h-full flex-col overflow-hidden rounded-2xl bg-white"
                >
                  <span className="block aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
                    <img
                      src={groupImage[g]}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-serif text-xl leading-snug">{groups[g].label}</span>
                    <span className="mt-1 text-sm text-ink/65">{groups[g].lead}</span>
                    <span className="mt-4 text-sm font-medium text-primary">
                      {byGroup(g).length} {byGroup(g).length === 1 ? "behandling" : "behandlingar"}{" "}
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. POPULÄRA BEHANDLINGAR */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead kicker="Börja här" title="Populära behandlingar" />
            <Link to="/behandlingar" className={textLink}>
              Alla behandlingar och priser →
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTreatments.map((t, i) => (
              <Reveal as="li" key={t.slug} delay={(i % 3) * 80}>
                <TreatmentCard t={t} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. HUDBEHOV */}
      <section id="hudbehov" className="bg-sand scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <SectionHead
            kicker="Hitta rätt behandling"
            title="Vad vill du ha hjälp med?"
            lead="Du behöver inte kunna namnen på behandlingarna. Välj det som stämmer bäst, så ser du vad som kan passa dig."
          />
          <div className="mt-10">
            <Guide />
          </div>
        </div>
      </section>

      {/* 5. OM MARITA */}
      <section className="py-16 md:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <div className="arch mx-auto aspect-[4/5] max-w-md">
              <img
                src={marita}
                alt="Marita står i dörren till sin ateljé på Målarns Gård och ler"
                loading="lazy"
                className="h-full w-full object-cover object-[45%_center]"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <Kicker>Möt Marita</Kicker>
            <blockquote className="mt-5 font-serif text-[2.1rem] leading-snug text-primary md:text-5xl">
              ”Jag brukar säga att jag har världens bästa jobb!”
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Marita började som hudterapeut på Varbergs Kurort och har haft sin egen ateljé sedan
              2001. Hon har ett stort intresse för hudens hälsa – både inifrån och utifrån – och
              skräddarsyr behandlingar och hemvård efter just din hud.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {trustProof.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-ink/80">
                  <BadgeCheck aria-hidden className="size-5 text-primary" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/om-marita" className={`${textLink} mt-6`}>
              Läs mer om Marita →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. ETT BESÖK */}
      <section className="bg-dimbla py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <SectionHead kicker="Ditt besök" title="Så går ett besök till" center />
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {visitSteps.map(([h, p], i) => (
              <Reveal as="li" key={h} delay={i * 90} className="rounded-2xl bg-white p-6">
                <span className="grid size-10 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-2xl">{h}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{p}</p>
              </Reveal>
            ))}
          </ol>
          {review ? (
            <Reveal className="mx-auto mt-12 max-w-3xl text-center">
              <blockquote className="font-serif text-3xl leading-snug">”{review.quote}”</blockquote>
              <p className="mt-4 text-sm text-ink/70">— {review.name}</p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* 7. HEMVÅRD + PRESENTKORT */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-6 md:grid-cols-2 md:px-10">
          <Reveal className="overflow-hidden rounded-2xl bg-white">
            <img
              src={butik}
              alt="Butiksskylten på Målarns Gård med blommande syrener"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-7 md:p-9">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-champagne">
                <ShoppingBag aria-hidden className="size-4" strokeWidth={1.75} /> Hemvård
              </p>
              <h2 className="mt-2 text-3xl">Din hudvård – hem i brevlådan</h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                Maria Åkerberg, Esse och Neostrata. Beställ med ett sms så skickas produkterna hem
                utan kostnad.
              </p>
              <Link to="/hemvard" className={`${textLink} mt-4`}>
                Så beställer du →
              </Link>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-dimbla p-7 text-ink md:p-9"
          >
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-champagne">
                <Gift aria-hidden className="size-4" strokeWidth={1.75} /> Presentkort
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl">Ge bort en stund som bara är hennes</h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink/75">
                Till födelsedagen, Mors dag eller jul. Välj en behandling eller ett belopp – betala
                med Swish.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/presentkort"
                className="inline-flex min-h-12 items-center rounded-full bg-primary px-7 py-3 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-primary-foreground hover:bg-ink"
              >
                Köp presentkort
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FRÅGOR + PRAKTISKT */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <SectionHead kicker="Vanliga frågor" title="Bra att veta innan du kommer" />
            <div className="mt-8 space-y-3">
              {generalFaq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl bg-porslin px-6 py-1 open:pb-5"
                >
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Plus
                      aria-hidden
                      className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="leading-relaxed text-ink/75">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="rounded-2xl bg-sand p-7">
              <h2 className="text-2xl">Praktisk information</h2>
              <ul className="mt-5 space-y-4 text-[0.95rem]">
                <li className="flex gap-3">
                  <MapPin
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <span>
                    {contact.venue}, {contact.street}, {contact.locality}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <span>
                    <a href={contact.phoneHref} className="underline underline-offset-4">
                      {contact.phone}
                    </a>{" "}
                    (även sms) ·{" "}
                    <a href={contact.landlineHref} className="underline underline-offset-4">
                      {contact.landline}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Car
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  Gratis parkering intill ateljén
                </li>
                <li className="flex gap-3">
                  <Wallet
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  {contact.payment}
                </li>
                <li className="flex gap-3">
                  <Clock
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  {contact.openingHours || "Ring eller sms:a för lediga tider"}
                </li>
              </ul>
              <Link to="/kontakt" className={`${textLink} mt-5`}>
                Karta och vägbeskrivning →
              </Link>
            </div>
            <CareNotice className="mt-5" />
          </Reveal>
        </div>
      </section>

      {/* 9. AVSLUTANDE BOKNING */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="grid overflow-hidden rounded-2xl bg-sand text-ink md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <Kicker>Välkommen in</Kicker>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
                Ta en stund för dig själv.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Boka din tid – eller ring Marita om du vill prata först. Ateljén ligger inne på
                Målarns Gård, med gratis parkering intill.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookButton />
                <ConsultButton />
              </div>
            </div>
            <img
              src={skylt}
              alt="Emaljskylten Målarns Gård, Anno 1908, med murgröna på den vita panelväggen"
              loading="lazy"
              className="h-72 w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
