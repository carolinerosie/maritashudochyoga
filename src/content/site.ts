import kakled from "@/assets/kakled.jpg";
import kinesiologi from "@/assets/kinesiologi.jpg";
import lymfmassage from "@/assets/lymfmassage-rygg.jpg";
import healingHeader from "@/assets/healing-header.jpg";
import postural from "@/assets/postural.jpg";
import boka from "@/assets/boka.jpg";

export const BOOKING_URL = "https://www.bokadirekt.se/places/anna-flatoe-skapa-din-halsa-42319";

/** Sajtens publika adress. Byts här om domänen ändras – canonical, delningslänkar och sitemap följer med. */
export const SITE_URL = "https://www.skapadinhalsa.com";
export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Delningsbild (1200 × 630) för Facebook, LinkedIn m.fl. Ligger i public/. */
export const SHARE_IMAGE = absoluteUrl("/og-image.jpg");

/** Publicerade kontaktuppgifter (annaflatoe.se och Bokadirekt). */
export const contact = {
  businessName: "Anna Flatöe – Skapa din hälsa",
  phone: "076-843 96 41",
  phoneHref: "tel:+46768439641",
  email: "info@annaflatoe.se",
  locality: "Mölndal",
  venue: "Dalens Hälsoklinik",
  street: "Toltorpsgatan 50A",
  postalCode: "431 69",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dalens+H%C3%A4lsoklinik&query_place_id=ChIJ67sD1zfzT0YRflBXVxIaFQo",
  geo: { latitude: 57.6730536, longitude: 11.9789767 },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=57.6730536,11.9789767&z=16&t=m&hl=sv&output=embed",
};

/** Sociala medier. Lämna en adress tom ("") så visas inte ikonen. */
export const social = {
  instagram: "https://www.instagram.com/skapadinhalsa",
  instagramHandle: "@skapadinhalsa",
  tiktok: "https://www.tiktok.com/@skapadinhalsa",
  facebook: "",
};

/**
 * De fyra senaste Instagram-inläggen hämtas från ett Behold-flöde (behold.so, gratisplan).
 * Klistra in flödets adress, t.ex. "https://feeds.behold.so/abc123". Tom = visa Annas egna bilder med länk till Instagram.
 */
export const INSTAGRAM_FEED_URL = "https://feeds.behold.so/aIk793DPS2W670w15yrn";

/** Strukturerad data för verksamheten (Google). */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#verksamhet`,
  name: contact.businessName,
  url: absoluteUrl("/"),
  image: SHARE_IMAGE,
  telephone: "+46768439641",
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    postalCode: contact.postalCode,
    addressLocality: contact.locality,
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", ...contact.geo },
  hasMap: contact.mapsUrl,
  areaServed: ["Mölndal", "Göteborg"],
  founder: { "@type": "Person", name: "Anna Flatöe" },
  sameAs: [BOOKING_URL, "https://www.instagram.com/skapadinhalsa", "https://www.tiktok.com/@skapadinhalsa"],
};

export const trustProof = {
  rating: "4,9 av 5",
  reviews: "232 betyg på Bokadirekt",
  location: "Mölndal · nära Göteborg",
};

export type Group = "kropp" | "sinne" | "bro";

export const groups: Record<Group, { label: string; lead: string; text: string; color: string }> = {
  kropp: {
    label: "Kroppen",
    lead: "Det som sitter fysiskt",
    text: "Spända muskler, svullnad och en hållning som har fått kompensera länge.",
    color: "text-clay",
  },
  bro: {
    label: "Bron",
    lead: "Det som kopplar ihop",
    text: "Kroppen visar vad den behöver först – och i vilken ordning.",
    color: "text-moss",
  },
  sinne: {
    label: "Sinnet",
    lead: "Det som sitter i mönster",
    text: "Stress, rädslor och gamla mönster som kroppen bär på utan att vi märker det.",
    color: "text-aubergine",
  },
};

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
  seoDescription: string;
  seoIntro: string;
  questions: { question: string; answer: string }[];
  seoTitle?: string;
  heading?: string;
  localHeading?: string;
  placeholder?: boolean;
};

export const treatments: Treatment[] = [
  {
    slug: "kakledsbehandling",
    name: "Käkledsbehandling",
    group: "kropp",
    short: "För dig som biter ihop, gnisslar tänder eller har huvudvärk som sitter i.",
    image: kakled,
    imageAlt: "Anna behandlar en klients käke och nacke i lugnt ljus",
    forWho: [
      "Gnisslar tänder eller biter ihop på natten",
      "Har spänningshuvudvärk",
      "Pressar tungan mot tänderna",
      "Är spänd i nacken",
      "Har svårt att öppna munnen ordentligt",
      "Har tinnitus",
    ],
    what:
      "Käken är en av kroppens mest arbetande muskelgrupper – och en av de första platserna där stress sätter sig. I behandlingen arbetar jag med hela käkmuskulaturen, även musklerna på insidan av munnen, tillsammans med hals och nacke.",
    during: [
      "Vi börjar med ett samtal om hur du mår och vad du har märkt.",
      "Musklerna i käke, hals och nacke stretchas, töjs och masseras – även inifrån munnen.",
      "Jag hjälper dig att släppa den stress som sitter kvar i kroppen.",
      "Du får egenvårdsövningar att ta med dig hem.",
    ],
    takeaway: [
      "Övningar och råd som hjälper dig att vara mjukare i käken mellan besöken",
      "En bättre förståelse för var din spänning kommer ifrån",
    ],
    recommendation: "Minst 4–5 behandlingar för ett mer hållbart resultat.",
    seoDescription: "Käkledsbehandling i Mölndal nära Göteborg för dig som biter ihop, gnisslar tänder eller är spänd i käke, nacke och huvud.",
    seoIntro:
      "Käkledsbehandling i Mölndal passar dig som känner att käken aldrig riktigt vilar. Spänningar kan märkas som tandpressning, stelhet, ömhet eller återkommande huvudvärk. Anna arbetar med musklerna runt käke, hals och nacke, även på insidan av munnen, och ger dig enkla råd för tiden mellan besöken.",
    questions: [
      { question: "Vad är en käkledsbehandling?", answer: "Det är en manuell behandling av musklerna kring käke, hals och nacke. Hos Anna ingår även arbete med käkmuskler på insidan av munnen." },
      { question: "Kan behandlingen passa vid tandpressning?", answer: "Behandlingen vänder sig bland annat till dig som biter ihop eller gnisslar tänder och vill få hjälp med spända muskler runt käken." },
      { question: "Var finns behandlingen?", answer: "Du bokar käkledsbehandling hos Anna Flatöe i Mölndal, nära Göteborg." },
    ],
  },
  {
    slug: "kinesiologi",
    name: "Kinesiologi",
    group: "bro",
    short: "När du inte vet var du ska börja. Kroppen visar vad den behöver först.",
    image: kinesiologi,
    imageAlt: "Anna gör muskeltestning med en klient på behandlingsbänken",
    forWho: [
      "Har haft besvär länge utan att hitta orsaken",
      "Känner dig stressad eller utmattad",
      "Upplever att kroppen säger ifrån",
      "Vill förstå vad som påverkar dig – fysiskt och mentalt",
    ],
    what:
      "Kinesiologi är en helhetsbaserad metod där jag använder manuell muskeltestning för att se vad kroppen behöver och i vilken ordning. Innan första besöket får du ett formulär om dina symtom och mål.",
    during: [
      "Vi går igenom formuläret och pratar om dina mål.",
      "Med muskeltestning lyssnar vi in vad kroppen behöver just nu.",
      "Behandlingen kan innefatta mjuk strukturell behandling, triggerpunkter, mental behandling, balansering av energisystem och näringskemisk behandling.",
      "Ha gärna bekväma kläder.",
    ],
    takeaway: [
      "En tydligare bild av vad som påverkar dig",
      "Råd kring egenvård och eventuellt kosttillskott",
      "En startpunkt när du inte vet var du ska börja",
    ],
    recommendation: "Antal behandlingar anpassas efter dig och dina mål.",
    seoDescription: "Kinesiologi i Mölndal nära Göteborg med manuell muskeltestning för dig som vill förstå kroppens signaler och hitta en startpunkt.",
    seoIntro:
      "Kinesiologi i Mölndal är ett alternativ för dig som har flera besvär, känner att kroppen säger ifrån eller inte vet var du ska börja. Anna använder manuell muskeltestning som en del av behandlingen och utgår från dina symtom, din vardag och vad du vill få hjälp med.",
    questions: [
      { question: "Vad är kinesiologi?", answer: "Kinesiologi är en kompletterande metod där manuell muskeltestning används för att undersöka vad som ska prioriteras i behandlingen." },
      { question: "Hur går ett första besök till?", answer: "Inför besöket fyller du i ett formulär. På plats går ni igenom hur du mår och vad du vill ha hjälp med innan muskeltestningen börjar." },
      { question: "Var kan jag boka kinesiologi nära Göteborg?", answer: "Anna tar emot för kinesiologi i Mölndal, nära Göteborg. Tider bokas via Bokadirekt." },
    ],
  },
  {
    slug: "lymfmassage",
    name: "Lymfmassage",
    group: "kropp",
    short: "När kroppen känns tung, svullen och trött.",
    image: lymfmassage,
    imageAlt: "Anna ger lymfmassage med lugna, mjuka handgrepp över ryggen",
    forWho: [
      "Känner dig tung eller svullen",
      "Är stel och trött i kroppen",
      "Vill ge kroppen hjälp att återhämta sig",
    ],
    what:
      "Mjuka grepp i lymfsystemets riktning som många upplever ger en känsla av lätthet i kroppen. Behandlingen är djupt avslappnande.",
    during: [
      "Vi pratar kort om hur du mår.",
      "Du ligger bekvämt medan jag arbetar med mjuka, rytmiska grepp.",
      "Drick gärna mycket vatten före och efter behandlingen.",
    ],
    takeaway: ["Många upplever att kroppen känns lättare efteråt", "En stund av djup avslappning"],
    recommendation: "3–4 behandlingar med ungefär en veckas mellanrum.",
    seoTitle: "Lymfmassage Göteborg & Mölndal | Anna Flatöe – Skapa din hälsa",
    heading: "Lymfmassage i Göteborg & Mölndal",
    localHeading: "Lymfmassage i Göteborg – på mottagningen i Mölndal",
    seoDescription: "Lymfmassage i Göteborg och Mölndal. Mjuka, rytmiska grepp för dig som känner dig tung, svullen eller trött. Boka lymfmassage hos Anna Flatöe via Bokadirekt.",
    seoIntro:
      "Söker du lymfmassage i Göteborg? Mottagningen ligger i Mölndal, inom Göteborgs tätort och nära för dig som bor i stan eller söderut. Lymfmassage är en lugn behandling med mjuka, rytmiska grepp i lymfsystemets riktning. Den passar dig som upplever kroppen som tung, svullen, stel eller trött och vill ge dig en varsam stund för återhämtning.",
    questions: [
      { question: "Vad är lymfmassage?", answer: "Lymfmassage är en mjuk, manuell behandling där lätta och rytmiska grepp följer lymfsystemets riktning. Till skillnad från en klassisk massage arbetar den med lätt tryck på ytan. Många upplever den som djupt avslappnande och att kroppen känns lättare efteråt." },
      { question: "Vem passar lymfmassage för?", answer: "Lymfmassage passar dig som känner dig tung, svullen, stel eller trött i kroppen och vill ha en lugn, varsam behandling. Har du nya, kraftiga eller oklara besvär ska du alltid kontakta vården först." },
      { question: "Hur känns behandlingen?", answer: "Greppen är mjuka och lugna. Du ligger bekvämt medan Anna arbetar metodiskt med kroppen. Drick gärna mycket vatten före och efter." },
      { question: "Hur många behandlingar behöver jag?", answer: "Ofta rekommenderas 3–4 behandlingar med ungefär en veckas mellanrum. Upplägget anpassas efter dig." },
      { question: "Var finns lymfmassage i Göteborg och Mölndal?", answer: "Anna tar emot på sin mottagning i Mölndal, inom Göteborgs tätort. Du ser lediga tider och bokar direkt på Bokadirekt." },
    ],
  },
  {
    slug: "postural-terapi",
    name: "Postural terapi",
    group: "kropp",
    short: "För återkommande värk, gamla skador och en hållning som kompenserar.",
    image: postural,
    imageAlt: "Anna guidar en klients arm och axel i en rörelse",
    forWho: [
      "Har återkommande värk",
      "Bär på gamla skador",
      "Upplever att hållningen påverkar hur du mår",
    ],
    what: "Postural terapi utgår från hur kroppen håller, belastar och kompenserar i vardagen. Med individuellt anpassade rörelser arbetar vi med hållning, rörlighet och kroppens egna förutsättningar.",
    during: [
      "Vi pratar om din värk, tidigare skador och vad du vill kunna göra lättare.",
      "Anna tittar på hur du står och rör dig för att se var kroppen kompenserar.",
      "Du får prova lugna, anpassade rörelser med fokus på kontakt och funktion.",
    ],
    takeaway: ["En tydligare förståelse för dina rörelsemönster", "Individuellt anpassade övningar att arbeta vidare med"],
    recommendation: "Upplägget anpassas efter din kropp, dina mål och hur besvären utvecklas.",
    seoDescription: "Postural terapi och postural träning i Mölndal nära Göteborg för återkommande värk, gamla skador och hållningsrelaterade besvär.",
    seoIntro:
      "Postural terapi i Mölndal passar dig som söker hjälp för återkommande värk, gamla skador eller en hållning som känns ansträngd. Behandlingen ser till hela kroppens rörelsemönster och kombineras med postural träning som anpassas efter dig.",
    questions: [
      { question: "Vad är postural terapi?", answer: "Postural terapi fokuserar på hur kroppens hållning och rörelsemönster samspelar. Målet är att förstå var kroppen kompenserar och hitta övningar som passar individen." },
      { question: "Vad är skillnaden mellan postural terapi och postural träning?", answer: "Terapin omfattar bedömning och vägledning, medan den posturala träningen består av rörelser och övningar anpassade efter dina behov." },
      { question: "Var kan jag få postural träning nära Göteborg?", answer: "Anna erbjuder postural terapi och träning i Mölndal, nära Göteborg." },
    ],
  },
  {
    slug: "theta-healing",
    name: "Theta Healing",
    group: "sinne",
    short: "För mönster, rädslor, sorg och relationer som sitter djupt.",
    image: healingHeader,
    imageAlt: "Anna håller en hand vid en avslappnad klients huvud",
    forWho: [
      "Har fastnat i negativa mönster",
      "Bär på rädslor, ilska eller sorg",
      "Vill arbeta med eget värde, relationer eller familj",
    ],
    what:
      "Theta Healing arbetar med det undermedvetna i theta-tillståndet – mellan dröm och vaket. Metoden används för personlig utveckling och kombineras gärna med coaching.",
    during: [
      "Vi pratar om vad du vill förändra.",
      "Du ligger eller sitter bekvämt medan vi arbetar i ett djupt avslappnat tillstånd.",
      "Vi avslutar med ett samtal om vad som har kommit upp.",
    ],
    takeaway: ["Ökad medvetenhet om dina mönster", "Ett lugnare förhållningssätt till det som tynger"],
    recommendation: "Antal sessioner anpassas efter dig.",
    seoDescription: "Theta Healing i Mölndal nära Göteborg för personlig utveckling, återkommande tankemönster, rädslor, sorg och relationer.",
    seoIntro:
      "Theta Healing i Mölndal är en metod för personlig utveckling där samtal kombineras med ett djupt avslappnat tillstånd. Hos Anna får du utforska tankemönster, känslor och teman som du vill förstå eller förhålla dig till på ett nytt sätt.",
    questions: [
      { question: "Vad är Theta Healing?", answer: "Theta Healing är en metod för personlig utveckling som arbetar med samtal, uppmärksamhet och ett avslappnat tillstånd mellan vakenhet och vila." },
      { question: "Vad kan en session handla om?", answer: "En session kan kretsa kring mönster, rädslor, sorg, relationer eller andra teman som du själv vill utforska." },
      { question: "Var finns Theta Healing nära Göteborg?", answer: "Anna tar emot för Theta Healing i Mölndal, nära Göteborg." },
    ],
  },
  {
    slug: "coaching",
    name: "Coaching",
    group: "sinne",
    short: "När du vill ta tillbaka din egen kraft och riktning.",
    image: boka,
    imageAlt: "Anna och en klient samtalar vid ett bord",
    forWho: ["Vill skapa förändring i vardagen", "Vill hitta tillbaka till din egen kraft"],
    what: "Coaching ger dig tid att sortera det som skaver, formulera vad du vill förändra och hitta steg som fungerar i din vardag. Samtalen utgår från din situation och den riktning du vill ta.",
    during: [
      "Vi ringar in vad du vill ha hjälp med och vad som känns viktigast just nu.",
      "Du får frågor och perspektiv som hjälper dig att se mönster, val och möjligheter tydligare.",
      "Vi avslutar med ett konkret fokus att ta med in i vardagen.",
    ],
    takeaway: ["Större klarhet i vad du behöver och vill", "Ett konkret nästa steg som är förankrat i din vardag"],
    recommendation: "Upplägget formas efter din situation, dina mål och det stöd du önskar.",
    seoDescription: "Coaching i Mölndal nära Göteborg för dig som vill sortera tankar, förändra återkommande mönster och hitta en tydligare riktning.",
    seoIntro:
      "Coaching i Mölndal passar dig som står inför en förändring, känner dig fast eller vill hitta tillbaka till din egen riktning. I samtalen hjälper Anna dig att sortera tankar, se återkommande mönster och formulera steg som känns möjliga att genomföra.",
    questions: [
      { question: "Vad kan coaching hjälpa mig att arbeta med?", answer: "Coaching kan ge struktur när du vill förändra något, fatta beslut, förstå återkommande mönster eller hitta en tydligare riktning framåt." },
      { question: "Hur går ett coachingsamtal till?", answer: "Samtalet utgår från din situation. Anna ställer frågor, hjälper dig att sortera och avslutar tillsammans med dig i ett konkret nästa steg." },
      { question: "Var kan jag boka coaching nära Göteborg?", answer: "Anna erbjuder coaching i Mölndal, nära Göteborg. Bokning sker via Bokadirekt." },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export type GuideOption = {
  id: string;
  feeling: string;
  reply: string;
  treatments: string[];
};

export const guideOptions: GuideOption[] = [
  {
    id: "kake",
    feeling: "Jag biter ihop, gnisslar tänder eller är spänd i käken",
    reply:
      "Käken är ofta där stressen landar först – inte minst på natten. Många som kommer till mig har burit på det i flera år.",
    treatments: ["kakledsbehandling"],
  },
  {
    id: "huvud",
    feeling: "Jag har huvudvärk och en nacke som aldrig släpper",
    reply:
      "Spänningshuvudvärk hänger ofta ihop med käke och nacke. Vi börjar där det sitter – och tittar på vad som ligger bakom.",
    treatments: ["kakledsbehandling", "kinesiologi"],
  },
  {
    id: "tung",
    feeling: "Kroppen känns tung, svullen och stel",
    reply: "När kroppen känns tung kan den behöva hjälp att släppa vätska och spänning. Det är ofta djupt avslappnande.",
    treatments: ["lymfmassage"],
  },
  {
    id: "vark",
    feeling: "Jag har återkommande värk, gamla skador eller ont av hållningen",
    reply:
      "Värk som kommer tillbaka handlar sällan bara om stället där det gör ont. Vi tittar på hur hela kroppen bär dig.",
    treatments: ["postural-terapi", "kinesiologi"],
  },
  {
    id: "stress",
    feeling: "Jag är stressad, utmattad – kroppen säger ifrån",
    reply:
      "Jag har själv varit där. Med kinesiologi lyssnar vi in vad kroppen behöver först, så att du inte behöver gissa.",
    treatments: ["kinesiologi"],
  },
  {
    id: "monster",
    feeling: "Jag har fastnat i mönster, rädslor, sorg eller relationer",
    reply: "Det som sitter i sinnet sätter sig ofta i kroppen också. Här arbetar vi med det som ligger under ytan.",
    treatments: ["theta-healing", "coaching"],
  },
  {
    id: "vetinte",
    feeling: "Jag vet inte riktigt – jag vill bara må bättre",
    reply:
      "Det räcker gott som startpunkt. Kinesiologi är ett bra första steg, eller hör av dig så pratar vi först.",
    treatments: ["kinesiologi"],
  },
];

export const testimonials = [
  {
    quote:
      "Jag provade käkledsbehandling för första gången i mitt liv. Wow, vilken omedelbar skillnad det blev! En sån lättnad! Mina varmaste rekommendationer att boka in Anna! Hon är fantastisk!",
    name: "Susanne H",
    treatment: "Käkledsbehandling",
  },
];

export type ServicePageContent = {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string;
  cta: string;
  sections: { heading: string; paragraphs: string[] }[];
};

/** Färdig, godkänd copy för tjänstesidor med egen URL. */
export const servicePages: Record<"lymfmassage", ServicePageContent> = {
  lymfmassage: {
    seoTitle: "Lymfmassage Göteborg & Mölndal | Anna Flatöe – Skapa din hälsa",
    metaDescription:
      "Boka lymfmassage i Mölndal, nära Göteborg. Läs om behandlingen, hur den går till och vad du kan förvänta dig hos Anna Flatöe – Skapa din hälsa.",
    h1: "Lymfmassage i Göteborg – Mölndal",
    lead: "Ge dig själv en stund att landa och ta hand om kroppen.",
    intro:
      "Lymfmassage är en mjuk och varsam behandlingsform med lugna, rytmiska rörelser som syftar till att stimulera lymfflödet. Hos Anna Flatöe – Skapa din hälsa i Mölndal, strax söder om centrala Göteborg, får du möjlighet att koppla av och njuta av en stunds återhämtning.",
    cta: "Boka lymfmassage",
    sections: [
      {
        heading: "Vad är lymfmassage?",
        paragraphs: [
          "Lymfmassage är en skonsam massageform som arbetar med mjuka, rytmiska rörelser för att stödja lymfvätskans transport genom kroppens lymfsystem.",
          "Lymfsystemet är en viktig del av kroppens cirkulation och immunförsvar. Det hjälper till att transportera överskottsvätska från vävnaderna tillbaka till blodbanan och spelar en viktig roll i kroppens normala funktioner.",
          "Till skillnad från klassisk massage, där man ofta arbetar djupare med musklerna, utförs manuell lymfdränage vanligtvis med ett lätt och varsamt tryck.",
          "För många är lymfmassage framför allt en stund för avkoppling och återhämtning.",
        ],
      },
    ],
  },
};

/** Alla publika sidor. public/sitemap.xml ska innehålla exakt dessa (kontrolleras av testerna). */
export const publicPaths = [
  "/",
  "/om-anna",
  "/kontakt",
  ...treatments.map((t) => (t.slug === "lymfmassage" ? "/lymfmassage" : `/behandlingar/${t.slug}`)),
];
