import { Link } from "@tanstack/react-router";
import { groups, treatments, type ServicePageContent, type Treatment } from "@/content/site";
import { BookButton, CareNotice, Eyebrow, Reveal } from "@/components/site/primitives";
import { TreatmentLink } from "@/components/site/TreatmentLink";
import { cn } from "@/lib/utils";

/** Redaktionell layout för en fristående, sökoptimerad tjänstesida. */
export function ServicePage({ treatment: t, content: c }: { treatment: Treatment; content: ServicePageContent }) {
  const g = groups[t.group];
  const others = treatments.filter((o) => o.slug !== t.slug);

  return (
    <article>
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-ink text-ink-foreground md:min-h-[760px] md:items-center">
        <img src={t.image} alt={t.imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-ink/65 md:bg-ink/58" />
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 pt-32 md:px-10 md:pb-0 md:pt-24">
          <Reveal className="max-w-[38rem]">
            <Link to="/" hash="behandlingar" className="eyebrow text-ink-foreground/75 hover:text-ink-foreground">← Behandlingar</Link>
            <p className="eyebrow mt-8 text-ink-foreground/75">{g.label} · {g.lead}</p>
            <h1 className="mt-4 hyphens-auto text-[3.25rem] leading-[0.98] md:text-[4.65rem]" lang="sv">{c.h1}</h1>
            <p className="mt-6 max-w-[34rem] font-serif text-2xl leading-snug md:text-[1.7rem]">{c.lead}</p>
            <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-ink-foreground/85">{c.intro}</p>
            <div className="mt-9"><BookButton variant="light">{c.cta}</BookButton></div>
          </Reveal>
        </div>
      </section>

      {c.sections.map((section) => (
        <section key={section.heading} className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
            <Reveal className="md:col-span-4">
              <Eyebrow>Lymfmassage</Eyebrow>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">{section.heading}</h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6 md:col-span-7 md:col-start-6">
              {section.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={cn("max-w-[40rem] leading-relaxed", index === 0 ? "font-serif text-2xl leading-snug" : "text-lg text-foreground/80")}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <Eyebrow>Under behandlingen</Eyebrow>
            <ol className="mt-6">
              {t.during.map((item, index) => (
                <Reveal as="li" key={item} delay={index * 100} className="grid grid-cols-[3rem_minmax(0,1fr)] border-t border-foreground/15 py-5">
                  <span className={cn("font-serif text-2xl italic", g.color)}>{index + 1}</span>
                  <span className="leading-relaxed">{item}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8">
            <Eyebrow>Det här får du med dig</Eyebrow>
            <ul className="mt-6 space-y-4">
              {t.takeaway.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed">
                  <span className={cn("mt-3 h-px w-6 shrink-0 bg-current", g.color)} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 border-t border-foreground/15 pt-6">
              <Eyebrow>Rekommendation</Eyebrow>
              <p className="mt-3 font-serif text-2xl">{t.recommendation}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">Bra att veta om lymfmassage</h2>
          </Reveal>
          <dl className="md:col-span-7 md:col-start-6">
            {t.questions.map((item, index) => (
              <Reveal key={item.question} as="div" delay={index * 80} className="border-t border-foreground/15 py-6">
                <dt className="font-serif text-2xl">{item.question}</dt>
                <dd className="mt-3 max-w-2xl leading-relaxed text-foreground/75">{item.answer}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="boka-nu" className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 border-t border-border px-6 pt-16 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <h2 className="text-4xl leading-tight md:text-5xl">Vill du boka lymfmassage?</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-foreground/75">Se lediga tider och boka direkt via Bokadirekt.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <BookButton>{c.cta}</BookButton>
              <Link to="/kontakt" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground">
                Hör av dig om du är osäker <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          <CareNotice className="self-end md:col-span-5 md:col-start-8" />
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Eyebrow>Andra behandlingar</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            {others.map((other) => (
              <li key={other.slug}>
                <TreatmentLink slug={other.slug} className="font-serif text-2xl italic text-foreground/70 transition-colors duration-200 hover:text-foreground">{other.name}</TreatmentLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}