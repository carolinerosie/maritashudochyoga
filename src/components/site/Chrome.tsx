import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  BOOKING_URL,
  contact,
  groups,
  isExternalBooking,
  treatments,
  type Group,
} from "@/content/site";
import { BookButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { InstagramFeed, SocialLinks } from "./Social";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Logo() {
  return (
    <Link
      to="/"
      aria-label={`${contact.businessName}, startsida`}
      className="grid w-fit grid-cols-[2.25rem_auto] items-center gap-2.5"
    >
      <img src="/favicon.png" alt="" className="h-9 w-9 object-contain" />
      <span className="min-w-0">
        <span className="block font-serif text-[1.2rem] leading-none">Maritas</span>
        <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-clay">
          Hud- och Yogaateljé
        </span>
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
      if (event.target instanceof Node && !treatmentMenu.current?.contains(event.target))
        setTreatmentsOpen(false);
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
            <Button
              variant="ghost"
              className={cn(nav, "h-11 gap-2 rounded-sm px-0 font-normal hover:bg-transparent")}
              aria-expanded={treatmentsOpen}
              aria-controls="desktop-treatment-navigation"
              onClick={() => setTreatmentsOpen((value) => !value)}
            >
              Behandlingar{" "}
              <span
                aria-hidden
                className={cn(
                  "text-xs transition-transform duration-200",
                  treatmentsOpen && "rotate-180",
                )}
              >
                ⌄
              </span>
            </Button>
            {treatmentsOpen && (
              <div className="absolute -left-40 top-full w-[46rem] pt-2">
                <div
                  id="desktop-treatment-navigation"
                  className="grid grid-cols-3 gap-2 rounded-sm border border-border bg-popover p-4 text-popover-foreground shadow-lg"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  {(Object.keys(groups) as Group[]).map((g) => (
                    <div key={g}>
                      <p className={cn("eyebrow px-3 pb-2 pt-1 text-[0.68rem]", groups[g].color)}>
                        {groups[g].label}
                      </p>
                      <ul>
                        {treatments
                          .filter((t) => t.group === g)
                          .map((t) => (
                            <li key={t.slug}>
                              <TreatmentLink
                                slug={t.slug}
                                className="block px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary focus-visible:bg-primary/5"
                              >
                                {t.name}
                              </TreatmentLink>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/om-marita" className={nav} activeProps={{ className: "text-foreground" }}>
            Om Marita
          </Link>
          <Link to="/presentkort" className={nav} activeProps={{ className: "text-foreground" }}>
            Presentkort
          </Link>
          <Link to="/kontakt" className={nav} activeProps={{ className: "text-foreground" }}>
            Hitta hit
          </Link>
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
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-6 shadow-lg md:hidden"
        >
          <ul className="divide-y divide-border font-serif text-2xl" onClick={() => setOpen(false)}>
            <li>
              <Link className="block py-4" to="/">
                Start
              </Link>
            </li>
            <li>
              <Link className="block py-4" to="/" hash="var-sitter-det">
                Hitta rätt behandling
              </Link>
            </li>
            <li>
              <Link className="block py-4" to="/" hash="behandlingar">
                Behandlingar
              </Link>
              <div className="pb-4 font-sans text-base">
                {(Object.keys(groups) as Group[]).map((g) => (
                  <div key={g} className="pt-2">
                    <p className={cn("eyebrow pb-1 text-[0.68rem]", groups[g].color)}>
                      {groups[g].label}
                    </p>
                    <ul>
                      {treatments
                        .filter((t) => t.group === g)
                        .map((t) => (
                          <li key={t.slug}>
                            <TreatmentLink
                              slug={t.slug}
                              className="block py-2 text-foreground/75 hover:text-primary"
                            >
                              {t.name}
                            </TreatmentLink>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Link className="block py-4" to="/om-marita">
                Om Marita
              </Link>
            </li>
            <li>
              <Link className="block py-4" to="/presentkort">
                Presentkort
              </Link>
            </li>
            <li>
              <Link className="block py-4" to="/hemvard">
                Hemvård
              </Link>
            </li>
            <li>
              <Link className="block py-4" to="/kontakt">
                Hitta hit
              </Link>
            </li>
          </ul>
          <BookButton className="mt-6 w-full">Boka tid</BookButton>
          <a
            href={contact.phoneHref}
            className="mt-3 flex min-h-12 w-full items-center justify-center border border-foreground/40 text-sm font-semibold"
          >
            Ring {contact.phone}
          </a>
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
    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.15 },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 grid min-h-14 grid-cols-[1fr_auto] border border-primary-foreground/20 bg-primary text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-500 md:hidden",
        visible && !finalCtaVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={BOOKING_URL}
        {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-event="booking_click"
        className="flex items-center px-5 py-4"
      >
        Boka tid hos Marita{" "}
        <span aria-hidden className="ml-2">
          →
        </span>
      </a>
      <a
        href={contact.phoneHref}
        data-event="call_click"
        className="flex items-center border-l border-primary-foreground/25 px-5 py-4"
      >
        Ring
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pb-28 pt-20 md:pb-14">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Hudterapeut med egen ateljé på Målarns Gård i Frillesås sedan 2001. Hudvård, hudkurer
            och lugn för kropp och sinne – nära Åsa, Fjärås och Kungsbacka.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-5">
          {(Object.keys(groups) as Group[]).map((g) => (
            <div key={g}>
              <p className={cn("eyebrow mb-4", groups[g].color)}>{groups[g].label}</p>
              <ul className="space-y-2 text-sm">
                {treatments
                  .filter((t) => t.group === g)
                  .map((t) => (
                    <li key={t.slug}>
                      <TreatmentLink
                        slug={t.slug}
                        className="transition-colors duration-200 hover:text-clay"
                      >
                        {t.name}
                      </TreatmentLink>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-muted-foreground">Besök</p>
          <address className="text-sm not-italic leading-relaxed">
            {contact.businessName}
            <br />
            {contact.venue}, {contact.street}
            <br />
            {[contact.postalCode, contact.locality].filter(Boolean).join(" ")}
          </address>
          <p className="mt-4 text-sm leading-relaxed">
            <a
              href={contact.phoneHref}
              className="border-b border-foreground/30 hover:border-foreground"
            >
              {contact.phone}
            </a>
            <br />
            <a
              href={contact.landlineHref}
              className="border-b border-foreground/30 hover:border-foreground"
            >
              {contact.landline}
            </a>
          </p>
          <p className="mt-4 text-sm">
            <Link
              to="/presentkort"
              className="border-b border-foreground/30 hover:border-foreground"
            >
              Presentkort
            </Link>
            {" · "}
            <Link to="/hemvard" className="border-b border-foreground/30 hover:border-foreground">
              Hemvård
            </Link>
          </p>
          <p className="eyebrow mb-3 mt-10 text-muted-foreground">Följ Marita</p>
          <SocialLinks size="sm" />
        </div>
        <InstagramFeed />
        <p className="text-xs text-muted-foreground md:col-span-12">
          © {new Date().getFullYear()} {contact.businessName}
        </p>
      </div>
    </footer>
  );
}
