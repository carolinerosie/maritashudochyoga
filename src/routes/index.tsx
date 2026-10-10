import { createFileRoute, Link } from "@tanstack/react-router";
import anna from "@/assets/anna-portratt.webp.asset.json";
import kakled from "@/assets/kakled.jpg.asset.json";
import rum from "@/assets/behandlingsrum.jpg.asset.json";
import healingHeader from "@/assets/healing-header.jpg.asset.json";
import boka from "@/assets/boka.jpg.asset.json";
import { groups, testimonials, treatments, trustProof, type Group } from "@/content/site";
import { BookButton, CareNotice, Eyebrow, Reveal, secondaryLinkClass } from "@/components/site/primitives";
import { Guide } from "@/components/site/Guide";
import { TreatmentLink } from "@/components/site/TreatmentLink";
import { cn } from "@/lib/utils";

const TITLE = "Anna Flatöe – Skapa din hälsa | Kroppsterapi i Mölndal";
const DESC =
  "Käkledsbehandling, kinesiologi, lymfmassage, postural terapi, Theta Healing och coaching i Mölndal. För dig som vill släppa stress, värk och spänningar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const recognitions = [
  "Du vaknar med en käke som har jobbat hela natten.",
  "Huvudvärken sitter i, dag efter dag.",
  "Nacken släpper aldrig riktigt.",
  "Kroppen känns tung, trött och stel.",
  "Du har provat massage, sjukgymnast och vården – och fått höra att allt ser bra ut.",
  "Du vet att något behöver förändras, men inte var du ska börja.",
];

function Index() {
  const review = testimonials[0];
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-ink pt-28 text-ink-foreground md:min-h-[760px] md:items-center md:pt-24">
        <img
          src={anna.url}
          alt="Anna Flatöe sitter i en fåtölj och ler"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[54%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-ink/62 md:bg-ink/56" aria-hidden />
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-0">
          <div className="max-w-[32rem] md:max-w-[38rem]">
            <Reveal>
              <p className="eyebrow text-ink-foreground/75">Kroppsterapi & coaching · Mölndal</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 max-w-[10ch] text-[3.4rem] leading-[0.94] md:text-[5.1rem]">
                Kroppen bär det du bär.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-[31rem] text-lg leading-relaxed text-ink-foreground/90 md:text-xl">
                Spänd käke, huvudvärk eller en kropp som säger ifrån? Jag hjälper dig att börja där det känns – och förstå helheten bakom.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <BookButton variant="light">Boka en första behandling</BookButton>
              <Link
                to="/"
                hash="var-sitter-det"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-ink-foreground transition-colors duration-200 hover:text-background"
              >
                <span>Hitta rätt behandling</span>
                <span aria-hidden className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-8 border-t border-ink-foreground/30 pt-5">
              <a href="https://www.bokadirekt.se/places/anna-flatoe-skapa-din-halsa-42319" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 text-sm text-ink-foreground/90 hover:text-ink-foreground">
                <strong className="font-serif text-2xl font-medium text-ink-foreground">{trustProof.rating}</strong>
                <span>{trustProof.reviews} <span aria-hidden>↗</span></span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. IGENKÄNNING */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 md:px-10 lg:grid-cols-12">
          <Reveal className="max-w-xl lg:col-span-4">
            <h2 className="text-4xl leading-tight md:text-5xl">
              Du är inte <em>krånglig.</em> Du har bara burit på det länge.
            </h2>
          </Reveal>
          <ul className="lg:col-span-7 lg:col-start-6">
            {recognitions.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 90} className="border-t border-border py-6 font-serif text-xl leading-snug text-foreground/85 md:text-2xl">
                {r}
              </Reveal>
            ))}
            <Reveal as="li" className="border-t border-border pt-8 text-lg text-muted-foreground">
              Då har du kommit rätt. Här börjar vi med hur <em>du</em> mår – inte med en metod.
              <Link to="/" hash="var-sitter-det" className={cn(secondaryLinkClass, "mt-5 w-fit text-foreground")}>
                Hitta var du kan börja →
              </Link>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* 3. VAR SITTER DET? */}
      <section id="var-sitter-det" className="scroll-mt-20 bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="mb-14 max-w-2xl">
            <Eyebrow className="text-clay">Var sitter det?</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Hur mår du just nu?</h2>
            <p className="mt-6 text-lg text-foreground/75">
              Du behöver inte veta vilken behandling du behöver. Välj det som låter mest som du, så
              berättar jag var vi kan börja.
            </p>
          </Reveal>
          <Guide />
        </div>
      </section>

      {/* 4. HELHETEN */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Helheten</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.1] md:text-6xl">
              Det är inte sex olika behandlingar. Det är <em className="text-moss">ett sätt att se</em> på människan.
            </h2>
          </Reveal>
           <div className="mt-16">
             <div className="grid gap-0 md:grid-cols-12 md:gap-8">
              {(["kropp", "bro", "sinne"] as Group[]).map((g, i) => (
                <Reveal
                  key={g}
                  delay={i * 180}
                  className={cn(
                    "py-8 md:px-0 md:py-10",
                    groups[g].color,
                    g === "kropp" && "md:col-span-5",
                    g === "bro" && "md:col-span-3 md:mt-20",
                    g === "sinne" && "md:col-span-4 md:mt-8",
                  )}
                >
                  <div className={cn("mb-7 h-0.5 w-14 bg-current", groups[g].color)} />
                  <p className={cn("eyebrow", groups[g].color)}>{groups[g].lead}</p>
                  <h3 className="mt-3 text-4xl text-foreground">{groups[g].label}</h3>
                  <p className="mt-4 max-w-xs leading-relaxed text-foreground/80">{groups[g].text}</p>
                  <ul className="mt-6 space-y-1">
                    {treatments.filter((t) => t.group === g).map((t) => (
                      <li key={t.slug}>
                        <TreatmentLink slug={t.slug} className="font-serif text-lg italic text-foreground transition-colors duration-200 hover:text-primary">
                          {t.name}
                        </TreatmentLink>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEHANDLINGARNA */}
      <section id="behandlingar" className="scroll-mt-20 border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <Link to="/behandlingar/$slug" params={{ slug: "kakledsbehandling" }} className="group block">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={kakled.url} alt="Käkledsbehandling" className="breathe-img h-full w-full object-cover" />
                </div>
              </Link>
            </Reveal>
            <Reveal delay={200} className="flex flex-col justify-end md:col-span-5">
              <Eyebrow className="text-clay">Där många börjar</Eyebrow>
              <h2 className="mt-4 text-5xl md:text-6xl">Käkleds&shy;behandling</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                För dig som biter ihop på natten, gnisslar tänder eller vaknar med en huvudvärk som
                aldrig riktigt ger med sig. En konkret behandling av käke, hals och nacke.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <BookButton>Boka käkledsbehandling</BookButton>
                <Link to="/behandlingar/$slug" params={{ slug: "kakledsbehandling" }} className={secondaryLinkClass}>
                  Läs mer
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-24">
            <div className="flex items-baseline justify-between gap-6">
              <Eyebrow>Alla sex behandlingar</Eyebrow>
              <p className="hidden text-sm text-muted-foreground md:block">Kroppen · Bron · Sinnet</p>
            </div>
            <ul className="mt-8 grid gap-x-16 gap-y-2 md:grid-cols-2">
              {treatments.filter((t) => t.slug !== "kakledsbehandling").map((t, i) => (
                <Reveal as="li" key={t.slug} delay={i * 80}>
                  <TreatmentLink slug={t.slug} className="group block min-w-0 py-7">
                    <span className={cn("eyebrow text-[0.7rem]", groups[t.group].color)}>
                      {groups[t.group].label}
                    </span>
                    <span className="mt-2 flex items-center justify-between gap-5">
                      <span className="min-w-0 hyphens-auto font-serif text-3xl transition-transform duration-200 group-hover:translate-x-1 md:text-4xl" lang="sv">
                        {t.name}
                      </span>
                      <span className="text-xl text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="mt-3 block max-w-md leading-relaxed text-foreground/70">{t.short}</span>
                  </TreatmentLink>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. SÅ GÅR DET TILL */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
             <h2 className="text-4xl leading-tight md:text-5xl">Så går det till. <em>Inga konstigheter.</em></h2>
            <div className="mt-10 aspect-[4/3] overflow-hidden">
              <img src={rum.url} alt="Behandlingsrummet i Mölndal med Anna och en klient" className="breathe-img h-full w-full object-cover" />
            </div>
          </Reveal>
          <ol className="md:col-span-6 md:col-start-7 md:pt-16">
            {[
              ["Innan", "Du får ett kort formulär om dina symtom och vad du vill uppnå. Det gör att vi kan använda tiden väl."],
              ["Samtalet", "Vi börjar alltid med att prata. Hur mår du, vad har du provat, vad vill du förändra?"],
              ["Behandlingen", "Jag arbetar med det som kroppen behöver just nu. Du är påklädd i bekväma kläder och kan alltid säga stopp."],
              ["Med dig hem", "Du går därifrån med enkla egenvårdsövningar och en tydligare bild av vad som händer i din kropp."],
            ].map(([h, p], i) => (
               <Reveal as="li" key={h} delay={i * 150} className="grid grid-cols-[4rem_1fr] py-7">
                <span className="font-serif text-4xl italic text-clay">{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{h}</h3>
                  <p className="mt-2 leading-relaxed text-foreground/75">{p}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. ANNAS HISTORIA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1280px] md:grid-cols-12">
          <div className="relative min-h-[420px] md:col-span-5">
            <img src={healingHeader.url} alt="Anna med händerna vid en klients huvud" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          </div>
          <div className="px-6 py-20 md:col-span-7 md:px-16 md:py-32">
            <Reveal>
              <p className="eyebrow text-ink-foreground/60">Varför jag gör det här</p>
              <blockquote className="mt-8 font-serif text-3xl italic leading-[1.25] md:text-[2.6rem]">
                ”Jag har själv varit där. Utbränd, med ständig ryggvärk, eksem och en skada i bäckenet.
                När ingen visste vad de skulle göra slutade jag inte leta.”
              </blockquote>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-10 max-w-lg leading-relaxed text-ink-foreground/75">
                Det jag hittade på vägen är det jag arbetar med i dag. Min grundtanke är enkel: vi
                har en tendens att lämna över vår kraft till någon annan. Jag vill hjälpa dig att{" "}
                <em className="text-ink-foreground">ta tillbaka din egen kraft</em> – och förstå
                vad du behöver för att må bättre.
              </p>
              <Link to="/om-anna" className="mt-10 inline-block border-b border-ink-foreground/40 pb-1 text-sm hover:border-ink-foreground">
                Läs hela min historia →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. RÖSTER + PLATS */}
      {review ? <section aria-label="Kundrecension" className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
           {review ? <Reveal className="mx-auto max-w-4xl">
             <blockquote className="text-center font-serif text-3xl italic leading-[1.3] md:text-5xl">
              ”{review.quote}”
            </blockquote>
            <p className="mt-8 text-center text-sm text-primary-foreground/80">
              — {review.name}, {review.treatment.toLowerCase()}
            </p>
          </Reveal> : null}
           {review ? <p className="mx-auto mt-7 w-fit text-sm text-primary-foreground/80">
            {trustProof.rating} · {trustProof.reviews}
          </p> : null}

        </div>
      </section> : null}

      <section id="boka-nu" className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={boka.url} alt="Anna och en klient vid bokningen" className="breathe-img h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={200} className="flex flex-col justify-center md:col-span-5 md:col-start-8">
              <Eyebrow>Mölndal · nära Göteborg</Eyebrow>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">Ta första steget. <em>Resten gör vi tillsammans.</em></h2>
              <p className="mt-6 leading-relaxed text-foreground/75">
                Boka direkt via Bokadirekt – eller hör av dig om du är osäker på vad som passar dig.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <BookButton />
                <Link to="/kontakt" className={secondaryLinkClass}>Hitta hit</Link>
              </div>
              <CareNotice className="mt-12" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
