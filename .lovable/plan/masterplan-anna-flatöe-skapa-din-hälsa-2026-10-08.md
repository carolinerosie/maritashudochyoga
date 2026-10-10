# Masterplan – Anna Flatöe, Skapa din hälsa

Visuell prototyp, all text på svenska. Statisk sajt, bokning via Bokadirekt (ny flik). Ingen backend.

## 1. Strategisk kärna
- Utgå från **besväret, inte metoden**. Besökaren vet hur hon mår, inte vad hon behöver.
- Helhetskoncept: **Kroppen** (käkled, lymf, postural), **Sinnet** (Theta Healing, coaching), **Bron** (kinesiologi).
- Visuell metafor: **"Från spänning till släpp"** – en återkommande tunn, handritad linje som börjar hoprullad/spänd och blir en lugn våg. Linjen används i hero, i helhetsgrafiken och som avdelare. Det blir signaturelementet.
- Målgrupp: kvinna 30–60, Göteborg/Mölndal, har provat vården och massage utan att bli av med problemet. Rädsla: "flummigt". Svaret: Annas egen historia, tydlig beskrivning av vad som händer, riktiga omdömen, lugn ansvarsnotis.

## 2. Art direction
- **Ton:** varm, jordnära, kunnig, skandinavisk, redaktionell. "Andas ut."
- **Färg (oklch-tokens):** benvitt/linne som bas, sand som sekundär yta, mjuk mörk brun-grafit för text. Accenter: **lera/terrakotta** (Kroppen), **djup aubergine** (Sinnet), **mossgrön** (Bron, även huvudknapp).
- **Typografi:** Fraunces eller Cormorant Garamond (mjuk serif, rubriker, stora storlekar, kursiv för betoning) + Hanken Grotesk eller Instrument Sans (brödtext). Små versaler med spärrning för etiketter.
- **Textur:** subtil pappers-/linnebrus i bakgrunden.
- **Layout:** asymmetrisk, generös luft, rytm mellan lugna och täta sektioner, inte "text vänster–bild höger" överallt, inga rundade kortrader, inga piller, inga ikonpaket, ingen gradient eller glas.
- **Rörelse:** långsam fade/reveal vid scroll, mjuk bildzoom, lugna hover-lägen. Ingen studs. Respekterar "reducerad rörelse".

## 3. Startsida (8 sektioner)
1. **Hero** – stort porträtt av Anna (asymmetriskt), rubrik i stil med "Kroppen säger ifrån. Jag hjälper dig att lyssna." Huvudknapp: Boka din första behandling. Sekundärt: Hitta rätt behandling för dig (scrollar till vägvisaren).
2. **Känner du igen dig?** – redaktionell lista med besvär i hennes egna ord (biter ihop på natten, huvudvärk som sitter i, kroppen känns tung, "ingen vet vad man ska göra").
3. **Var sitter det?** (signaturfunktion) – lugnt samtal: rubriken "Hur mår du just nu?" och 7 val. Valet visar en varm förklaring och rekommenderad behandling med länk och bokningsknapp. På mobil: lista som fälls ut. Ingen anatomisk figur.
4. **Helheten** – signaturgrafik: tre lager (Kroppen, Bron, Sinnet) som binds ihop av linjen, med budskapet "Det är inte sex olika tjänster. Det är ett sätt att se på människan."
5. **Behandlingarna** – sex metoder med variation: Käkled stort med bild, övriga i ett redaktionellt register grupperat efter Kropp/Sinne/Bro med accentfärg.
6. **Så går det till** – fyra steg: formulär innan, samtal om symtom och mål, behandling, egenvård med hem.
7. **Annas historia** – citatdriven berättelse (utbrändhet, bäckenskada, eksem, ryggvärk), "ta tillbaka din egen kraft", länk till Om Anna.
8. **Röster + plats och bokning** – Susanne H:s riktiga omdöme stort, platshållare för fler omdömen och utbildningar, Mölndal nära Göteborg, Bokadirekt-knapp, ansvarsnotis.

Fast, diskret bokningsknapp längst ner på mobil. Navigering med logotyp i text och Boka tid.

## 4. Undersidor
- **/behandlingar/kakledsbehandling** – full mall: För dig som…, Enkelt förklarat, Under behandlingen, Det här får du med dig, Rekommendation (minst 4–5), Boka käkledsbehandling, omdöme, ansvarsnotis, "andra behandlingar".
- **/behandlingar/$slug** – samma mall för övriga fem, med texter från nuvarande sajt. Postural terapi och Coaching får tydlig platshållartext ("Text från Anna kommer").
- **/om-anna** – längre berättelse, porträtt, grundtanke, platshållare för utbildningar.
- **/kontakt** – Mölndal, karta-platshållare, Bokadirekt, "Hör av dig om du är osäker" (mejl/telefon som tydliga platshållare tills riktiga uppgifter finns).

## 5. Innehållsregler
- Hitta inte på omdömen, utbildningar, statistik eller priser. Platshållare är tydligt markerade.
- Ansvarsfulla formuleringar ("många upplever…", "kan hjälpa dig att…"). Lovar aldrig bot eller diagnos. Lugn notis: komplement till vården, inte ersättning.
- Undvik tomma ord som "holistisk resa" och "transformation".

## 6. Bilder
- Väntar på dina bilder. Fram till dess: stilrena platshållare med beskrivning av motivet (t.ex. "Porträtt av Anna, mjukt sidoljus" eller "Närbild: händer vid käke"). Inga stockbilder av stenar eller spa.
- När bilderna kommer: urval efter värme, händer och beröring, äkthet och ljus. Beskärning görs redaktionellt.

## 7. Självvalidering under bygget
Efter varje större steg granskas skärmdumpar (dator och mobil) mot kvalitetskontrollen: första intryck, igenkänning, trygghet, helhet, Annas närvaro, bokning på mobil, malltest och spatest. Allt som ser ut som en mall eller en spabroschyr görs om.

## Tekniska detaljer
- TanStack-rutter: `index`, `om-anna`, `kontakt`, `behandlingar.$slug` (med 404 för okänd slug). Unik head()-metadata per rutt.
- Innehåll i en statisk datafil (behandlingar, besvär till behandling-mappning för vägvisaren, omdömen).
- Designtokens i `src/styles.css` (oklch), typsnitt via `<link>` i root, IntersectionObserver plus CSS för reveal.
- Bokadirekt-URL som en konstant, `target="_blank" rel="noopener"`.
- Små tester för vägvisarens mappning (t.ex. att "spänd käke" leder till käkledsbehandling).
- Byggordning: tokens och typografi → layout/nav/mobilknapp → startsidans sektioner → behandlingsmall → Om/Kontakt → genomgång med skärmdumpar → bilder byts in när de kommer.
