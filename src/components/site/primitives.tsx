import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { Phone } from "lucide-react";
import { BOOKING_URL, contact, isExternalBooking } from "@/content/site";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

const pill =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200";

/** Primär knapp: Boka tid. Länken styrs av BOOKING_URL i site.ts. */
export function BookButton({
  children = "Boka tid",
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "light" | "outline";
  className?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-event="booking_click"
      className={cn(
        pill,
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-ink",
        variant === "light" && "bg-white text-ink hover:bg-syren",
        variant === "outline" &&
          "border border-primary/40 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Sekundär knapp: ring Marita för ett konsultationssamtal. */
export function ConsultButton({
  className,
  children = "Ring för konsultationssamtal",
  variant = "outline",
}: {
  className?: string;
  children?: ReactNode;
  variant?: "outline" | "light";
}) {
  return (
    <a
      href={contact.phoneHref}
      data-event="consultation_call_click"
      className={cn(
        pill,
        variant === "outline" &&
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ink-foreground",
        variant === "light" && "border border-white/50 text-white hover:bg-white hover:text-ink",
        className,
      )}
    >
      <Phone aria-hidden className="size-4" strokeWidth={1.75} />
      {children}
    </a>
  );
}

export const textLink =
  "inline-flex min-h-11 items-center gap-1.5 font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

/** Bakåtkompatibelt namn. */
export const Eyebrow = Kicker;

export function CareNotice({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "rounded-2xl bg-syren px-5 py-4 text-sm leading-relaxed text-ink/80",
        className,
      )}
    >
      <p>
        <strong className="mb-1 block font-medium text-syren-ink">Bra att veta</strong>
        Behandlingarna är hudvård och friskvård – inte medicinsk behandling. Har du en hudsjukdom
        eller nya, oklara besvär, kontakta vården först. Berätta gärna när du bokar om du är gravid,
        ammar eller tar medicin.
      </p>
    </aside>
  );
}

/** Rubrikblock för sektioner: kicker + rubrik + ingress. */
export function SectionHead({
  kicker,
  title,
  lead,
  className,
  center = false,
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {kicker ? <Kicker className={cn(center && "justify-center")}>{kicker}</Kicker> : null}
      <h2 className="mt-4 text-[2.1rem] leading-tight md:text-5xl">{title}</h2>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-ink/75">{lead}</p> : null}
    </Reveal>
  );
}
