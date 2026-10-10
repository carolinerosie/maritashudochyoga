import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import {
  BOOKING_URL,
  byGroup,
  contact,
  groupOrder,
  groups,
  isExternalBooking,
} from "@/content/site";
import { BookButton } from "./primitives";
import { TreatmentLink } from "./TreatmentLink";
import { InstagramFeed, SocialLinks } from "./Social";
import { cn } from "@/lib/utils";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${contact.businessName}, startsida`}
      className="flex w-fit items-center gap-3"
    >
      <img
        src="/favicon.png"
        alt=""
        className={cn("h-10 w-10 object-contain", light && "rounded-lg bg-white p-1")}
      />
      <span className="min-w-0 leading-none">
        <span className={cn("block font-serif text-[1.45rem]", light ? "text-white" : "text-ink")}>
          Maritas
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.7rem] tracking-[0.14em]",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          HUD- OCH YOGAATELJÉ
        </span>
      </span>
    </Link>
  );
}

const navLinks = [
  { to: "/prislista", label: "Prislista" },
  { to: "/presentkort", label: "Presentkort" },
  { to: "/hemvard", label: "Hemvård" },
  { to: "/om-marita", label: "Om Marita" },
  { to: "/kontakt", label: "Hitta hit" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: PointerEvent) => {
      if (e.target instanceof Node && !menu.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [menuOpen]);

  const nav = "text-[0.95rem] text-ink/80 transition-colors duration-200 hover:text-primary";
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Infolist: adress + telefon, som de flesta salonger har överst */}
      <div className="hidden bg-sand text-[0.82rem] text-ink/80 md:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2 md:px-10">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="size-4" strokeWidth={1.75} />
            {contact.venue}, {contact.street}, {contact.locality} · Gratis parkering
          </span>
          <span className="inline-flex items-center gap-5">
            <a
              href={contact.phoneHref}
              data-event="call_click"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Phone aria-hidden className="size-4" strokeWidth={1.75} />
              {contact.phone}
            </a>
            <a href={contact.landlineHref} data-event="call_click" className="hover:text-ink">
              {contact.landline}
            </a>
          </span>
        </div>
      </div>
      <div className="border-b border-border bg-linne/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Huvudmeny">
            <div
              ref={menu}
              className="relative"
              onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
            >
              <button
                type="button"
                className={cn(nav, "inline-flex h-11 items-center gap-1.5")}
                aria-expanded={menuOpen}
                aria-controls="meny-behandlingar"
                onClick={() => setMenuOpen((v) => !v)}
              >
                Behandlingar
                <ChevronDown
                  aria-hidden
                  className={cn("size-4 transition-transform", menuOpen && "rotate-180")}
                />
              </button>
              {menuOpen && (
                <div className="absolute -left-56 top-full pt-3">
                  <div
                    id="meny-behandlingar"
                    className="grid w-[54rem] grid-cols-3 gap-x-6 gap-y-5 rounded-2xl border border-border bg-white p-6 shadow-xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    {groupOrder.map((g) => (
                      <div key={g}>
                        <Link
                          to="/behandlingar"
                          hash={groups[g].slug}
                          className="text-sm font-medium text-jord-ink hover:underline"
                        >
                          {groups[g].label}
                        </Link>
                        <ul className="mt-2">
                          {byGroup(g).map((t) => (
                            <li key={t.slug}>
                              <TreatmentLink
                                slug={t.slug}
                                className="-mx-2 block rounded-lg px-2 py-1.5 text-[0.95rem] text-ink hover:bg-salvia-tint"
                              >
                                {t.name}
                              </TreatmentLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col justify-end rounded-2xl bg-sand p-4">
                      <p className="font-serif text-lg">Vet du inte vad du ska välja?</p>
                      <Link
                        to="/"
                        hash="hudbehov"
                        className="mt-2 text-sm font-medium text-primary underline underline-offset-4"
                      >
                        Sök efter hudbehov →
                      </Link>
                      <Link
                        to="/behandlingar"
                        className="mt-1 text-sm font-medium text-primary underline underline-offset-4"
                      >
                        Alla behandlingar →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={nav}
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <BookButton className="min-h-11 px-5 py-2.5" />
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contact.phoneHref}
              aria-label={`Ring ${contact.phone}`}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink"
            >
              <Phone className="size-5" strokeWidth={1.75} />
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div
            id="mobilmeny"
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-linne px-6 pb-8 pt-4 lg:hidden"
          >
            <div onClick={() => setOpen(false)}>
              <Link to="/behandlingar" className="block py-3 font-serif text-2xl">
                Behandlingar
              </Link>
              <div className="grid gap-4 pb-4">
                {groupOrder.map((g) => (
                  <div key={g}>
                    <p className="text-sm font-medium text-jord-ink">{groups[g].label}</p>
                    <ul className="mt-1">
                      {byGroup(g).map((t) => (
                        <li key={t.slug}>
                          <TreatmentLink slug={t.slug} className="block py-1.5 text-ink/80">
                            {t.name}
                          </TreatmentLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <ul className="divide-y divide-border border-t border-border font-serif text-2xl">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="block py-3">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <BookButton className="mt-6 w-full" />
          </div>
        )}
      </div>
    </header>
  );
}

export function MobileBookBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > Math.min(window.innerHeight * 0.6, 480));
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-full bg-white/95 p-1.5 shadow-xl ring-1 ring-ink/10 backdrop-blur transition-all duration-500 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={BOOKING_URL}
        {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-event="booking_click"
        className="flex min-h-12 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground"
      >
        Boka tid
      </a>
      <a
        href={contact.phoneHref}
        data-event="call_click"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 font-medium text-ink"
      >
        <Phone aria-hidden className="size-4" strokeWidth={1.75} />
        Ring
      </a>
    </div>
  );
}

export function Footer() {
  const col = "text-sm leading-relaxed text-white/85";
  const a = "underline-offset-4 hover:text-white hover:underline";
  return (
    <footer className="bg-ink pb-28 pt-16 text-white lg:pb-12">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Logo light />
          <p className={cn(col, "mt-6 max-w-sm")}>
            Auktoriserad hudterapeut med egen ateljé på Målarns Gård i Frillesås sedan 2001. Nära
            Åsa, Fjärås, Kungsbacka och Varberg.
          </p>
          <div className="mt-6">
            <SocialLinks size="sm" />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-serif text-lg text-white">Behandlingar</p>
          <ul className={cn(col, "mt-4 space-y-2")}>
            {groupOrder.map((g) => (
              <li key={g}>
                <Link to="/behandlingar" hash={groups[g].slug} className={a}>
                  {groups[g].label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/prislista" className={a}>
                Prislista
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="font-serif text-lg text-white">Ateljén</p>
          <ul className={cn(col, "mt-4 space-y-2")}>
            <li>
              <Link to="/om-marita" className={a}>
                Om Marita
              </Link>
            </li>
            <li>
              <Link to="/presentkort" className={a}>
                Presentkort
              </Link>
            </li>
            <li>
              <Link to="/hemvard" className={a}>
                Hemvård
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className={a}>
                Hitta hit
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-serif text-lg text-white">Besök & bokning</p>
          <address className={cn(col, "mt-4 not-italic")}>
            {contact.venue}
            <br />
            {contact.street}, {[contact.postalCode, contact.locality].filter(Boolean).join(" ")}
          </address>
          <p className={cn(col, "mt-3")}>
            <a href={contact.phoneHref} className={a}>
              {contact.phone}
            </a>{" "}
            (även sms)
            <br />
            <a href={contact.landlineHref} className={a}>
              {contact.landline}
            </a>
          </p>
          <p className={cn(col, "mt-3")}>{contact.payment}</p>
        </div>
        <InstagramFeed />
        <p className="border-t border-white/15 pt-6 text-xs text-white/70 md:col-span-12">
          © {new Date().getFullYear()} {contact.businessName}
        </p>
      </div>
    </footer>
  );
}
