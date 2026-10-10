import { describe, expect, it } from "vitest";
import { BOOKING_URL, getTreatment, guideOptions, treatments } from "./site";

const rec = (id: string) => guideOptions.find((o) => o.id === id)?.treatments;

describe("Var sitter det? – vägvisaren", () => {
  it("spänd käke leder till käkledsbehandling", () => {
    expect(rec("kake")).toEqual(["kakledsbehandling"]);
  });
  it("huvudvärk och nacke leder till käkled eller kinesiologi", () => {
    expect(rec("huvud")).toEqual(["kakledsbehandling", "kinesiologi"]);
  });
  it("tung svullen kropp leder till lymfmassage", () => {
    expect(rec("tung")).toEqual(["lymfmassage"]);
  });
  it("återkommande värk leder till postural terapi eller kinesiologi", () => {
    expect(rec("vark")).toEqual(["postural-terapi", "kinesiologi"]);
  });
  it("stress leder till kinesiologi", () => {
    expect(rec("stress")).toEqual(["kinesiologi"]);
  });
  it("mönster leder till theta healing eller coaching", () => {
    expect(rec("monster")).toEqual(["theta-healing", "coaching"]);
  });
  it("vet inte leder till kinesiologi som startpunkt", () => {
    expect(rec("vetinte")).toEqual(["kinesiologi"]);
  });
  it("alla rekommendationer pekar på en befintlig behandling", () => {
    for (const o of guideOptions) for (const s of o.treatments) expect(getTreatment(s)).toBeDefined();
  });
  it("sex behandlingar och bokning via Bokadirekt", () => {
    expect(treatments).toHaveLength(6);
    expect(treatments.map((t) => t.name)).toEqual([
      "Käkledsbehandling",
      "Kinesiologi",
      "Lymfmassage",
      "Postural terapi",
      "Theta Healing",
      "Coaching",
    ]);
    expect(BOOKING_URL).toBe("https://www.bokadirekt.se/places/anna-flatoe-skapa-din-halsa-42319");
  });
  it("varje behandling har unik söktext och frågor", () => {
    for (const treatment of treatments) {
      expect(treatment.seoDescription).toContain("Mölndal");
      expect(treatment.seoIntro.length).toBeGreaterThan(120);
      expect(treatment.questions.length).toBeGreaterThanOrEqual(3);
      expect(treatment.placeholder).not.toBe(true);
    }
  });
  it("lymfmassage har det beslutade lokala sökfokuset", () => {
    const treatment = getTreatment("lymfmassage");
    expect(treatment?.seoTitle).toBe("Lymfmassage Göteborg & Mölndal | Anna Flatöe – Skapa din hälsa");
    expect(treatment?.heading).toBe("Lymfmassage i Göteborg & Mölndal");
    expect(treatment?.questions).toHaveLength(5);
  });
});
