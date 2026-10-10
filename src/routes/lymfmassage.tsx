import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, getTreatment, localBusinessJsonLd, servicePages } from "@/content/site";
import { TreatmentArticle } from "@/components/site/TreatmentArticle";

const c = servicePages.lymfmassage;

export const Route = createFileRoute("/lymfmassage")({
  head: () => ({
    meta: [
      { title: c.seoTitle },
      { name: "description", content: c.metaDescription },
      { property: "og:title", content: c.seoTitle },
      { property: "og:description", content: c.metaDescription },
      { property: "og:url", content: absoluteUrl("/lymfmassage") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/lymfmassage") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Lymfmassage",
          description: c.metaDescription,
          areaServed: ["Göteborg", "Mölndal"],
          provider: { "@id": localBusinessJsonLd["@id"], "@type": localBusinessJsonLd["@type"], name: localBusinessJsonLd.name },
          url: absoluteUrl("/lymfmassage"),
        }),
      },
    ],
  }),
  component: LymfmassagePage,
});

function LymfmassagePage() {
  const t = getTreatment("lymfmassage");
  if (!t) return null;
  return <TreatmentArticle treatment={t} extraSections={c.sections} />;
}
