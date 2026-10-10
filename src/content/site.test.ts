import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  absoluteUrl,
  BOOKING_URL,
  contact,
  fromPrice,
  POPULARITY_ORDER,
  getTreatment,
  groups,
  concerns,
  generalFaq,
  groupOrder,
  popularTreatments,
  publicPaths,
  SITE_URL,
  treatments,
} from "./site";

const rec = (id: string) => concerns.find((o) => o.id === id)?.treatments;

describe("Hitta efter hudbehov", () => {
  it("har sex hudbehov", () => {
    expect(concerns.map((c) => c.label)).toEqual([
      "Akne & orenheter",
      "Rodnad & känslig hud",
      "Pigment & solskador",
      "Linjer & fasthet",
      "Torr & trött hud",
      "Stress & spänningar",
    ]);
  });
  it("akne leder till acnebehandling först", () => {
    expect(rec("akne")?.[0]).toBe("acnebehandling");
  });
  it("alla förslag pekar på en befintlig behandling", () => {
    for (const c of concerns) for (const s of c.treatments) expect(getTreatment(s)).toBeDefined();
  });
});

describe("Behandlingar och områden", () => {
  it("fem behandlingskategorier i rätt ordning", () => {
    expect(groupOrder.map((g) => groups[g].label)).toEqual([
      "Ansiktsbehandlingar",
      "Hudkurer & resultat",
      "Massage & kropp",
      "Fransar, bryn & epilering",
      "Hälsa & livsstil",
    ]);
  });
  it("sex populära behandlingar i popularitetsordning", () => {
    expect(popularTreatments.map((t) => t.slug)).toEqual(POPULARITY_ORDER.slice(0, 6));
  });
  it("vanliga frågor finns", () => {
    expect(generalFaq.length).toBeGreaterThanOrEqual(5);
  });
  it("varje område har minst en behandling", () => {
    for (const g of Object.keys(groups)) expect(treatments.some((t) => t.group === g)).toBe(true);
  });
  it("popularitetsordningen täcker alla behandlingar och styr ordningen", () => {
    expect([...POPULARITY_ORDER].sort()).toEqual(treatments.map((t) => t.slug).sort());
    expect(treatments.map((t) => t.slug)).toEqual(POPULARITY_ORDER);
  });
  it("från-pris räknas från prislistan", () => {
    expect(fromPrice(getTreatment("hudanalys")!)).toBe("från 200 kr");
    expect(fromPrice(getTreatment("ansiktsbehandlingar")!)).toBe("från 490 kr");
  });
  it("unika slugs", () => {
    expect(new Set(treatments.map((t) => t.slug)).size).toBe(treatments.length);
  });
  it("varje behandling har lokal söktext, pris och frågor", () => {
    for (const t of treatments) {
      expect(t.seoDescription).toMatch(/Frillesås/);
      expect(t.seoIntro.length).toBeGreaterThan(120);
      expect(t.questions.length).toBeGreaterThanOrEqual(3);
      expect(t.prices.length).toBeGreaterThanOrEqual(1);
      expect(t.placeholder).not.toBe(true);
    }
  });
  it("kontakt: båda telefonnumren och adressen", () => {
    expect(contact.phone).toBe("0702-38 46 54");
    expect(contact.landline).toBe("0340-65 73 88");
    expect(contact.street).toBe("Målarns väg 5");
  });
  it("bokningslänken är tillfällig tills Marita valt bokningssätt", () => {
    expect(BOOKING_URL).toBe("#boka");
  });
});

describe("SEO-grund", () => {
  const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  it("sitemap innehåller exakt alla publika sidor", () => {
    expect(locs.sort()).toEqual(publicPaths.map(absoluteUrl).sort());
  });
  it("robots.txt pekar på sitemap", () => {
    const robots = readFileSync(resolve(__dirname, "../../public/robots.txt"), "utf8");
    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });
  it("canonical-adresser är fullständiga", () => {
    expect(absoluteUrl("/")).toBe(SITE_URL);
    expect(absoluteUrl("/kontakt")).toBe(`${SITE_URL}/kontakt`);
  });
  it("delningsbilden finns", () => {
    expect(existsSync(resolve(__dirname, "../../public/og-image.jpg"))).toBe(true);
  });
});
