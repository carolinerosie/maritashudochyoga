import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/stamning-massage-rum.jpg";
import ateljen from "@/assets/malarns-gard-ateljen.jpg";
import marita from "@/assets/marita-dorren.jpg";
import butik from "@/assets/malarns-gard-butik.jpg";
import hudenArt from "@/assets/stamning-mask.jpg";
import fornyelsenArt from "@/assets/stamning-ansiktsmassage.jpg";
import lugnetArt from "@/assets/stamning-beroring.jpg";
import {
  BadgeCheck,
  CalendarHeart,
  Clock,
  Droplet,
  Flower2,
  HandHeart,
  House,
  MessagesSquare,
  Quote,
  ScanFace,
  ShoppingBag,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";
import {
  absoluteUrl,
  FLAGSHIP_SLUG,
  getTreatment,
  groups,
  localBusinessJsonLd,
  testimonials,
  treatments,
  trustProof,
  type Group,
} from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Eyebrow,
  Horizon,
  Reveal,
  secondaryLinkClass,
} from "@/components/site/primitives";
import { Guide } from "@/components/site/Guide";
import { TreatmentLink } from "@/components/site/TreatmentLink";
import { cn } from "@/lib/utils";

const TITLE = "Maritas Hud- och Yogaateljé | Hudterapeut i Frillesås nära Kungsbacka";
const DESC =
  "Hudterapeut i Frillesås sedan 2001. Ansiktsbehandlingar, tibetansk faceliftmassage, microneedling, PRX-PLUS, massage med varma stenar och mer – på Målarns Gård, nära Åsa och Kungsbacka.";

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

const recognitions: [LucideIcon, string][] = [
  [Droplet, "Huden känns torr, trött och inte riktigt som din."],
  [ShoppingBag, "Badrumsskåpet är fullt av krämer – men du vet inte vad som fungerar."],
  [Sparkles, "Du ser fler linjer och vill ta hand om dem på ett naturligt sätt."],
  [Flower2, "Du vill inte bli såld till. Du vill bli sedd av någon som kan hud."],
  [Wind, "Kroppen är spänd och tankarna snurrar. Du behöver landa."],
  [Clock, "Du tar hand om alla andra. Det är länge sedan du tog tid för dig själv."],
];

/** Bilder till områdeskorten (stämningsbilder). Byt fil i src/assets/ för att byta bild. */
const groupArt: Record<Group, { src: string; alt: string }> = {
  hud: { src: hudenArt, alt: "Stämningsbild: en ansiktsmask penslas på – Huden" },
  fornyelse: {
    src: fornyelsenArt,
    alt: "Stämningsbild: ansiktsmassage med mjuka handgrepp – Förnyelsen",
  },
  lugn: { src: lugnetArt, alt: "Stämningsbild: lätt beröring av en vilande kunds panna – Lugnet" },
};

const steps: [LucideIcon, string, string][] = [
  [
    ScanFace,
    "Hudanalys",
    "Vi börjar med att titta på din hud och prata om vad du vill. Det tar en kvart och kostar 200 kr – eller ingår när du bokar en behandling.",
  ],
  [
    MessagesSquare,
    "Din plan",
    "Du får ett ärligt förslag: en enstaka behandling, en kur eller bara bättre hemvård. Ingenting du inte behöver.",
  ],
  [
    HandHeart,
    "Behandlingen",
    "Du ligger bekvämt i ateljén på Målarns Gård. Det är lugnt, varmt och du kan alltid säga till.",
  ],
  [
    House,
    "Med dig hem",
    "Du får en hemvård som passar din hud. Produkterna kan du beställa med ett sms – de skickas hem till dig utan kostnad.",
  ],
];

function Index() {
  const review = testimonials[0];
  const flagship = getTreatment(FLAGSHIP_SLUG);
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-ink pt-28 text-ink-foreground md:min-h-[760px] md:items-center md:pt-24">
        <img
          src={hero}
          alt="Stämningsbild: lugn nackmassage i ett varmt, ombonat behandlingsrum"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[55%_45%] md:object-[50%_55%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-ink/45 md:bg-gradient-to-r md:from-ink/70 md:via-ink/35 md:to-transparent"
          aria-hidden
        />
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-0">
          <div className="max-w-[32rem] md:max-w-[40rem]">
            <Reveal>
              <p className="eyebrow text-ink-foreground/80">Hudterapeut · Frillesås · sedan 2001</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 max-w-[12ch] text-[3.3rem] leading-[0.96] md:text-[5rem]">
                Din hud i trygga händer.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-[31rem] text-lg leading-relaxed text-ink-foreground/90 md:text-xl">
                Hudvård, hudkurer och lugn för kropp och sinne – i en ateljé på Målarns Gård, några
                minuter från havet.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <BookButton variant="light">Boka tid</BookButton>
              <Link
                to="/"
                hash="hur-mar-du"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-ink-foreground transition-colors duration-200 hover:text-background"
              >
                <span>Hitta rätt behandling</span>
                <span
                  aria-hidden
                  className="text-base transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-8 border-t border-ink-foreground/30 pt-5">
              <p className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm text-ink-foreground/90">
                <strong className="font-serif text-2xl font-medium text-ink-foreground">
                  {trustProof.headline}
                </strong>
                {trustProof.items.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <BadgeCheck aria-hidden className="size-4" strokeWidth={1.5} />
                    {item}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. IGENKÄNNING */}
      <section className="py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:gap-14 md:px-10 lg:grid-cols-12">
          <Reveal className="max-w-xl lg:col-span-4">
            <h2 className="text-4xl leading-tight md:text-5xl">
              Känner du igen <em>dig?</em>
            </h2>
            <Horizon className="mt-10 w-40 text-clay" />
          </Reveal>
          <ul className="lg:col-span-7 lg:col-start-6">
            {recognitions.map(([Icon, r], i) => (
              <Reveal
                as="li"
                key={r}
                delay={i * 90}
                className="flex items-start gap-5 border-t border-border py-6"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-sand text-clay"
                >
                  <Icon className="size-[1.15rem]" strokeWidth={1.5} />
                </span>
                <span className="font-serif text-xl leading-snug text-foreground/85 md:text-2xl">
                  {r}
                </span>
              </Reveal>
            ))}
            <Reveal as="li" className="border-t border-border pt-8 text-lg text-muted-foreground">
              Då är du välkommen hit. Vi börjar med hur <em>din</em> hud mår – inte med en produkt.
              <Link
                to="/"
                hash="hur-mar-du"
                className={cn(secondaryLinkClass, "mt-5 flex w-fit text-foreground")}
              >
                Hitta var du kan börja →
              </Link>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* 3. VÄGVISAREN */}
      <section id="hur-mar-du" className="scroll-mt-20 bg-sand py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="mb-10 max-w-2xl md:mb-14">
            <Eyebrow className="text-clay">Var vill du börja?</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Hur mår du just nu?</h2>
            <p className="mt-6 text-lg text-foreground/75">
              Du behöver inte kunna namnen på behandlingarna. Välj det som låter mest som du, så
              föreslår jag var vi kan börja.
            </p>
          </Reveal>
          <Guide />
        </div>
      </section>

      {/* 4. TRE OMRÅDEN */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Tre områden</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.1] md:text-6xl">
              Hud och välmående <em className="text-clay">hänger ihop.</em>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3">
            {(Object.keys(groups) as Group[]).map((g, i) => (
              <Reveal as="li" key={g} delay={i * 150} className="group flex flex-col bg-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={groupArt[g].src}
                    alt={groupArt[g].alt}
                    loading="lazy"
                    className="breathe-img h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className={cn("eyebrow", groups[g].color)}>{groups[g].lead}</p>
                  <h3 className="mt-3 text-4xl text-foreground">{groups[g].label}</h3>
                  <p className="mt-4 leading-relaxed text-foreground/80">{groups[g].text}</p>
                  <ul className="mt-6 divide-y divide-border border-t border-border">
                    {treatments
                      .filter((t) => t.group === g)
                      .map((t) => (
                        <li key={t.slug}>
                          <TreatmentLink
                            slug={t.slug}
                            className="group/link flex items-center justify-between gap-4 py-3 font-serif text-lg italic text-foreground transition-colors duration-200 hover:text-primary"
                          >
                            {t.name}
                            <span
                              aria-hidden
                              className="not-italic text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-1"
                            >
                              →
                            </span>
                          </TreatmentLink>
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. FLAGGSKEPP + ALLA BEHANDLINGAR */}
      <section id="behandlingar" className="scroll-mt-20 border-t border-border py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          {flagship ? (
            <div className="grid gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <TreatmentLink slug={flagship.slug} className="group block">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={flagship.image}
                      alt={flagship.imageAlt}
                      className="breathe-img h-full w-full object-cover"
                    />
                  </div>
                </TreatmentLink>
              </Reveal>
              <Reveal delay={200} className="flex flex-col justify-end md:col-span-5">
                <Eyebrow className="text-amber">Unikt i ateljén</Eyebrow>
                <h2 className="mt-4 hyphens-auto text-5xl md:text-6xl" lang="sv">
                  {flagship.name}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  Ett naturligt lyft utan nålar. Fyra behandlingar med bindvävsmassage, lymfdränage,
                  akupressur och oljemassage som arbetar med ett 90-tal muskler i ansikte,
                  hårbotten, hals och nacke.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Provbehandling 1 150 kr · 4 behandlingar 4 200 kr
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <BookButton>Boka provbehandling</BookButton>
                  <TreatmentLink slug={flagship.slug} className={secondaryLinkClass}>
                    Läs mer
                  </TreatmentLink>
                </div>
              </Reveal>
            </div>
          ) : null}

          <div className="mt-16 md:mt-24">
            <div className="flex items-baseline justify-between gap-6">
              <Eyebrow>Alla behandlingar</Eyebrow>
              <p className="hidden text-sm text-muted-foreground md:block">
                Huden · Förnyelsen · Lugnet
              </p>
            </div>
            <ul className="mt-8 grid gap-x-16 gap-y-2 md:grid-cols-2">
              {treatments
                .filter((t) => t.slug !== FLAGSHIP_SLUG)
                .map((t, i) => (
                  <Reveal as="li" key={t.slug} delay={(i % 4) * 80}>
                    <TreatmentLink
                      slug={t.slug}
                      className="group grid min-w-0 grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-5 py-6 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-7"
                    >
                      <span className="block aspect-square overflow-hidden">
                        <img
                          src={t.image}
                          alt=""
                          loading="lazy"
                          className="breathe-img h-full w-full object-cover"
                        />
                      </span>
                      <span className="block min-w-0">
                        <span className={cn("eyebrow text-[0.7rem]", groups[t.group].color)}>
                          {groups[t.group].label}
                        </span>
                        <span className="mt-2 flex items-center justify-between gap-5">
                          <span
                            className="min-w-0 hyphens-auto font-serif text-2xl transition-transform duration-200 group-hover:translate-x-1 md:text-3xl"
                            lang="sv"
                          >
                            {t.name}
                          </span>
                          <span className="text-xl text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                        <span className="mt-2 block max-w-md leading-relaxed text-foreground/70">
                          {t.short}
                        </span>
                      </span>
                    </TreatmentLink>
                  </Reveal>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. SÅ GÅR DET TILL */}
      <section className="bg-sand py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <h2 className="text-4xl leading-tight md:text-5xl">
              Så går det till. <em>I lugn och ro.</em>
            </h2>
            <div className="mt-10 aspect-[4/3] overflow-hidden">
              <img
                src={ateljen}
                alt="Ateljén på Målarns Gård i Frillesås med skylten Välkommen och SHR-flaggan Auktoriserad hudterapeut"
                className="breathe-img h-full w-full object-cover object-[50%_60%]"
              />
            </div>
          </Reveal>
          <ol className="md:col-span-6 md:col-start-7 md:pt-16">
            {steps.map(([Icon, h, p], i) => (
              <Reveal
                as="li"
                key={h}
                delay={i * 150}
                className="grid grid-cols-[4.5rem_1fr] border-t border-foreground/15 py-7 first:border-t-0"
              >
                <span
                  className="relative grid size-14 place-items-center rounded-full bg-background text-clay"
                  aria-hidden
                >
                  <Icon className="size-6" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-clay font-sans text-xs font-semibold text-ink-foreground">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="text-2xl">{h}</h3>
                  <p className="mt-2 leading-relaxed text-foreground/75">{p}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. MARITAS EGNA ORD */}
      <section className="py-16 md:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
          <Reveal className="relative md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={marita}
                alt="Marita står i dörren till sin ateljé på Målarns Gård och ler"
                loading="lazy"
                className="breathe-img h-full w-full object-cover object-[45%_center]"
              />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-clay">Marita om sitt arbete</p>
              <Quote aria-hidden className="mt-8 size-10 text-clay" strokeWidth={1.25} />
              <blockquote className="mt-4 font-serif text-3xl italic leading-[1.25] text-foreground md:text-[2.6rem]">
                Jag brukar säga att jag har världens bästa jobb!
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-foreground/70">— Marita</p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-10 max-w-lg leading-relaxed text-foreground/75">
                Marita började som hudterapeut på Varbergs Kurort och har haft sin egen ateljé sedan
                2001. Hon har ett stort intresse för hudens hälsa –{" "}
                <em className="text-foreground">både inifrån och utifrån</em> – och skräddarsyr
                behandlingar och hemvård efter just din hud. Hon vidareutbildar sig regelbundet.
              </p>
              <Link
                to="/om-marita"
                className={cn(secondaryLinkClass, "mt-8 w-fit text-foreground")}
              >
                Läs mer om Marita →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. KUNDRÖST / BEVIS – ankarfärg */}
      <section
        aria-label={review ? "Kundomdöme" : "Trygghet"}
        className="bg-primary py-20 text-primary-foreground md:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          {review ? (
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-primary-foreground/70">Från en kund</p>
              <blockquote className="mt-8 font-serif text-3xl italic leading-[1.3] md:text-5xl">
                ”{review.quote}”
              </blockquote>
              <p className="mt-8 text-sm text-primary-foreground/80">
                — {review.name}, {review.treatment.toLowerCase()}
              </p>
            </Reveal>
          ) : (
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-primary-foreground/70">Tryggt och kunnigt</p>
              <h2 className="mt-8 font-serif text-3xl italic leading-[1.3] md:text-5xl">
                Samma hudterapeut sedan 2001 – med utbildning, försäkring och omsorg.
              </h2>
              <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 border-t border-primary-foreground/25 pt-8 text-sm text-primary-foreground/90">
                {[...trustProof.items, "Behandlingsskadeförsäkring"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <BadgeCheck aria-hidden className="size-4" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* 9. BOKA */}
      <section id="boka-nu" className="py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={butik}
                  alt="Butiksskylten på Målarns Gård med blommande syrener"
                  loading="lazy"
                  className="breathe-img h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={200}
              className="flex flex-col justify-center md:col-span-5 md:col-start-8"
            >
              <Eyebrow>Målarns Gård · Frillesås</Eyebrow>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Ta tid för dig. <em>Resten ordnar vi.</em>
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/75">
                Boka din tid – eller ring Marita för ett konsultationssamtal om du är osäker på vad
                som passar dig. Gratis parkering finns intill ateljén.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <BookButton />
                <ConsultButton />
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link to="/presentkort" className={secondaryLinkClass}>
                  <CalendarHeart aria-hidden className="mr-2 size-4" strokeWidth={1.5} />
                  Presentkort
                </Link>
                <Link to="/kontakt" className={secondaryLinkClass}>
                  Hitta hit
                </Link>
              </div>
              <CareNotice className="mt-12" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
