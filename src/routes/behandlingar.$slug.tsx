import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { absoluteUrl, getTreatment, localBusinessJsonLd } from "@/content/site";
import { TreatmentArticle } from "@/components/site/TreatmentArticle";

export const Route = createFileRoute("/behandlingar/$slug")({
  loader: ({ params }) => {
    if (params.slug === "lymfmassage") throw redirect({ to: "/lymfmassage", statusCode: 301 });
    const t = getTreatment(params.slug);
    if (!t) throw notFound();
    return { slug: t.slug };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? getTreatment(loaderData.slug) : undefined;
    if (!t) return { meta: [{ title: "Behandlingen finns inte" }, { name: "robots", content: "noindex" }] };
    const title = t.seoTitle ?? `${t.name} i Mölndal nära Göteborg | Anna Flatöe`;
    const pageUrl = absoluteUrl(`/behandlingar/${t.slug}`);
    return {
      meta: [
        { title },
        { name: "description", content: t.seoDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: t.seoDescription },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: t.name,
            description: t.seoDescription,
            areaServed: ["Göteborg", "Mölndal"],
            provider: { "@id": localBusinessJsonLd["@id"], "@type": localBusinessJsonLd["@type"], name: localBusinessJsonLd.name },
            url: pageUrl,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 pb-24 pt-40 text-center">
      <h1 className="text-4xl">Behandlingen finns inte</h1>
      <Link to="/" hash="behandlingar" className="mt-6 inline-block underline">Se alla behandlingar</Link>
    </div>
  ),
  component: TreatmentPage,
});

function TreatmentPage() {
  const { slug } = Route.useLoaderData();
  const t = getTreatment(slug);
  if (!t) return null;
  return <TreatmentArticle treatment={t} />;
}
