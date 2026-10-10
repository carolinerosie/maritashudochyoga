import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { BOOKING_URL } from "@/content/site";
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

/** Signaturlinjen: börjar spänd och hoprullad, blir en lugn våg. */
export function ReleaseLine({ className }: { className?: string }) {
  return (
    <Reveal className={cn("pointer-events-none", className)}>
      <svg viewBox="0 0 600 60" fill="none" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
        <path
          className="wave-draw"
          d="M2 30c3-17 6 17 9 0s6-17 9 0 6 17 9 0 7-17 10 0c5-24 12 24 20 0s13-22 22 0c11-26 28 26 44 0s30-18 49 0c24 19 49-18 77 0s58 13 91 0 69 9 108 0 81-5 148 0"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Reveal>
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
        variant === "line" && "border border-foreground/40 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        variant === "light" && "bg-ink-foreground text-ink hover:bg-background hover:text-ink",
        className,
      )}
    >
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        {children}
        <span aria-hidden>→</span>
      </a>
    </Button>
  );
}

/** Sekundär knapp: det kostnadsfria 30-minuterssamtalet (bokas på Bokadirekt). För den som inte vet var hen ska börja. */
export function ConsultButton({ className }: { className?: string }) {
  return (
    <BookButton variant="line" className={cn("max-w-full whitespace-normal text-left", className)}>
      Boka kostnadsfritt samtal · 30 min
    </BookButton>
  );
}

export const secondaryLinkClass =
  "inline-flex min-h-11 items-center border-b border-current/35 pb-0.5 text-sm font-semibold transition-colors duration-200 hover:border-current";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-muted-foreground", className)}>{children}</p>;
}

export function CareNotice({ className }: { className?: string }) {
  return (
    <aside className={cn("bg-moss/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground", className)}>
      <p>
        <span className="eyebrow mb-1 block text-moss">Bra att veta</span>
        Mina behandlingar är friskvård och ett komplement till vården – inte en ersättning. Har du
        nya, kraftiga eller oklara besvär, kontakta alltid vården först.
      </p>
    </aside>
  );
}

export function Placeholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("border border-dashed border-foreground/25 p-5 text-sm italic text-muted-foreground", className)}>
      {children}
    </div>
  );
}
