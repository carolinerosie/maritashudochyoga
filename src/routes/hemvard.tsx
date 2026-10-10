import { createFileRoute } from "@tanstack/react-router";
import { MessageSquareText, Package, ShoppingBag } from "lucide-react";
import butik from "@/assets/malarns-gard-butik.jpg";
import { absoluteUrl, contact, WEBSHOP_URL } from "@/content/site";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import { TreatmentLink } from "@/components/site/TreatmentLink";

const TITLE = "Hemvård – Maria Åkerberg, Esse och Neostrata | Maritas, Frillesås";
const DESC =
  "Beställ din hudvård med ett sms – Marita skickar hem produkterna utan kostnad. Maria Åkerberg, Esse och Neostrata/Exuviance.";

export const Route = createFileRoute("/hemvard")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: absoluteUrl("/hemvard") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/hemvard") }],
  }),
  component: HomeCare,
});

const link = "border-b border-foreground/40 font-semibold hover:border-foreground";

function HomeCare() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-6">
          <Eyebrow>Hemvård</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            Din hudvård – <em className="text-clay">hem i brevlådan.</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Behandlingen är en del. Det du gör hemma varje dag är den andra. Marita hjälper dig att
            välja hudvård som passar just din hud.
          </p>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MessageSquareText
                aria-hidden
                className="mt-1 size-6 shrink-0 text-clay"
                strokeWidth={1.5}
              />
              <p className="leading-relaxed">
                <strong className="font-semibold">Beställ med ett sms.</strong> Skicka ett sms till{" "}
                <a href={contact.smsHref} data-event="homecare_order_click" className={link}>
                  {contact.phone}
                </a>{" "}
                med vad du vill ha.
              </p>
            </li>
            <li className="flex gap-4">
              <Package aria-hidden className="mt-1 size-6 shrink-0 text-clay" strokeWidth={1.5} />
              <p className="leading-relaxed">
                <strong className="font-semibold">Fri hemleverans.</strong> Produkterna skickas till
                din brevlåda utan kostnad.
              </p>
            </li>
            <li className="flex gap-4">
              <ShoppingBag
                aria-hidden
                className="mt-1 size-6 shrink-0 text-clay"
                strokeWidth={1.5}
              />
              <p className="leading-relaxed">
                <strong className="font-semibold">Neostrata/Exuviance online.</strong>{" "}
                <a
                  href={WEBSHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="homecare_order_click"
                  className={link}
                >
                  Handla i webbshoppen ↗
                </a>
              </p>
            </li>
          </ul>
          <p className="mt-10 text-sm text-muted-foreground">
            Varumärken i ateljén: Maria Åkerberg, Esse och Neostrata/Exuviance.
          </p>
          <p className="mt-6 leading-relaxed">
            Vet du inte vad din hud behöver?{" "}
            <TreatmentLink slug="hudanalys" className={link}>
              Börja med en hudanalys – 15 min, 200 kr
            </TreatmentLink>
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5 md:col-start-8">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={butik}
              alt="Butiksskylten på Målarns Gård med blommande syrener"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
