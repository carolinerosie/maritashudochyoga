# Maritas Hud- och Yogaateljé – arbetsregler

- Sajtens innehåll (behandlingar, priser, vägvisare, omdömen, kontakt, BOOKING_URL) ligger i src/content/site.ts. Sidorna läser därifrån så att texter ändras på ett ställe.
- Färger och typsnitt ligger som tokens i src/styles.css (papper, tång, lera = Huden, bärnsten = Förnyelsen, havsdimma = Lugnet). Alla kombinationer ska klara WCAG AA.
- Alla behandlingssidor använder samma mall: components/site/TreatmentArticle.tsx.
- Hitta aldrig på priser, utbildningar, resultat, omdömen eller kontaktuppgifter. Inga löften om att bota eller behandla sjukdom (patientsäkerhetslagen 5 kap, marknadsföringslagen). Stämningsbilder får inte påstås vara från ateljén.
- BOOKING_URL är tillfällig ("#boka") tills Marita valt bokningssätt.

## Arbetsflöde (Netlify)
- `main` är produktionsgrenen: varje push dit publiceras live och kostar Netlify-krediter. Pusha aldrig dit utan Carolines uttryckliga godkännande ("ja, publicera").
- Allt arbete sker på grenen `forslag`. En öppen pull request `forslag` → `main` ger en förhandsgranskning (Deploy Preview) som uppdateras vid varje push. Skicka länken till Caroline efter varje ändring.
- Publicering = merge av pull requesten, en gång när allt är godkänt. Samla flera ändringar i en publicering.
- Ändra aldrig DNS-poster för e-post (MX, SPF, DKIM, DMARC). Bara @ och www rörs vid lansering.
- Domän och kontaktuppgifter ligger i src/content/site.ts (SITE_URL, contact). public/sitemap.xml och public/robots.txt ska följa SITE_URL (testerna kontrollerar).
