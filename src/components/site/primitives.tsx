import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { BOOKING_URL, contact, isExternalBooking } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

export function BookButton({
  children = "Boka tid",
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "line" | "light";
  className?: string;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "h-auto min-h-12 rounded-sm px-7 py-3.5 text-sm font-semibold shadow-none transition-colors duration-200",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-foreground",
        variant === "line" &&
          "border border-foreground/40 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        variant === "light" && "bg-ink-foreground text-ink hover:bg-background hover:text-ink",
        className,
      )}
    >
      <a
        href={BOOKING_URL}
        {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-event="booking_click"
      >
        {children}
        <span aria-hidden>→</span>
      </a>
    </Button>
  );
}

/** Sekundär knapp: ring Marita för ett konsultationssamtal. */
export function ConsultButton({
  className,
  children = "Ring för konsultationssamtal",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "h-auto min-h-12 max-w-full whitespace-normal rounded-sm border border-foreground/40 px-7 py-3.5 text-left text-sm font-semibold text-foreground shadow-none transition-colors duration-200 hover:border-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <a href={contact.phoneHref} data-event="consultation_call_click">
        {children}
        <span aria-hidden className="hidden font-normal opacity-75 sm:inline">
          · {contact.phone}
        </span>
      </a>
    </Button>
  );
}

export const secondaryLinkClass =
  "inline-flex min-h-11 items-center border-b border-current/35 pb-0.5 text-sm font-semibold transition-colors duration-200 hover:border-current";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-muted-foreground", className)}>{children}</p>;
}

export function CareNotice({ className }: { className?: string }) {
  return (
    <aside
      className={cn("bg-moss/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground", className)}
    >
      <p>
        <span className="eyebrow mb-1 block text-moss">Bra att veta</span>
        Behandlingarna är hudvård och friskvård – inte medicinsk behandling. Har du en hudsjukdom
        eller nya, oklara besvär, kontakta vården först. Berätta gärna när du bokar om du är gravid,
        ammar eller tar medicin.
      </p>
    </aside>
  );
}

/** Signaturlinjen: havshorisonten med solen. */
export function Horizon({ className }: { className?: string }) {
  return <div aria-hidden className={cn("horizon", className)} />;
}

export function Placeholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "border border-dashed border-foreground/25 p-5 text-sm italic text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}
