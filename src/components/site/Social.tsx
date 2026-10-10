import { useEffect, useState, type SVGProps } from "react";
import { INSTAGRAM_FEED_URL, social } from "@/content/site";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M14 3c.5 2.6 2.3 4.3 5 4.6v3.1a8.2 8.2 0 0 1-5-1.6V15a6 6 0 1 1-6-6v3.2A2.8 2.8 0 1 0 11 15V3z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M17 3h-3a4.5 4.5 0 0 0-4.5 4.5V10H7v3.5h2.5V21H13v-7.5h3l.6-3.5H13V7.8c0-.5.4-.8.8-.8H17z" />
    </svg>
  );
}

/** Ikonrad med de sociala kanaler som har en adress i src/content/site.ts. */
export function SocialLinks({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const links = [
    { href: social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: social.tiktok, label: "TikTok", Icon: TikTokIcon },
    { href: social.facebook, label: "Facebook", Icon: FacebookIcon },
  ].filter((l) => l.href);
  const box = size === "sm" ? "size-10" : "size-11";
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Marita på ${label}`}
            className={cn(
              "grid place-items-center rounded-full border border-current/25 transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink",
              box,
            )}
          >
            <Icon className="size-[1.1rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

type Post = { id: string; permalink: string; image: string; alt: string };

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  altText?: string;
  prunedCaption?: string;
  sizes?: { medium?: { mediaUrl?: string } };
};

/**
 * Maritas fyra senaste Instagram-inlägg, inbäddade i sidfoten.
 * Hämtas från Behold-flödet i INSTAGRAM_FEED_URL (src/content/site.ts) och uppdateras automatiskt.
 * Visas bara när riktiga inlägg finns – inga reservbilder.
 */
export function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!INSTAGRAM_FEED_URL) return;
    let cancelled = false;
    fetch(INSTAGRAM_FEED_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { posts?: BeholdPost[] } | BeholdPost[]) => {
        const list = Array.isArray(data) ? data : (data.posts ?? []);
        const mapped = list
          .map((p) => ({
            id: p.id,
            permalink: p.permalink,
            image:
              p.sizes?.medium?.mediaUrl ??
              (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl) ??
              "",
            alt: p.altText || p.prunedCaption?.slice(0, 120) || "Inlägg från Maritas Instagram",
          }))
          .filter((p) => p.image)
          .slice(0, 4);
        if (!cancelled) setPosts(mapped);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!posts.length) return null;

  return (
    <div className="md:col-span-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-10">
        <div>
          <p className="text-sm font-medium text-champagne">Senaste på Instagram</p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-serif text-2xl hover:text-primary"
          >
            {social.instagramHandle}
          </a>
        </div>
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 border-b border-foreground/30 text-sm font-semibold hover:border-foreground"
        >
          Följ på Instagram <span aria-hidden>↗</span>
        </a>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {posts.map((p) => (
          <li key={p.id}>
            <a
              href={p.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-sand"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 text-ink-foreground opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
                <InstagramIcon className="size-7" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
