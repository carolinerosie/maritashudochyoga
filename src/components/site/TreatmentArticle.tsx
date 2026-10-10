import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Clock, MapPin, Plus } from "lucide-react";
import ateljen from "@/assets/ateljen-behandlingsrum.jpg";
import {
  byGroup,
  contact,
  durationOf,
  fromPrice,
  groups,
  testimonials,
  type Treatment,
} from "@/content/site";
import {
  BookButton,
  CareNotice,
  ConsultButton,
  Kicker,
  Reveal,
} from "@/components/site/primitives";
import { TreatmentCard } from "@/components/site/Cards";

type ExtraSection = { heading: string; paragraphs: string[] };

/** Gemensam mall för alla behandlingssidor. Pris, tid och bokning syns direkt överst. */
export function TreatmentArticle({
  treatment: t,
  extraSections = [],
}: {
  treatment: Treatment;
  extraSections?: ExtraSection[];
}) {
  const g = groups[t.group];
  const review = testimonials.find((r) => r.treatment === t.name);
  const related = byGroup(t.group)
    .filter((o) => o.slug !== t.slug)
    .slice(0, 3);
  const duration = durationOf(t);

  return (
    <article>
      {/* HERO */}
      <section className="pt-32 md:pt-44">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <nav
            aria-label="Brödsmulor"
            className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
          >
            <Link to="/behandlingar" className="hover:text-primary">
              Behandlingar
            </Link>
            <ChevronRight aria-hidden className="size-4" />
            <Link to="/behandlingar" hash={g.slug} className="hover:text-primary">
              {g.label}
            </Link>
            <ChevronRight aria-hidden className="size-4" />
            <span className="text-ink">{t.name}</span>
          </nav>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <Kicker>{g.label}</Kicker>
              <h1 className="mt-4 text-[2.6rem] leading-[1.08] md:text-6xl">
                {t.heading ?? t.name}
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink/75">{t.short}</p>
              <div className="mt-6 flex flex-wrap gap-2.5 text-sm">
                {duration ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-panel px-4 py-2">
                    <Clock aria-hidden className="size-4" strokeWidth={1.75} />
                    {duration}
                  </span>
                ) : null}
                <span className="rounded-full bg-syren px-4 py-2 font-medium text-syren-ink">
                  {fromPrice(t)}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookButton>Boka {t.name.toLowerCase()}</BookButton>
                <ConsultButton />
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-5 md:col-start-8">
              <div className="arch aspect-[4/5]">
                <img src={t.image} alt={t.imageAlt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PASSAR DIG SOM + PRIS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="rounded-3xl bg-white p-7 md:col-span-7 md:p-10">
            <h2 className="text-3xl">Passar dig som…</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.forWho.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-syren text-syren-ink"
                  >
                    <Check className="size-3.5" strokeWidth={2.25} />
                  </span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-3xl">Enkelt förklarat</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{t.what}</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div id="pris" className="rounded-3xl bg-primary p-7 text-primary-foreground md:p-9">
              <h2 className="text-3xl">Pris & tid</h2>
              <dl className="mt-5 divide-y divide-white/20">
                {t.prices.map((p) => (
                  <div
                    key={p.label + p.price}
                    className="flex items-start justify-between gap-6 py-3.5"
                  >
                    <dt className="leading-snug">
                      {p.label}
                      {p.duration ? (
                        <span className="mt-0.5 block text-sm text-white/70">{p.duration}</span>
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
              {t.priceNote ? <p className="mt-3 text-sm text-white/80">{t.priceNote}</p> : null}
              <p className="mt-2 text-sm text-white/80">{contact.payment}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookButton variant="light" />
                <ConsultButton variant="light">Ring och fråga</ConsultButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SÅ GÅR DET TILL */}
      <section className="panel-stripes py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <Kicker>Behandlingen</Kicker>
            <h2 className="mt-4 text-4xl leading-tight">Så går det till</h2>
            <p className="mt-5 leading-relaxed text-ink/75">{t.recommendation}</p>
          </Reveal>
          <ol className="grid gap-4 md:col-span-8 sm:grid-cols-2">
            {t.during.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 100} className="rounded-2xl bg-white p-6">
                <span className="grid size-9 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                  {i + 1}
                </span>
                <p className="mt-4 leading-relaxed">{d}</p>
              </Reveal>
            ))}
            <Reveal as="li" className="rounded-2xl bg-syren p-6 sm:col-span-2">
              <p className="font-serif text-xl text-syren-ink">Med dig hem</p>
              <ul className="mt-3 space-y-2">
                {t.takeaway.map((x) => (
                  <li key={x} className="flex gap-3 leading-relaxed">
                    <Check
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-syren-ink"
                      strokeWidth={2}
                    />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* LOKAL SEO-TEXT MED BILD FRÅN ATELJÉN */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={ateljen}
                  alt="Behandlingsrummet i Maritas ateljé på Målarns Gård i Frillesås"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-tegel" strokeWidth={1.75} aria-hidden />
                {contact.venue}, {contact.street}, {contact.locality}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <h2 className="text-3xl leading-tight md:text-4xl">
              {t.localHeading ?? `${t.name} i Frillesås – nära Åsa och Kungsbacka`}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">{t.seoIntro}</p>
            {extraSections.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-lg leading-relaxed text-ink/80">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FRÅGOR */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <Kicker>Vanliga frågor</Kicker>
            <h2 className="mt-4 text-4xl leading-tight">Bra att veta om {t.name.toLowerCase()}</h2>
          </Reveal>
          <div className="space-y-3 md:col-span-8">
            {t.questions.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-white px-6 py-1 open:pb-5"
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
      </section>

      {review ? (
        <section className="pb-16">
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <blockquote className="font-serif text-3xl leading-snug">”{review.quote}”</blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— {review.name}</p>
          </Reveal>
        </section>
      ) : null}

      {/* BOKA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="grid gap-8 rounded-[2rem] bg-syren p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-7">
              <h2 className="text-4xl leading-tight">Vill du boka – eller prata först?</h2>
              <p className="mt-4 text-lg text-ink/75">
                Ring eller sms:a {contact.phone}, eller ring {contact.landline}.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookButton>Boka {t.name.toLowerCase()}</BookButton>
                <ConsultButton />
              </div>
            </div>
            <CareNotice className="self-end bg-white md:col-span-5" />
          </div>
        </div>
      </section>

      {/* RELATERADE */}
      {related.length ? (
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl md:text-4xl">Fler {g.label.toLowerCase()}</h2>
              <Link
                to="/behandlingar"
                className="text-sm font-medium text-primary underline underline-offset-4"
              >
                Alla behandlingar →
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((o) => (
                <li key={o.slug}>
                  <TreatmentCard t={o} showGroup={false} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
