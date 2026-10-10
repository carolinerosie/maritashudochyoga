import { Link } from "@tanstack/react-router";
import { Check, CircleCheck, MapPin } from "lucide-react";
import rum from "@/assets/behandlingsrum-kontrast.jpg";
import { contact, groups, testimonials, treatments, type Treatment } from "@/content/site";
import { BookButton, CareNotice, ConsultButton, Eyebrow, Reveal } from "@/components/site/primitives";
import { TreatmentLink } from "@/components/site/TreatmentLink";
import { cn } from "@/lib/utils";

type ExtraSection = { heading: string; paragraphs: string[] };

/** Gemensam mall för alla behandlingssidor (även /lymfmassage), så att strukturen alltid är densamma. */
export function TreatmentArticle({ treatment: t, extraSections = [] }: { treatment: Treatment; extraSections?: ExtraSection[] }) {
  const g = groups[t.group];
  const review = testimonials.find((r) => r.treatment === t.name);
  const others = treatments.filter((o) => o.slug !== t.slug);

  return (
    <article>
      <section className="pt-28 md:pt-36">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <div className="flex flex-col justify-end md:col-span-5 md:pb-12">
            <Reveal>
              <Link to="/" hash="behandlingar" className="eyebrow text-muted-foreground hover:text-foreground">← Behandlingar</Link>
              <p className={cn("eyebrow mt-10", g.color)}>{g.label} · {g.lead}</p>
              <h1 className="mt-4 hyphens-auto break-words text-5xl leading-[1.02] md:text-6xl" lang="sv">{t.heading ?? t.name.replace("Käkleds", "Käkleds­")}</h1>
              <p className="mt-6 text-xl leading-relaxed text-foreground/80">{t.short}</p>
              <div className="mt-10">
                <BookButton>Boka {t.name.toLowerCase()}</BookButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <img src={t.image} alt={t.imageAlt} className="breathe-img h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <Eyebrow>För dig som…</Eyebrow>
            <ul className="mt-6">
              {t.forWho.map((f) => (
                <li key={f} className="flex items-start gap-4 border-t border-border py-4">
                  <span className={cn("mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-current/40", g.color)} aria-hidden>
                    <Check className="size-3.5" strokeWidth={2} />
                  </span>
                  <span className="font-serif text-xl">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <Eyebrow>Enkelt förklarat</Eyebrow>
            <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">{t.what}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={rum} alt={`Behandlingsrummet på ${contact.venue} i Mölndal`} className="breathe-img h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-clay" strokeWidth={1.5} aria-hidden />
                {contact.venue}, {contact.street}, {contact.locality}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 md:self-center">
            <h2 className="text-3xl leading-tight md:text-4xl">{t.localHeading ?? `${t.name} i Mölndal, nära Göteborg`}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t.seoIntro}</p>
            {extraSections.map((section) => (
              <div key={section.heading} className="mt-12 border-t border-border pt-10">
                <h2 className="text-3xl leading-tight md:text-4xl">{section.heading}</h2>
                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-lg leading-relaxed text-foreground/80">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <Eyebrow>Under behandlingen</Eyebrow>
            <ol className="mt-6">
              {t.during.map((d, i) => (
                <Reveal as="li" key={d} delay={i * 120} className="grid grid-cols-[3rem_1fr] border-t border-foreground/15 py-5">
                  <span className={cn("font-serif text-2xl italic", g.color)}>{i + 1}</span>
                  <span className="leading-relaxed">{d}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <Eyebrow>Det här får du med dig</Eyebrow>
              <ul className="mt-6 space-y-4">
                {t.takeaway.map((x) => (
                  <li key={x} className="flex gap-4 leading-relaxed">
                    <CircleCheck className={cn("mt-0.5 size-5 shrink-0", g.color)} strokeWidth={1.5} aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-12 border-t border-foreground/15 pt-6">
                <Eyebrow>Rekommendation</Eyebrow>
                <p className="mt-3 font-serif text-2xl">{t.recommendation}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">Bra att veta om {t.name.toLowerCase()}</h2>
          </Reveal>
          <dl className="md:col-span-7 md:col-start-6">
            {t.questions.map((item, index) => (
              <Reveal key={item.question} as="div" delay={index * 90} className="border-t border-foreground/15 py-6">
                <dt className="font-serif text-2xl">{item.question}</dt>
                <dd className="mt-3 max-w-2xl leading-relaxed text-foreground/75">{item.answer}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-16 pt-4 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          {review ? (
            <Reveal className="mx-auto max-w-3xl text-center">
              <blockquote className="font-serif text-3xl leading-snug md:text-4xl">”{review.quote}”</blockquote>
              <p className="mt-6 text-sm text-muted-foreground">— {review.name}</p>
            </Reveal>
          ) : null}
          <div className={cn("grid gap-12 border-t border-border pt-16 md:grid-cols-12", review ? "mt-20" : "mt-0")}>
            <div className="md:col-span-6">
              <h2 className="text-4xl md:text-5xl">Redo att släppa taget?</h2>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <BookButton>Boka {t.name.toLowerCase()}</BookButton>
                <ConsultButton />
              </div>
            </div>
            <CareNotice className="self-end md:col-span-5 md:col-start-8" />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Eyebrow>Andra behandlingar</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <TreatmentLink slug={o.slug} className="font-serif text-2xl italic text-foreground/70 transition-colors duration-200 hover:text-foreground">
                  {o.name}
                </TreatmentLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
