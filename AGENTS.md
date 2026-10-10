# Maritas Hud- och Yogaateljé – arbetsregler

- Sajtens innehåll (behandlingar, kategorier, hudbehov, priser, vanliga frågor, kontakt, BOOKING_URL, POPULARITY_ORDER) ligger i src/content/site.ts. Sidorna läser därifrån så att texter ändras på ett ställe.
- Grafisk profil i src/styles.css – unik för Maritas, hämtad från Målarns Gård: kritvit, knutblått (primär), tegel (etiketter), syren, panel. Typsnitt Marcellus + Jost (självhostade via @fontsource). Rundade former, valvformade bilder (utility `arch`), panelrandning (`panel-stripes`). Alla kombinationer klarar WCAG AA.
- Struktur enligt best practice för hudterapeut med många behandlingar: kategorier (/behandlingar), sök efter hudbehov, komplett prislista (/prislista), populära behandlingar först, pris och boka högst upp på varje behandlingssida (components/site/TreatmentArticle.tsx).
- Hitta aldrig på priser, utbildningar, resultat, omdömen eller kontaktuppgifter. Inga löften om att bota eller behandla sjukdom (patientsäkerhetslagen 5 kap, marknadsföringslagen). Stämningsbilder får inte påstås vara från ateljén.
- BOOKING_URL är tillfällig ("#boka") tills Marita valt bokningssätt.

## Arbetsflöde (Netlify)
- Netlify-projekt: maritashudoyoga. `main` är produktionsgrenen: varje merge dit publiceras live. Pusha aldrig till main utan Carolines uttryckliga godkännande ("ja, publicera").
- Allt arbete sker på grenen `forslag`. En öppen pull request `forslag` → `main` ger en förhandsgranskning (Deploy Preview) som uppdateras vid varje push. Skicka länken till Caroline efter varje ändring.
- Ändra aldrig DNS-poster för e-post (MX, SPF, DKIM, DMARC). Bara @ och www rörs vid lansering.
- Domän och kontaktuppgifter ligger i src/content/site.ts (SITE_URL, contact). public/sitemap.xml och public/robots.txt ska följa SITE_URL (testerna kontrollerar).
