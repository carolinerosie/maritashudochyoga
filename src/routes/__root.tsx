import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Footer, Header, MobileBookBar } from "@/components/site/Chrome";
import { Button } from "@/components/ui/button";
import { SHARE_IMAGE } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-6xl">Sidan finns inte</h1>
        <p className="mt-4 text-sm text-muted-foreground">Den här sidan har flyttat eller finns inte längre.</p>
        <div className="mt-8">
          <Button asChild className="h-auto rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-foreground">
            <Link to="/">Till startsidan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Sidan kunde inte laddas</h1>
        <p className="mt-2 text-sm text-muted-foreground">Något gick fel. Försök igen eller gå till startsidan.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="h-auto rounded-sm bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            Försök igen
          </Button>
          <Button asChild variant="outline" className="h-auto rounded-sm px-5 py-3 text-sm">
            <Link to="/">Till startsidan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maritas Hud- och Yogaateljé – hudterapeut i Frillesås" },
      { name: "description", content: "Hudvård, hudkurer och lugn för kropp och sinne på Målarns Gård i Frillesås – nära Åsa och Kungsbacka." },
      { name: "author", content: "Marita" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Maritas Hud- och Yogaateljé" },
      { property: "og:locale", content: "sv_SE" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Maritas Hud- och Yogaateljé – hudterapeut i Frillesås sedan 2001" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Nya besök och omladdningar börjar alltid högst upp på sidan.
 * Bakåt/framåt i webbläsaren behåller däremot läget där man var, och länkar med #ankare fungerar som vanligt.
 */
function useStartAtTop() {
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) return;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "back_forward") return;
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    toTop();
    const raf = requestAnimationFrame(() => requestAnimationFrame(toTop));
    const timer = window.setTimeout(toTop, 150);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useStartAtTop();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBookBar />
    </QueryClientProvider>
  );
}
