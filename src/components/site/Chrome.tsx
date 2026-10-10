import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BOOKING_URL, treatments } from "@/content/site";
import { BookButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Logo() {
  return (
    <Link to="/" aria-label="Anna Flatöe – Skapa din hälsa, startsida" className="grid w-fit grid-cols-[2.25rem_auto] items-center gap-2.5">
      <img src="/favicon.png" alt="" className="h-9 w-9 object-contain" />
      <span className="min-w-0">
        <span className="block font-serif text-[1.2rem] leading-none">Anna Flatöe</span>
        <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-clay">Skapa din hälsa</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const treatmentMenu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!treatmentsOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !treatmentMenu.current?.contains(event.target)) setTreatmentsOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [treatmentsOpen]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const nav = "text-sm text-foreground/75 transition-colors duration-200 hover:text-foreground";
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 transition-all duration-300 backdrop-blur-sm",
        scrolled ? "py-2.5" : "py-3.5",
      )}
    >
       <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <div
            ref={treatmentMenu}
            className="relative"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setTreatmentsOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setTreatmentsOpen(false);
                treatmentMenu.current?.querySelector("button")?.focus();
              }
              if (event.key === "ArrowDown" && event.target instanceof HTMLButtonElement) {
                event.preventDefault();
                setTreatmentsOpen(true);
                requestAnimationFrame(() => treatmentMenu.current?.querySelector("a")?.focus());
              }
            }}
          >
            <Button variant="ghost" className={cn(nav, "h-11 gap-2 rounded-sm px-0 font-normal hover:bg-transparent")} aria-expanded={treatmentsOpen} aria-controls="desktop-treatment-navigation" onClick={() => setTreatmentsOpen((value) => !value)}>
              Behandlingar <span aria-hidden className={cn("text-xs transition-transform duration-200", treatmentsOpen && "rotate-180")}>⌄</span>
            </Button>
            {treatmentsOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                  <ul id="desktop-treatment-navigation" className="rounded-sm border border-border bg-popover p-2 text-popover-foreground shadow-lg" onClick={() => setTreatmentsOpen(false)}>
                    {treatments.map((t) => (
                      <li key={t.slug}>
                          <TreatmentLink slug={t.slug} className="block px-4 py-3 text-sm text-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary focus-visible:bg-primary/5">{t.name}</TreatmentLink>
                      </li>
                    ))}
                  </ul>
              </div>
            )}
          </div>
          <Link to="/om-anna" className={nav} activeProps={{ className: "text-foreground" }}>Om Anna</Link>
          <Link to="/kontakt" className={nav} activeProps={{ className: "text-foreground" }}>Hitta hit</Link>
          <BookButton className="px-5 py-3">Boka tid</BookButton>
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-11 rounded-sm px-2 text-xs font-semibold uppercase tracking-[0.08em] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Stäng" : "Meny"}
        </Button>
      </div>
      {open && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-6 shadow-lg md:hidden">
          <ul className="divide-y divide-border font-serif text-2xl" onClick={() => setOpen(false)}>
            <li><Link className="block py-4" to="/">Start</Link></li>
            <li><Link className="block py-4" to="/" hash="var-sitter-det">Hitta rätt behandling</Link></li>
            <li>
              <Link className="block py-4" to="/" hash="behandlingar">Behandlingar</Link>
              <ul className="pb-4 font-sans text-base">
                {treatments.map((t) => <li key={t.slug}><TreatmentLink slug={t.slug} className="block py-2.5 text-foreground/75 hover:text-primary">{t.name}</TreatmentLink></li>)}
              </ul>
            </li>
            <li><Link className="block py-4" to="/om-anna">Om Anna</Link></li>
            <li><Link className="block py-4" to="/kontakt">Hitta hit</Link></li>
          </ul>
          <BookButton className="mt-6 w-full">Boka en första behandling</BookButton>
        </div>
      )}
    </header>
  );
}

export function MobileBookBar() {
  const [visible, setVisible] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > Math.min(window.innerHeight * 0.7, 560));
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const finalCta = document.getElementById("boka-nu");
    if (!finalCta) return;
    const observer = new IntersectionObserver(([entry]) => setFinalCtaVisible(Boolean(entry?.isIntersecting)), { threshold: 0.15 });
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 flex min-h-14 items-center justify-between border border-primary-foreground/20 bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-500 md:hidden",
        visible && !finalCtaVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span>Boka tid hos Anna</span>
      <span className="eyebrow text-[0.62rem] opacity-80">Bokadirekt →</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pb-28 pt-20 md:pb-14">
       <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Kroppsterapi och coaching i Mölndal, nära Göteborg. För dig som vill släppa stress, värk
            och spänningar – och skapa en hälsa som håller.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-muted-foreground">Behandlingar</p>
          <ul className="space-y-2 text-sm">
             {treatments.map((t) => (
              <li key={t.slug}>
                <TreatmentLink slug={t.slug} className="transition-colors duration-200 hover:text-clay">
                  {t.name}
                </TreatmentLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4 text-muted-foreground">Besök</p>
          <p className="text-sm leading-relaxed">Mölndal, nära Göteborg</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-foreground/40 pb-1 text-sm hover:border-foreground">
            Boka via Bokadirekt →
          </a>
        </div>
        <p className="text-xs text-muted-foreground md:col-span-12">
          © Skapa din hälsa · Friskvård och komplementär behandling – inte en ersättning för vård.
        </p>
      </div>
    </footer>
  );
}
