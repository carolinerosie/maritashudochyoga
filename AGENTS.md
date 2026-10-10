<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site content (treatments, guide mapping, testimonials, booking URL) lives in src/content/site.ts; pages read from it so copy changes stay in one place.
- Public pages use the centralized semantic identity tokens and shared site primitives so visual changes remain coherent.
- The approved brand logo is the shared header and footer identity asset, with its isolated symbol used as the favicon for consistency.
- Public treatment navigation only exposes entries with confirmed content; placeholder entries remain editorial drafts until approved.
- Use the shared TreatmentLink for public treatment navigation because lymfmassage has a dedicated canonical route.
- The header treatment dropdown uses the shared Button and local React disclosure state rather than Radix NavigationMenu to avoid the preview's dependency-level hook dispatcher crash.
