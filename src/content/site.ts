import imgMask from "@/assets/stamning-mask.jpg";
import imgAnsiktsmassage from "@/assets/stamning-ansiktsmassage.jpg";
import imgAnsikteHals from "@/assets/stamning-ansikte-hals.jpg";
import imgMassageRum from "@/assets/stamning-massage-rum.jpg";
import imgBeroring from "@/assets/stamning-beroring.jpg";
import imgRum from "@/assets/ateljen-behandlingsrum.jpg";

/**
 * Bokningslänk för alla "Boka tid"-knappar.
 * TILLFÄLLIG: pekar inte någonstans ännu. Byt till Maritas bokningssida (t.ex. Bokadirekt)
 * när hon har bestämt sig – då öppnas länken automatiskt i en ny flik.
 */
export const BOOKING_URL = "#boka";
export const isExternalBooking = BOOKING_URL.startsWith("http");

/** Sajtens publika adress. Byts här om domänen ändras – canonical, delningslänkar och sitemap följer med. */
export const SITE_URL = "https://maritashudoyoga.se";
export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Delningsbild (1200 × 630) för Facebook m.fl. Ligger i public/. */
export const SHARE_IMAGE = absoluteUrl("/og-image.jpg");

/**
 * Kontaktuppgifter. Källa: maritashudoyoga.se + uppgift från Caroline (fast telefon).
 * SAKNAS: e-post, postnummer, öppettider. Tomma fält visas inte på sajten.
 */
export const contact = {
  businessName: "Maritas Hud- och Yogaateljé",
  owner: "Marita",
  phone: "0702-38 46 54",
  phoneHref: "tel:+46702384654",
  smsHref: "sms:+46702384654",
  landline: "0340-65 73 88",
  landlineHref: "tel:+46340657388",
  email: "",
  locality: "Frillesås",
  venue: "Målarns Gård",
  street: "Målarns väg 5",
  postalCode: "",
  openingHours: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=57.317612%2C12.167358",
  geo: { latitude: 57.317612, longitude: 12.167358 },
  mapsEmbedUrl: "https://maps.google.com/maps?q=57.317612,12.167358&z=16&t=m&hl=sv&output=embed",
  payment: "Swish eller Bankgiro – ingen kontanthantering.",
  cancellation: "Uteblivet besök debiteras med behandlingens pris.",
};

/** Sociala medier. Lämna en adress tom ("") så visas inte ikonen. */
export const social = {
  instagram: "",
  instagramHandle: "",
  tiktok: "",
  facebook: "https://www.facebook.com/MaritasHudFotvardsatelje/",
};

/** Behold-flöde för Instagram. Tomt tills Marita har ett Instagram-konto. */
export const INSTAGRAM_FEED_URL = "";

/** Hemvård: Exuviance/Neostrata klinikwebbshop med Maritas kod. */
export const WEBSHOP_URL = "https://www.exuviance.se/#clinic=maritashud-yogaatelje&link=1843d220";

/** Strukturerad data för verksamheten (Google). */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#verksamhet`,
  name: contact.businessName,
  url: absoluteUrl("/"),
  image: SHARE_IMAGE,
  telephone: "+46702384654",
  ...(contact.email ? { email: contact.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    ...(contact.postalCode ? { postalCode: contact.postalCode } : {}),
    addressLocality: contact.locality,
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", ...contact.geo },
  hasMap: contact.mapsUrl,
  areaServed: ["Frillesås", "Åsa", "Fjärås", "Kungsbacka", "Varberg"],
  founder: { "@type": "Person", name: "Marita" },
  paymentAccepted: "Swish, Bankgiro",
  sameAs: [social.facebook].filter(Boolean),
};

/**
 * Förtroendebevis som visas i hero och på tjänstesidor.
 * Uppgifterna kommer från Maritas nuvarande sajt – BEKRÄFTA att de är aktuella före lansering.
 * Betyg/omdömen saknas: lägg till när det finns godkända omdömen.
 */
export const trustProof = {
  since: "2001",
  headline: "Egen ateljé sedan 2001",
  items: [
    "Auktoriserad hudterapeut (SHR)",
    "CIDESCO",
    "Säker hudterapeut",
    "Behandlingsskadeförsäkring",
  ],
  location: "Frillesås · Kungsbacka kommun",
  rating: "",
  reviews: "",
};

/** Behandlingskategorier – så som kunder letar hos en hudterapeut. Ordningen styr menyer och listor. */
export type Group = "ansikte" | "kurer" | "kropp" | "fransar" | "halsa";

export const groupOrder: Group[] = ["ansikte", "kurer", "kropp", "fransar", "halsa"];

export const groups: Record<Group, { label: string; lead: string; text: string; slug: string }> = {
  ansikte: {
    label: "Ansiktsbehandlingar",
    lead: "Rengöring, fukt och lyster",
    text: "Klassiska, ekologiska och lyxiga ansiktsbehandlingar som anpassas efter din hud – från en snabb Fresh Up till 90 minuters Ansiktslyx.",
    slug: "ansiktsbehandlingar",
  },
  kurer: {
    label: "Hudkurer & resultat",
    lead: "För linjer, pigment, porer och ärr",
    text: "Behandlingar i flera steg för dig som vill se skillnad – utan injektioner. Du får en plan, ett totalpris och eftervård.",
    slug: "hudkurer",
  },
  kropp: {
    label: "Massage & kropp",
    lead: "Värme, beröring och återhämtning",
    text: "Massage med varma stenar, avslappningsmassage, ryggbehandling och beröring i tystnad.",
    slug: "massage-och-kropp",
  },
  fransar: {
    label: "Fransar, bryn & epilering",
    lead: "Färgning, formning och hårborttagning",
    text: "Färgning och formning av fransar och bryn, epilering med växelström och make up-rådgivning.",
    slug: "fransar-bryn-epilering",
  },
  halsa: {
    label: "Hälsa & livsstil",
    lead: "Kost, vanor och stöd",
    text: "Coachning i hälsa, kost och livsstil – en plan tillsammans och uppföljning.",
    slug: "halsa-och-livsstil",
  },
};

export type Price = { label: string; duration?: string; price: string };

export type Treatment = {
  slug: string;
  name: string;
  group: Group;
  short: string;
  image: string;
  imageAlt: string;
  forWho: string[];
  what: string;
  during: string[];
  takeaway: string[];
  recommendation: string;
  prices: Price[];
  priceNote?: string;
  seoDescription: string;
  seoIntro: string;
  questions: { question: string; answer: string }[];
  seoTitle?: string;
  heading?: string;
  localHeading?: string;
  placeholder?: boolean;
};

const HEMVARD_NOTE = "Lägre pris för dig som köper din hudvård hos Marita.";

const allTreatments: Treatment[] = [
  // ---------------- HUDEN ----------------
  {
    slug: "hudanalys",
    name: "Hudanalys",
    group: "ansikte",
    short: "En kvart som visar vad din hud behöver – och vilken hemvård som passar dig.",
    image: imgMask,
    imageAlt: "Stämningsbild: en ansiktsmask penslas på med en solfjäderpensel",
    forWho: [
      "Inte vet vilka produkter som passar din hud",
      "Har en låda full med krämer som inte gör det du hoppats",
      "Vill börja med en ny hudvårdsrutin",
      "Funderar på en kur men vill veta vad som passar först",
    ],
    what: "Marita tittar på din hud tillsammans med dig, lyssnar på vad du har märkt och sätter ihop ett hudvårdsschema som passar just dig.",
    during: [
      "Vi pratar om hur din hud känns och vad du använder i dag.",
      "Marita analyserar huden i lugn och ro.",
      "Du får ett personligt hudvårdsschema att ta med dig hem.",
    ],
    takeaway: ["Ett personligt hudvårdsschema", "Svar på vilken behandling som passar dig"],
    recommendation: "Ett bra första steg innan en behandling eller kur.",
    prices: [{ label: "Hudanalys med hudvårdsschema", duration: "15 min", price: "200 kr" }],
    seoDescription:
      "Hudanalys i Frillesås hos hudterapeut Marita. 15 minuter, 200 kr – med ett personligt hudvårdsschema. Nära Åsa, Fjärås och Kungsbacka.",
    seoIntro:
      "En hudanalys i Frillesås är det enklaste sättet att komma igång. På en kvart går Marita igenom din hud, vad du använder i dag och vad du vill förändra. Du får ett personligt hudvårdsschema och ett ärligt råd om vilken behandling som passar dig – om någon alls.",
    questions: [
      {
        question: "Vad kostar en hudanalys?",
        answer: "En hudanalys tar 15 minuter och kostar 200 kr.",
      },
      {
        question: "Måste jag köpa produkter efteråt?",
        answer:
          "Nej. Du får ett hudvårdsschema och råd. Vad du väljer att göra sedan bestämmer du själv.",
      },
      {
        question: "Kan jag göra en hudanalys innan en kur?",
        answer:
          "Ja, det är ett bra sätt att ta reda på vilken kur som passar din hud innan du bestämmer dig.",
      },
    ],
  },
  {
    slug: "ansiktsbehandlingar",
    name: "Ansiktsbehandlingar",
    group: "ansikte",
    short: "Klassiska och lyxiga ansiktsbehandlingar med Maria Åkerbergs hudvård.",
    image: imgMask,
    imageAlt: "Stämningsbild: en ansiktsmask penslas på med en solfjäderpensel",
    forWho: [
      "Vill ge huden ny lyster",
      "Har torr, trött eller orolig hud",
      "Har synliga blodkärl eller rodnad (AntiRouge)",
      "Vill unna dig en stund av lugn och omsorg",
    ],
    what: "Ansiktsbehandlingar med svenska Maria Åkerbergs hudvård. Från en snabb Fresh Up till en lång Ansiktslyx med massage av ansikte, hals och hårbotten.",
    during: [
      "Huden rengörs och får en mild peeling.",
      "Ånga och portömning efter behov.",
      "Massage av ansikte och hals – i de längre behandlingarna även hårbotten.",
      "Mask och avslutande krämer som passar din hud.",
    ],
    takeaway: ["Råd om hemvård som passar din hud", "En stund då du bara får vara"],
    recommendation: "Välj längd efter tid och behov. Fråga gärna Marita om du är osäker.",
    prices: [
      { label: "Fresh Up", duration: "25 min", price: "490 / 590 kr" },
      { label: "C-vitaminbehandling", duration: "45 min", price: "750 / 850 kr" },
      { label: "AntiRouge-behandling", duration: "45 min", price: "750 / 850 kr" },
      { label: "Klassisk ansiktsbehandling", duration: "60 min", price: "850 / 950 kr" },
      {
        label: "Pure Cell Treatment – Riktigt lyxpaket",
        duration: "75 min",
        price: "1 495 / 1 690 kr",
      },
      { label: "Ansiktslyx", duration: "90 min", price: "1 250 / 1 350 kr" },
    ],
    priceNote: HEMVARD_NOTE,
    seoDescription:
      "Ansiktsbehandling i Frillesås med Maria Åkerbergs hudvård – Fresh Up, klassisk, Ansiktslyx, C-vitamin och AntiRouge. Nära Åsa och Kungsbacka.",
    seoIntro:
      "Söker du ansiktsbehandling nära Kungsbacka? I Maritas ateljé på Målarns Gård i Frillesås väljer du mellan en kort Fresh Up och en lång Ansiktslyx med massage av ansikte, hals och hårbotten. Behandlingarna görs med Maria Åkerbergs svenska hudvård och anpassas efter din hud.",
    questions: [
      {
        question: "Vilken ansiktsbehandling ska jag välja?",
        answer:
          "Klassisk ansiktsbehandling passar de flesta. Har du ont om tid räcker Fresh Up. Vill du ha extra tid och massage är Ansiktslyx rätt. Är du osäker, börja med en hudanalys.",
      },
      {
        question: "Varför finns det två priser?",
        answer: "Det lägre priset gäller dig som köper din hudvård hos Marita.",
      },
      {
        question: "Hur betalar jag?",
        answer: "Med Swish eller Bankgiro. Ateljén tar inte emot kontanter.",
      },
    ],
  },
  {
    slug: "esse-ekologisk-ansiktsbehandling",
    name: "Esse ekologisk ansiktsbehandling",
    group: "ansikte",
    short: "Ekologisk ansiktsbehandling med probiotika – för alla åldrar och de flesta hudtyper.",
    image: imgAnsiktsmassage,
    imageAlt: "Stämningsbild: lugn ansiktsmassage med mjuka handgrepp",
    forWho: [
      "Vill ha en ekologisk behandling",
      "Har torr eller livlös hud",
      "Har känslig hud",
      "Vill ge huden fukt och lyster",
    ],
    what: "En ekologisk ansiktsbehandling från Esse med probiotika. Den ger huden fukt och lyster direkt, och produkterna väljs efter vad din hud behöver.",
    during: [
      "Vi går igenom hur din hud mår i dag.",
      "Huden rengörs och behandlas med Esses ekologiska produkter.",
      "Behandlingen avslutas med produkter som passar din hudtyp.",
    ],
    takeaway: ["Fuktig, lystrande hud", "Förslag på ekologisk hemvård"],
    recommendation: "Passar som regelbunden behandling för alla åldrar.",
    prices: [{ label: "Esse ansiktsbehandling", duration: "60 min", price: "850 kr" }],
    seoDescription:
      "Ekologisk ansiktsbehandling med Esse och probiotika i Frillesås. 60 minuter, 850 kr. Hudterapeut nära Åsa och Kungsbacka.",
    seoIntro:
      "Esse är en ekologisk hudvård med probiotika. Hos Marita i Frillesås får du en ansiktsbehandling som ger fukt, lyster och en jämnare yta – med produkter som väljs efter din hud. Den passar alla åldrar och de flesta hudtyper, även torr och känslig hud.",
    questions: [
      {
        question: "Vad är probiotisk hudvård?",
        answer:
          "Esses produkter innehåller probiotika och är ekologiska. Marita väljer de produkter som passar din hud.",
      },
      {
        question: "Passar behandlingen känslig hud?",
        answer:
          "Ja, Esse passar även känslig hud. Har du en hudsjukdom, berätta det när du bokar – vid misstanke om hudsjukdom ska du kontakta vården först.",
      },
      { question: "Hur lång tid tar behandlingen?", answer: "60 minuter. Den kostar 850 kr." },
    ],
  },
  {
    slug: "neostrata",
    name: "Neostrata ansiktsbehandling",
    group: "ansikte",
    short: "Ansiktsbehandling med AHA-PHA-peeling för en jämnare, klarare hud.",
    image: imgMask,
    imageAlt: "Stämningsbild: en ansiktsmask penslas på med en solfjäderpensel",
    forWho: [
      "Har ojämn hudton eller pigment",
      "Har stora porer eller oren hud",
      "Vill ha en jämnare och klarare yta",
    ],
    what: "En ansiktsbehandling med Neostratas syror (AHA och PHA) som jämnar ut huden. Den avslutas med mask, serum och dagkräm.",
    during: [
      "Huden rengörs och får en AHA-PHA-peeling.",
      "Portömning och ansiktsmassage.",
      "Mask, serum och dagkräm – vårdande foundation om du vill.",
    ],
    takeaway: ["En klarare, jämnare hud", "Råd om Neostratas hemvård"],
    recommendation: "Vill du ha mer effekt finns AHA-PHA-kuren med sex behandlingar.",
    prices: [
      { label: "Neostrata ansiktsbehandling", duration: "60 min", price: "850 kr" },
      { label: "Neostrata ansiktsbehandling", duration: "90 min", price: "1 250 kr" },
    ],
    seoDescription:
      "Neostrata ansiktsbehandling med AHA-PHA-peeling i Frillesås, 60 eller 90 minuter. Hudterapeut nära Åsa och Kungsbacka.",
    seoIntro:
      "Neostrata är en hudvård med milda syror som jämnar ut hudens yta. I Maritas ateljé i Frillesås får du en ansiktsbehandling med AHA-PHA-peeling, portömning, massage, mask och serum. Den passar dig som vill ha en jämnare hudton och klarare porer.",
    questions: [
      {
        question: "Vad är AHA och PHA?",
        answer: "Det är milda fruktsyror som löser upp döda hudceller och jämnar ut hudens yta.",
      },
      {
        question: "Svider det?",
        answer:
          "Det varierar mellan olika hudar. Marita anpassar behandlingen efter din hud och du kan alltid säga till.",
      },
      {
        question: "Vad är skillnaden mot AHA-PHA-kuren?",
        answer:
          "Det här är en enstaka behandling. AHA-PHA-kuren är sex behandlingar i följd tillsammans med hemvård.",
      },
    ],
  },
  {
    slug: "acnebehandling",
    name: "Acnebehandling",
    group: "ansikte",
    short: "För oren hud, igensatta porer och finnar – en lugn plan i stället för ännu en produkt.",
    image: imgAnsiktsmassage,
    imageAlt: "Stämningsbild: lugn ansiktsbehandling med mjuka handgrepp",
    forWho: [
      "Har finnar eller igensatta porer",
      "Har testat många produkter utan att det blivit bättre",
      "Är tonåring eller vuxen med oren hud",
    ],
    what: "En djuprengörande behandling med peeling, ånga, portömning och en lugnande mask. Oftast behövs flera behandlingar, tillsammans med en hemrutin.",
    during: [
      "Vi pratar om din hud och vad du har provat.",
      "Huden rengörs, får en peeling och ånga.",
      "Portömning och en lugnande mask.",
      "Du får en hemrutin att följa mellan besöken.",
    ],
    takeaway: ["En hemrutin som passar din hud", "En plan för de kommande behandlingarna"],
    recommendation:
      "Flera behandlingar rekommenderas. Vid kraftig eller smärtsam akne – kontakta vården först.",
    prices: [{ label: "Acnebehandling", duration: "60 min", price: "850 / 950 kr" }],
    priceNote: HEMVARD_NOTE,
    seoDescription:
      "Acnebehandling hos hudterapeut i Frillesås för oren hud och igensatta porer. För tonåringar och vuxna, nära Åsa och Kungsbacka.",
    seoIntro:
      "Har du oren hud och finnar som inte ger med sig? En acnebehandling hos Marita i Frillesås rengör huden på djupet och ger dig en hemrutin som håller. Behandlingen passar både tonåringar och vuxna. Vid kraftig, smärtsam eller plötslig akne ska du alltid kontakta vården först.",
    questions: [
      {
        question: "Hur många behandlingar behövs?",
        answer: "Oftast flera. Marita lägger upp en plan tillsammans med dig efter första besöket.",
      },
      {
        question: "Kan min tonåring komma?",
        answer: "Ja. Behandlingen passar tonåringar. Ring gärna och prata först om du är osäker.",
      },
      {
        question: "När ska man gå till läkare i stället?",
        answer:
          "Vid kraftig, smärtsam eller ärrbildande akne, eller om du är osäker, ska du kontakta vården. En hudterapeut ställer inte diagnoser.",
      },
    ],
  },
  {
    slug: "ryggbehandling",
    name: "Ryggbehandling",
    group: "kropp",
    short: "Djuprengöring av ryggen – där det är svårt att nå själv.",
    image: imgRum,
    imageAlt: "Behandlingsrummet i Maritas ateljé med behandlingsbänk och turkosa handdukar",
    forWho: [
      "Har orenheter på ryggen",
      "Vill ha en ren och mjuk hud inför sommaren",
      "Vill unna dig en avslappnande behandling",
    ],
    what: "En djuprengörande behandling av ryggen med kroppspeeling, ånga, portömning vid behov och en ryggmask.",
    during: [
      "Ryggen rengörs och får en peeling.",
      "Ånga och portömning om du vill.",
      "Ryggmask och avslutande bodylotion.",
    ],
    takeaway: ["En ren och mjuk rygg", "Råd om hur du sköter huden hemma"],
    recommendation: "Passar som enstaka behandling eller inför sommaren.",
    prices: [
      { label: "Ryggbehandling djuprengöring", duration: "60 min", price: "850 / 950 kr" },
      { label: "Neostrata ryggbehandling", duration: "60 min", price: "850 kr" },
    ],
    priceNote: HEMVARD_NOTE,
    seoDescription:
      "Ryggbehandling och djuprengöring av ryggen i Frillesås. 60 minuter hos hudterapeut Marita, nära Åsa och Kungsbacka.",
    seoIntro:
      "Ryggen är svår att sköta själv. I Maritas ateljé i Frillesås får du en djuprengörande ryggbehandling med peeling, ånga, portömning och mask. Behandlingen passar både kvinnor och män och är skön inför sommaren.",
    questions: [
      { question: "Passar ryggbehandling män?", answer: "Ja, behandlingen passar alla." },
      {
        question: "Vad är skillnaden mellan de två ryggbehandlingarna?",
        answer: "Neostrata-varianten görs med en AHA-PHA-peeling. Marita hjälper dig att välja.",
      },
      { question: "Hur lång tid tar den?", answer: "60 minuter." },
    ],
  },
  {
    slug: "ansiktsbehandling-for-man",
    name: "Ansiktsbehandling för män",
    group: "ansikte",
    short: "Ren hud och avspända axlar. Rakt och enkelt.",
    image: imgAnsiktsmassage,
    imageAlt: "Stämningsbild: ansiktsmassage med mjuka handgrepp",
    forWho: [
      "Vill ha ren och fräsch hud",
      "Är spänd i nacke och axlar",
      "Har fått ett presentkort och undrar vad som väntar",
    ],
    what: "En klassisk ansiktsbehandling anpassad för män, med hudanalys, rengöring, portömning och massage av ansikte, nacke och axlar.",
    during: [
      "Kort hudanalys.",
      "Rengöring och portömning.",
      "Massage av ansikte, nacke och axlar.",
      "Avslutande kräm som passar din hud.",
    ],
    takeaway: ["Ren, fräsch hud", "Enkla råd om hudvård för vardagen"],
    recommendation: "Passar som enstaka behandling eller några gånger per år.",
    prices: [{ label: "Klassisk ansiktsbehandling för män", duration: "60 min", price: "850 kr" }],
    seoDescription:
      "Ansiktsbehandling för män i Frillesås – rengöring, portömning och massage av ansikte, nacke och axlar. 60 minuter, 850 kr.",
    seoIntro:
      "En ansiktsbehandling för män i Frillesås är rakt och enkelt: hudanalys, rengöring, portömning och massage av ansikte, nacke och axlar. Du går därifrån med ren hud och avspända axlar – och några enkla råd för vardagen.",
    questions: [
      {
        question: "Vad ingår?",
        answer:
          "Hudanalys, rengöring, portömning, massage av ansikte, nacke och axlar samt avslutande kräm.",
      },
      { question: "Hur lång tid tar det?", answer: "60 minuter. Priset är 850 kr." },
      {
        question: "Kan jag köpa den som present?",
        answer: "Ja, behandlingen finns som presentkort.",
      },
    ],
  },
  {
    slug: "fransar-bryn-epilering",
    name: "Fransar, bryn & epilering",
    group: "fransar",
    short: "Färgning och formning av fransar och bryn, epilering och make up-råd.",
    image: imgMask,
    imageAlt: "Stämningsbild: hudvård appliceras med pensel",
    forWho: [
      "Vill ha mörkare fransar eller bryn",
      "Vill forma bryn",
      "Vill ta bort hårstrån med epilering",
      "Vill ha råd om make up och färger",
    ],
    what: "Färgning och formning av fransar och bryn, epilering med växelström och personlig make up-rådgivning.",
    during: [
      "Vi pratar om vad du vill uppnå.",
      "Färgning, formning eller epilering.",
      "Råd om hur du sköter resultatet hemma.",
    ],
    takeaway: ["Ett naturligt, välvårdat resultat", "Råd om färger som passar dig"],
    recommendation: "Färgning och formning är billigare tillsammans med en ansiktsbehandling.",
    prices: [
      { label: "Fransfärgning", price: "400 kr (200 kr med ansiktsbehandling)" },
      { label: "Brynfärgning", price: "300 kr (200 kr med ansiktsbehandling)" },
      { label: "Brynformning / vaxning", price: "från 400 kr (200 kr med ansiktsbehandling)" },
      { label: "Epilering", duration: "15 / 30 / 45 min", price: "450 / 550 / 750 kr" },
      { label: "Make up-rådgivning", duration: "45 min", price: "750 kr" },
    ],
    seoDescription:
      "Fransfärgning, brynfärgning, brynformning, epilering och make up-rådgivning i Frillesås, nära Åsa och Kungsbacka.",
    seoIntro:
      "I Maritas ateljé i Frillesås kan du färga och forma fransar och bryn, ta bort hårstrån med epilering och få personliga råd om make up. Kombinerar du med en ansiktsbehandling blir färgning och formning billigare.",
    questions: [
      {
        question: "Vad är epilering?",
        answer: "Hårborttagning med hjälp av växelström. Den bokas i 15, 30 eller 45 minuter.",
      },
      {
        question: "Hur länge håller färgningen?",
        answer: "Det varierar från person till person. Fråga Marita vid besöket.",
      },
      {
        question: "Kan jag kombinera med en ansiktsbehandling?",
        answer: "Ja, då kostar färgning och formning 200 kr.",
      },
    ],
  },

  // ---------------- FÖRNYELSEN ----------------
  {
    slug: "tibetansk-faceliftmassage",
    name: "Tibetansk faceliftmassage",
    group: "kurer",
    short:
      "Ett naturligt lyft utan nålar – fyra behandlingar som arbetar med ansiktets alla muskler.",
    image: imgAnsikteHals,
    imageAlt: "Stämningsbild: massage av ansikte och hals",
    forWho: [
      "Vill ge ansiktet ett naturligt lyft utan injektioner",
      "Känner dig trött och spänd i ansikte, hals och nacke",
      "Vill kombinera hudvård med djup avslappning",
    ],
    what: "En kombination av bindvävsmassage, lymfdränage, akupressur och oljemassage. Under fyra behandlingar som bygger på varandra arbetar Marita med 14 meridianer och ett 90-tal muskler i ansikte, hårbotten, hals och nacke.",
    during: [
      "Ansiktet tvättas och får en peeling.",
      "Massagen följer en bestämd ordning genom ansikte, hårbotten, hals och nacke.",
      "Du får vila en stund efteråt.",
      "I De Lux-varianten inleds varje behandling med koppning.",
    ],
    takeaway: ["En djup känsla av välbefinnande", "En hud som ser fräschare och mer utvilad ut"],
    recommendation:
      "Fyra behandlingar som hör ihop. Vill du känna efter först finns en provbehandling.",
    prices: [
      {
        label: "Tibetansk faceliftmassage – 4 behandlingar",
        duration: "75 min",
        price: "4 200 kr",
      },
      { label: "Provbehandling", duration: "75 min", price: "1 150 kr" },
      { label: "De Lux med koppning – 4 behandlingar", duration: "90 min", price: "5 000 kr" },
      { label: "De Lux provbehandling", duration: "90 min", price: "1 300 kr" },
    ],
    seoDescription:
      "Tibetansk faceliftmassage i Frillesås – ett naturligt lyft utan nålar i fyra behandlingar. Provbehandling 1 150 kr. Nära Kungsbacka och Varberg.",
    seoIntro:
      "Tibetansk faceliftmassage är en lugn och grundlig ansiktsmassage som Marita ger i sin ateljé i Frillesås. Den kombinerar bindvävsmassage, lymfdränage, akupressur och oljemassage i fyra behandlingar som bygger på varandra. Många väljer den för att de vill ta hand om ansiktet utan injektioner.",
    questions: [
      {
        question: "Varför fyra behandlingar?",
        answer:
          "Behandlingarna bygger på varandra och arbetar med olika delar av ansiktet, hårbotten, hals och nacke. Därför säljs de som ett paket.",
      },
      {
        question: "Kan jag prova först?",
        answer: "Ja. En provbehandling kostar 1 150 kr (De Lux 1 300 kr).",
      },
      {
        question: "Vad är skillnaden med De Lux?",
        answer:
          "I De Lux inleds varje behandling med koppning innan den tibetanska faceliftmassagen. Behandlingen tar 90 minuter.",
      },
      {
        question: "Gör det ont?",
        answer:
          "Behandlingen syftar till djupt välbefinnande. Säg alltid till om något känns obehagligt.",
      },
    ],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    group: "kurer",
    short: "Stimulerar hudens egen förnyelse – för linjer, ärr, pigment och slapp hud.",
    image: imgAnsiktsmassage,
    imageAlt: "Stämningsbild: ansiktsbehandling med lugna handgrepp",
    forWho: [
      "Har ärr, till exempel efter akne",
      "Vill minska linjer och få fastare hud",
      "Har pigmentförändringar eller solskadad hud",
      "Har torr eller känslig hud",
    ],
    what: "Microneedling gör mycket små kanaler i huden som sätter igång hudens egen förnyelse av kollagen och elastin. Behandlingen kan kombineras med PRX-PLUS och Infuzion.",
    during: [
      "Vi går igenom din hud och vad du vill uppnå.",
      "Huden rengörs och behandlas med microneedling.",
      "Du får råd om hur du sköter huden de närmaste dagarna.",
    ],
    takeaway: ["En plan för hela kuren", "Råd om eftervård och solskydd"],
    recommendation: "Oftast 3–6 behandlingar för ett tydligt resultat.",
    prices: [
      { label: "Microneedling ansikte", price: "1 700 kr" },
      { label: "Microneedling ansikte, hals och dekolletage", price: "1 900 kr" },
    ],
    seoDescription:
      "Microneedling i Frillesås nära Kungsbacka för linjer, ärr och pigment. Ansikte 1 700 kr. Hudterapeut med egen ateljé sedan 2001.",
    seoIntro:
      "Microneedling hos Marita i Frillesås är för dig som vill se skillnad på linjer, ärr eller pigment utan injektioner. Behandlingen sätter igång hudens egen förnyelse och görs oftast som en kur på 3–6 gånger. Du får en tydlig plan och råd om eftervård.",
    questions: [
      {
        question: "Gör microneedling ont?",
        answer:
          "Hur det känns varierar. Marita går igenom behandlingen med dig innan ni börjar, och du kan alltid säga till.",
      },
      {
        question: "Hur många behandlingar behövs?",
        answer: "Oftast 3–6 behandlingar. Hur många som passar dig bestämmer ni tillsammans.",
      },
      {
        question: "Finns det ett alternativ utan nålar?",
        answer: "Ja. Infuzion och PRX-PLUS är nålfria behandlingar.",
      },
    ],
  },
  {
    slug: "infuzion",
    name: "Infuzion",
    group: "kurer",
    short: "Nålfri behandling som för ner hyaluronsyra och vitaminer i huden.",
    image: imgMask,
    imageAlt: "Stämningsbild: serum appliceras med solfjäderpensel",
    forWho: [
      "Har torr eller trött hud",
      "Vill ha mer lyster inför en fest",
      "Vill ha ett nålfritt alternativ",
    ],
    what: "Infuzion är en nålfri metod där hyaluronsyra och vitaminer förs ner i huden. Den görs ofta som en kur.",
    during: [
      "Huden rengörs.",
      "Hyaluronsyra och vitaminer förs ner i huden utan nålar.",
      "Avslutande vård som passar din hud.",
    ],
    takeaway: ["En återfuktad hud med lyster", "En plan för kuren"],
    recommendation: "En kur på 3–5 behandlingar med 1–2 veckors mellanrum.",
    prices: [{ label: "Infuzion Glow", price: "1 700 kr" }],
    seoDescription:
      "Infuzion – nålfri behandling med hyaluronsyra och vitaminer i Frillesås nära Kungsbacka. 1 700 kr per behandling.",
    seoIntro:
      "Infuzion är en nålfri behandling som Marita erbjuder i Frillesås. Hyaluronsyra och vitaminer förs ner i huden, och många väljer den inför en fest eller när huden känns torr och trött. Den görs oftast som en kur på 3–5 behandlingar.",
    questions: [
      { question: "Är det några nålar?", answer: "Nej, Infuzion är nålfri." },
      {
        question: "Hur ofta gör man behandlingen?",
        answer: "En kur på 3–5 behandlingar med 1–2 veckors mellanrum.",
      },
      {
        question: "Kan den kombineras med microneedling?",
        answer: "Ja, Infuzion kan kombineras med microneedling och PRX-PLUS.",
      },
    ],
  },
  {
    slug: "prx-plus",
    name: "PRX-PLUS",
    group: "kurer",
    short: "Ny generations TCA-peeling – utan nålar.",
    image: imgAnsikteHals,
    imageAlt: "Stämningsbild: behandling av ansikte och hals",
    forWho: [
      "Har pigmentförändringar",
      "Har stora porer, ärr eller bristningar",
      "Vill ha fastare hud och jämnare ton",
      "Har torr hud",
    ],
    what: "PRX-PLUS är en ny generations TCA-peeling som ger huden fasthet, jämnare ton och lyster – utan nålar.",
    during: [
      "Huden rengörs.",
      "PRX-PLUS masseras in i huden.",
      "Avslutande vård och råd om solskydd.",
    ],
    takeaway: ["Fastare, jämnare hud", "En plan för kuren"],
    recommendation: "3–6 behandlingar med 1–2 veckors mellanrum.",
    prices: [{ label: "PRX-PLUS", price: "1 700 kr" }],
    seoDescription:
      "PRX-PLUS – TCA-peeling utan nålar i Frillesås nära Kungsbacka. För pigment, porer och fastare hud. 1 700 kr per behandling.",
    seoIntro:
      "PRX-PLUS är en peeling utan nålar som Marita erbjuder i sin ateljé i Frillesås. Den passar dig som vill få en jämnare hudton, mindre synliga porer och fastare hud. Behandlingen görs som en kur på 3–6 gånger med 1–2 veckors mellanrum.",
    questions: [
      {
        question: "Är PRX-PLUS en vanlig peeling?",
        answer: "Det är en ny generations TCA-peeling som masseras in i huden – utan nålar.",
      },
      {
        question: "Hur många behandlingar behövs?",
        answer: "3–6 behandlingar med 1–2 veckors mellanrum.",
      },
      {
        question: "När på året passar den bäst?",
        answer:
          "Fråga Marita. Peelingar görs ofta under den mörkare delen av året då huden utsätts för mindre sol.",
      },
    ],
  },
  {
    slug: "aha-pha-kur",
    name: "AHA-PHA-kur",
    group: "kurer",
    short: "Sex behandlingar som bygger upp huden på nytt – tillsammans med hemvård.",
    image: imgMask,
    imageAlt: "Stämningsbild: en ansiktsmask penslas på",
    forWho: [
      "Har pigment eller linjer",
      "Har orolig, oren eller rodnande hud",
      "Vill ge huden en nystart",
    ],
    what: "En kur med Neostratas AHA-PHA-peeling i sex behandlingar. Kuren görs alltid tillsammans med Neostratas hemvård, som Marita väljer ut för din hud.",
    during: ["Rengöring och AHA-PHA-peeling.", "Portömning vid behov.", "Mask, serum och dagkräm."],
    takeaway: ["En hemvårdsrutin med Neostrata", "En plan för alla sex behandlingarna"],
    recommendation: "Sex behandlingar med 1–2 veckors mellanrum. I början oftare, sedan glesare.",
    prices: [{ label: "AHA-PHA-kur, 6 behandlingar", duration: "6 × 45 min", price: "4 500 kr" }],
    priceNote: "Kuren görs alltid tillsammans med Neostratas hemvård (tillkommer).",
    seoDescription:
      "AHA-PHA-kur med Neostrata i Frillesås – sex behandlingar för pigment, linjer och orolig hud. 4 500 kr.",
    seoIntro:
      "AHA-PHA-kuren är en kickstart för huden. Hos Marita i Frillesås får du sex behandlingar med Neostratas milda syror tillsammans med en hemvård som passar din hud. Kuren passar dig som har pigment, linjer eller en hud som känns orolig.",
    questions: [
      {
        question: "Varför måste jag använda hemvård?",
        answer:
          "Kuren bygger på att behandlingarna och hemvården samverkar. Marita väljer produkterna efter din hud.",
      },
      {
        question: "Hur ofta kommer jag?",
        answer: "Var 1–2 vecka. I början ofta tätare, sedan med längre mellanrum.",
      },
      {
        question: "Kan kuren passa vid rosacea eller eksem?",
        answer: "Fråga Marita först. Vid en hudsjukdom ska du alltid ha kontakt med vården.",
      },
    ],
  },
  {
    slug: "hudslipning-koppning",
    name: "Hudslipning & koppning",
    group: "kurer",
    short: "Föryngrande och återfuktande – med direkt effekt på linjer och svullnad.",
    image: imgAnsiktsmassage,
    imageAlt: "Stämningsbild: ansiktsbehandling med mjuka handgrepp",
    forWho: [
      "Vill minska linjer och svullnad",
      "Vill ha en mjukare, slätare hud",
      "Passar alla hudtyper",
    ],
    what: "Huden slipas med microdermabrasion så att döda hudceller försvinner, och behandlas sedan med maskinell koppning.",
    during: [
      "Huden rengörs.",
      "Hudslipning med microdermabrasion.",
      "Maskinell koppning.",
      "Avslutande kräm, ögonkräm och foundation om du vill.",
    ],
    takeaway: ["En slätare, mjukare hud", "Råd om hemvård"],
    recommendation: "Passar som enstaka behandling eller några gånger i följd.",
    prices: [{ label: "Hudslipning & koppning", duration: "60 min", price: "850 / 950 kr" }],
    priceNote: HEMVARD_NOTE,
    seoDescription:
      "Hudslipning (microdermabrasion) och koppning i Frillesås – för slätare hud och mindre svullnad. 60 minuter.",
    seoIntro:
      "Hudslipning och koppning är en återfuktande behandling som passar alla hudtyper. I Maritas ateljé i Frillesås slipas huden med microdermabrasion och behandlas sedan med maskinell koppning. Många upplever att huden känns slätare och mindre svullen direkt.",
    questions: [
      {
        question: "Vad är microdermabrasion?",
        answer: "En hudslipning som tar bort döda hudceller på ytan.",
      },
      {
        question: "Vad är koppning?",
        answer:
          "En behandling med sug som här görs maskinellt och används för linjer och svullnad.",
      },
      { question: "Hur lång tid tar den?", answer: "60 minuter." },
    ],
  },

  // ---------------- LUGNET ----------------
  {
    slug: "massage-varma-stenar",
    name: "Massage med varma stenar",
    group: "kropp",
    short: "Helkroppsmassage där värmen får både kropp och sinne att slappna av.",
    image: imgMassageRum,
    imageAlt: "Stämningsbild: massage i ett varmt, ombonat behandlingsrum",
    forWho: [
      "Är spänd i hela kroppen",
      "Fryser lätt och längtar efter värme",
      "Behöver landa efter en stressig period",
    ],
    what: "En helkroppsmassage med varma stenar. Värmen gör att musklerna mjuknar och att både kropp och sinne kan slappna av.",
    during: [
      "Vi pratar kort om hur du mår.",
      "Du ligger bekvämt medan Marita masserar med varma stenar.",
      "Du får vila en stund efteråt.",
    ],
    takeaway: ["En djupt avslappnad kropp", "En stund helt för dig själv"],
    recommendation: "Passar som enstaka behandling eller regelbundet.",
    prices: [{ label: "Massage med varma stenar", duration: "60 min", price: "850 kr" }],
    seoDescription:
      "Massage med varma stenar i Frillesås – helkroppsmassage som får kropp och sinne att slappna av. 60 minuter, 850 kr.",
    seoIntro:
      "Massage med varma stenar är en av de lugnaste behandlingarna i Maritas ateljé i Frillesås. Värmen från stenarna gör att musklerna mjuknar och att du kan släppa taget. Den passar dig som är spänd, fryser lätt eller bara behöver en timme för dig själv.",
    questions: [
      {
        question: "Är stenarna heta?",
        answer: "De är varma och sköna. Säg till om du vill ha det svalare.",
      },
      { question: "Hur lång tid tar massagen?", answer: "60 minuter. Den kostar 850 kr." },
      { question: "Kan jag ge massagen som present?", answer: "Ja, den finns som presentkort." },
    ],
  },
  {
    slug: "massage",
    name: "Massage",
    group: "kropp",
    short: "Avslappningsmassage, rygg och nacke eller fötter och underben.",
    image: imgRum,
    imageAlt: "Behandlingsrummet i Maritas ateljé med behandlingsbänk och turkosa handdukar",
    forWho: [
      "Är spänd i rygg, nacke eller axlar",
      "Har trötta ben och fötter",
      "Vill ha en avslappnande helkroppsmassage",
    ],
    what: "Välj mellan avslappningsmassage för hela kroppen, fokus på rygg, nacke, hårbotten och armar, eller en kortare massage av fötter och underben.",
    during: [
      "Vi pratar om var du är spänd.",
      "Massagen anpassas efter dig.",
      "Du får vila en stund efteråt.",
    ],
    takeaway: ["Mjukare muskler", "Råd om hur du kan ta hand om dig hemma"],
    recommendation: "Välj längd och fokus efter hur du mår.",
    prices: [
      {
        label: "Avslappningsmassage helkropp inkl. ansikte och hårbotten",
        duration: "60 min",
        price: "850 kr",
      },
      { label: "Rygg, nacke, hårbotten och armar", duration: "55 min", price: "850 kr" },
      { label: "Fot- och underbensmassage", duration: "25 min", price: "550 kr" },
    ],
    seoDescription:
      "Massage i Frillesås nära Åsa och Kungsbacka – avslappningsmassage, rygg och nacke eller fot- och underbensmassage.",
    seoIntro:
      "Söker du massage i Frillesås, Åsa eller Kungsbacka? I Maritas ateljé på Målarns Gård väljer du mellan en avslappnande helkroppsmassage, en massage med fokus på rygg och nacke eller en kortare massage av fötter och underben.",
    questions: [
      {
        question: "Vilken massage ska jag välja?",
        answer:
          "Vill du slappna av i hela kroppen, välj avslappningsmassage. Sitter det mesta i rygg och nacke, välj den. Har du kort tid passar fotmassagen.",
      },
      {
        question: "Räknas massage som friskvård?",
        answer:
          "Massage kan räknas som friskvård, men reglerna bestäms av Skatteverket och din arbetsgivare. Fråga din arbetsgivare vad som gäller.",
      },
      { question: "Hur betalar jag?", answer: "Med Swish eller Bankgiro." },
    ],
  },
  {
    slug: "beroring-reiki-healing",
    name: "Beröring, Reiki & healing",
    group: "kropp",
    short: "Beröringsmassage i tystnad, kombinerad med Reiki och healing.",
    image: imgBeroring,
    imageAlt: "Stämningsbild: en behandlare lägger handen lätt på en vilande kunds panna",
    forWho: [
      "Behöver landa och varva ner",
      "Längtar efter lugn beröring",
      "Vill ha en stund helt utan krav",
    ],
    what: "En behandling som kombinerar beröringsmassage med healing och Reiki. Den ges i tystnad och kan upplevas avslappnande, lugnande eller energigivande.",
    during: [
      "Vi pratar kort innan vi börjar.",
      "Behandlingen ges i tystnad.",
      "Du får ligga kvar en stund efteråt.",
    ],
    takeaway: ["En stund av lugn", "Tid att lyssna inåt"],
    recommendation: "Passar som enstaka behandling eller med ett klippkort.",
    prices: [
      { label: "Beröring, Reiki & healing", duration: "under 60 min", price: "950 kr" },
      { label: "Klippkort 5 behandlingar", price: "4 500 kr" },
    ],
    seoDescription:
      "Beröringsmassage, Reiki och healing i Frillesås – en lugn behandling i tystnad. 950 kr, klippkort 5 gånger 4 500 kr.",
    seoIntro:
      "Beröring, Reiki och healing är en stilla behandling i Maritas ateljé i Frillesås. Den ges i tystnad och kombinerar beröringsmassage med Reiki och healing. Många upplever den som avslappnande, lugnande eller energigivande. Behandlingen är ett komplement för välmående – inte en behandling av sjukdom.",
    questions: [
      {
        question: "Vad är Reiki?",
        answer:
          "Reiki är en japansk metod där behandlaren lägger händerna lätt på eller strax ovanför kroppen. Den används för avslappning och välmående.",
      },
      {
        question: "Pratar vi under behandlingen?",
        answer: "Nej, behandlingen ges i tystnad. Ni pratar innan och efter.",
      },
      {
        question: "Kan behandlingen ersätta vård?",
        answer:
          "Nej. Den är ett komplement för välmående. Har du besvär eller sjukdom ska du ha kontakt med vården.",
      },
    ],
  },
  {
    slug: "livsstilscoach",
    name: "Hälsa-, kost- och livsstilscoach",
    group: "halsa",
    short: "När du vill ändra vanor – och få stöd hela vägen.",
    image: imgBeroring,
    imageAlt: "Stämningsbild: en lugn stund på behandlingsbänken",
    forWho: [
      "Vill ändra kost och vanor",
      "Vet vad du borde göra men kommer inte igång",
      "Vill ha stöd och uppföljning",
    ],
    what: "Om något skaver kan man ibland behöva möblera om – utanpå, inuti eller både och. Ni gör en plan tillsammans och följer upp med jämna mellanrum. Verktygen får du, jobbet gör du.",
    during: [
      "Vi pratar om var du är i dag och vart du vill.",
      "Ni gör en plan tillsammans.",
      "Uppföljning med jämna mellanrum.",
    ],
    takeaway: ["En plan som passar din vardag", "Verktyg att arbeta vidare med"],
    recommendation:
      "Det är inte alltid en snabb lösning – men ofta värt det. Uppföljningen anpassas efter dig.",
    prices: [{ label: "Hälsa-, kost- och livsstilscoach", duration: "60 min", price: "850 kr" }],
    seoDescription:
      "Hälsa-, kost- och livsstilscoach i Frillesås – en plan tillsammans och uppföljning med jämna mellanrum. 60 minuter, 850 kr.",
    seoIntro:
      "Coachning i hälsa, kost och livsstil hos Marita i Frillesås passar dig som vill förändra dina vanor men behöver stöd för att komma igång. Ni gör en plan tillsammans och följer upp med jämna mellanrum. Coachningen ersätter inte vård eller behandling av sjukdom.",
    questions: [
      {
        question: "Hur går det till?",
        answer: "Ni pratar om var du är i dag, gör en plan och följer upp med jämna mellanrum.",
      },
      {
        question: "Är det en snabb lösning?",
        answer:
          "Inte alltid. Förändring tar tid – men med en plan och uppföljning blir det lättare.",
      },
      {
        question: "Kan coachningen ersätta vård?",
        answer:
          "Nej. Har du en sjukdom eller behöver medicinsk kostbehandling ska du ha kontakt med vården.",
      },
    ],
  },
];

/**
 * Ordning efter popularitet – de mest bokade först. Styr ordningen överallt på sajten
 * (startsidan, menyn, områdeskorten och sidfoten). Alla behandlingar visas lika stort.
 * ANTAGANDE: ordningen är en gissning tills Marita har bekräftat vilka som bokas mest.
 * Ändra bara ordningen i listan här.
 */
export const POPULARITY_ORDER = [
  "ansiktsbehandlingar",
  "massage-varma-stenar",
  "massage",
  "esse-ekologisk-ansiktsbehandling",
  "hudanalys",
  "tibetansk-faceliftmassage",
  "acnebehandling",
  "neostrata",
  "hudslipning-koppning",
  "microneedling",
  "prx-plus",
  "beroring-reiki-healing",
  "fransar-bryn-epilering",
  "ryggbehandling",
  "ansiktsbehandling-for-man",
  "infuzion",
  "aha-pha-kur",
  "livsstilscoach",
];

const rank = (slug: string) => {
  const i = POPULARITY_ORDER.indexOf(slug);
  return i === -1 ? POPULARITY_ORDER.length : i;
};

export const treatments: Treatment[] = [...allTreatments].sort(
  (a, b) => rank(a.slug) - rank(b.slug),
);

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

/** Lägsta pris för en behandling, för "från"-texten på korten. */
export function fromPrice(t: Treatment) {
  const nums = t.prices
    .map((p) => Number((p.price.match(/[\d\s]+/)?.[0] ?? "").replace(/\s/g, "")))
    .filter((n) => n > 0);
  return nums.length ? `från ${Math.min(...nums).toLocaleString("sv-SE")} kr` : "";
}

/** Hitta behandling efter hudbehov – hur de flesta letar hos en hudterapeut. */
export type Concern = {
  id: string;
  label: string;
  text: string;
  treatments: string[];
};

export const concerns: Concern[] = [
  {
    id: "akne",
    label: "Akne & orenheter",
    text: "Igensatta porer, finnar och oren hud – i tonåren eller som vuxen. Vi börjar med en plan och en hemrutin som håller.",
    treatments: ["acnebehandling", "aha-pha-kur", "neostrata"],
  },
  {
    id: "rodnad",
    label: "Rodnad & känslig hud",
    text: "Synliga blodkärl, rodnad eller en hud som reagerar lätt. Milda produkter och lugna behandlingar.",
    treatments: ["ansiktsbehandlingar", "esse-ekologisk-ansiktsbehandling"],
  },
  {
    id: "pigment",
    label: "Pigment & solskador",
    text: "Ojämn hudton och pigment efter sol. Ofta en kur i flera steg, gärna under den mörka delen av året.",
    treatments: ["prx-plus", "microneedling", "aha-pha-kur"],
  },
  {
    id: "linjer",
    label: "Linjer & fasthet",
    text: "Fler linjer och mindre spänst. Naturliga alternativ utan injektioner – med massage, peeling eller microneedling.",
    treatments: ["tibetansk-faceliftmassage", "microneedling", "hudslipning-koppning"],
  },
  {
    id: "torr",
    label: "Torr & trött hud",
    text: "Huden känns stram, glåmig eller livlös. Fukt, lyster och en hemvård som passar dig.",
    treatments: ["esse-ekologisk-ansiktsbehandling", "infuzion", "ansiktsbehandlingar"],
  },
  {
    id: "stress",
    label: "Stress & spänningar",
    text: "Spänd i nacke och rygg, eller behöver bara landa. Värme, massage och beröring i lugn och ro.",
    treatments: ["massage-varma-stenar", "massage", "beroring-reiki-healing"],
  },
];

/** Vanliga frågor om besöket – samlade för startsida och kontakt. Bara uppgifter från Maritas egen sajt. */
export const generalFaq: { question: string; answer: string }[] = [
  {
    question: "Hur bokar jag?",
    answer:
      "Ring eller skicka ett sms till 0702-38 46 54, eller ring 0340-65 73 88. Är du osäker på vad du ska välja kan du ringa för ett konsultationssamtal.",
  },
  {
    question: "Hur betalar jag?",
    answer: "Med Swish eller Bankgiro. Ateljén tar inte emot kontanter.",
  },
  {
    question: "Vad händer om jag inte kan komma?",
    answer:
      "Uteblivet besök debiteras med behandlingens pris. Hör av dig så snart du vet att du inte kan komma.",
  },
  {
    question: "Var parkerar jag?",
    answer: "Det finns gratis parkering intill ateljén på Målarns Gård, Målarns väg 5 i Frillesås.",
  },
  {
    question: "Varför finns det två priser på vissa behandlingar?",
    answer: "Det lägre priset gäller dig som köper din hudvård hos Marita.",
  },
  {
    question: "Kan jag köpa presentkort?",
    answer:
      "Ja. Ring eller sms:a Marita och berätta vilken behandling eller vilket belopp du vill ge bort.",
  },
  {
    question: "Hur beställer jag hudvård?",
    answer:
      "Skicka ett sms med vad du vill ha – produkterna skickas hem till din brevlåda utan kostnad. Neostrata/Exuviance finns även i webbshoppen.",
  },
];

/** Kundomdömen. Tomt tills Marita har godkända omdömen med namn. Lägg till { quote, name, treatment }. */
export const testimonials: { quote: string; name: string; treatment: string }[] = [];

/** Alla publika sidor. public/sitemap.xml ska innehålla exakt dessa (kontrolleras av testerna). */
export const publicPaths = [
  "/",
  "/om-marita",
  "/kontakt",
  "/behandlingar",
  "/prislista",
  "/presentkort",
  "/hemvard",
  ...treatments.map((t) => `/behandlingar/${t.slug}`),
];

/** De mest populära behandlingarna (lyfts på startsidan). */
export const popularTreatments = treatments.slice(0, 6);

/** Behandlingar per kategori, i popularitetsordning. */
export const byGroup = (g: Group) => treatments.filter((t) => t.group === g);

/** Längd att visa på kort (första angivna). */
export function durationOf(t: Treatment) {
  return t.prices.find((p) => p.duration)?.duration ?? "";
}
