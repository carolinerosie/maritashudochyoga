import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  absoluteUrl,
  BOOKING_URL,
  contact,
  FLAGSHIP_SLUG,
  getTreatment,
  groups,
  guideOptions,
  publicPaths,
  SITE_URL,
  treatments,
} from "./site";

const rec = (id: string) => guideOptions.find((o) => o.id === id)?.treatments;

describe("Hur mår du just nu? – vägvisaren", () => {
  it("har 5–8 påståenden", () => {
    expect(guideOptions.length).toBeGreaterThanOrEqual(5);
    expect(guideOptions.length).toBeLessThanOrEqual(8);
  });
  it("linjer leder till tibetansk faceliftmassage eller microneedling", () => {
    expect(rec("linjer")).toEqual(["tibetansk-faceliftmassage", "microneedling"]);
  });
  it("pigment leder till PRX-PLUS eller microneedling", () => {
    expect(rec("pigment")).toEqual(["prx-plus", "microneedling"]);
  });
  it("oren hud leder till acnebehandling eller AHA-PHA-kur", () => {
    expect(rec("oren")).toEqual(["acnebehandling", "aha-pha-kur"]);
  });
  it("spänd leder till varma stenar eller beröring", () => {
    expect(rec("spand")).toEqual(["massage-varma-stenar", "beroring-reiki-healing"]);
  });
  it("vanor leder till livsstilscoach", () => {
    expect(rec("vanor")).toEqual(["livsstilscoach"]);
  });
  it("alla rekommendationer pekar på en befintlig behandling", () => {
    for (const o of guideOptions)
      for (const s of o.treatments) expect(getTreatment(s)).toBeDefined();
  });
});

describe("Behandlingar och områden", () => {
  it("tre områden: Huden, Förnyelsen, Lugnet", () => {
    expect(Object.values(groups).map((g) => g.label)).toEqual(["Huden", "Förnyelsen", "Lugnet"]);
  });
  it("varje område har minst en behandling", () => {
    for (const g of Object.keys(groups)) expect(treatments.some((t) => t.group === g)).toBe(true);
  });
  it("flaggskeppet finns", () => {
    expect(getTreatment(FLAGSHIP_SLUG)?.name).toBe("Tibetansk faceliftmassage");
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
