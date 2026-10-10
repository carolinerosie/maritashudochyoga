import { createFileRoute } from "@tanstack/react-router";
import anna from "@/assets/anna-portratt.webp";
import postural from "@/assets/postural.jpg";
import { absoluteUrl } from "@/content/site";
import { BookButton, CareNotice, Eyebrow, Reveal } from "@/components/site/primitives";

const TITLE = "Om Anna Flatöe – från egen smärta till Skapa din hälsa";
const DESC = "Anna har själv gått igenom utbrändhet, ryggvärk och skada. I dag hjälper hon andra att ta tillbaka sin egen kraft.";

export const Route = createFileRoute("/om-anna")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/om-anna") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/om-anna") }],
  }),
  component: About,
});

function About() {
  return (
    <>
       <section className="pt-28 md:pt-36">
         <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden md:ml-auto md:aspect-[16/8] md:w-[82%]">
              <img src={anna} alt="Porträtt av Anna Flatöe" className="h-full w-full object-cover" />
            </div>
            <div className="mt-8 md:absolute md:bottom-0 md:left-0 md:w-[47%] md:bg-background md:pb-8 md:pr-10 md:pt-10">
              <Eyebrow>Om Anna</Eyebrow>
               <h1 className="mt-5 text-5xl leading-[1.01] md:text-6xl">
                Jag letade tills jag hittade det som <em className="text-clay">fungerade.</em>
              </h1>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-10 md:py-28">
         <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:col-span-6 md:col-start-2">
            <Reveal>
              <p className="font-serif text-3xl leading-snug text-foreground">
                Jag har själv gått igenom utbrändhet, en skada i bäckenet, svåra eksem, konstant ryggvärk
                och traumatiska upplevelser.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Länge fick jag höra att ingen riktigt visste vad man skulle göra. Jag nöjde mig inte med
                det. Jag sökte vidare – och hittade till slut det som hjälpte mig. Flera av de metoderna
                är de jag använder i mina behandlingar i dag.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Därför vet jag hur det känns att inte bli tagen på allvar. Och därför ser jag alltid hela
                dig – kroppen, stressen och det du bär på.
              </p>
            </Reveal>
            <Reveal>
              <blockquote className="border-l-2 border-clay pl-6 font-serif text-2xl italic text-foreground">
                Vi har en tendens att lämna över vår kraft till någon annan. Det är dags att ta tillbaka
                sin egen kraft – och förmågan till självläkning.
              </blockquote>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-4 md:col-start-9">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={postural} alt="Anna guidar en klient i en rörelse" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

       <section className="border-t border-border py-16 md:py-28">
         <div className="mx-auto max-w-[1280px] px-6 md:px-10">
           <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
             <h2 className="max-w-xl text-4xl md:text-5xl">Vill du att vi börjar tillsammans?</h2>
             <BookButton />
           </div>
           <CareNotice className="mt-10 max-w-xl md:mt-14" />
         </div>
      </section>
    </>
  );
}
