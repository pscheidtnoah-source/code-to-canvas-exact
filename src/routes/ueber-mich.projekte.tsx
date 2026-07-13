import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useCallback } from "react";
import { ArrowRight, Sparkle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import wohnzimmer from "@/assets/project-wohnzimmer.jpg";
import wallAfter from "@/assets/wall-after.jpg";
import wallBefore from "@/assets/wall-before.jpg";
import kreativ from "@/assets/kreativ.png";
import fassade from "@/assets/fassade.png";
import trockenbau from "@/assets/trockenbau.png";
import boden from "@/assets/boden.png";
import hero from "@/assets/hero.png";

export const Route = createFileRoute("/ueber-mich/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte – Malermeister DMW Fürth" },
      { name: "description", content: "Einblicke in unsere Arbeit: Innenanstrich, fugenlose Oberflächen, Fassade und Trockenbau – realisierte Projekte von Malermeister DMW in Fürth." },
      { property: "og:title", content: "Projekte – Malermeister DMW" },
      { property: "og:description", content: "Referenzprojekte von Malermeister DMW aus Fürth." },
    ],
  }),
  component: ProjektePage,
});

type Category = "Innenanstrich" | "Fugenlose Oberflächen" | "Fassade" | "Trockenbau";

type Project = { src: string; alt: string; category: Category };

const projects: Project[] = [
  { src: wohnzimmer, alt: "Innenanstrich Wohnzimmer, warme Wandfarbe", category: "Innenanstrich" },
  { src: wallAfter, alt: "Innenanstrich Wand, sauber gestrichen in Weiß", category: "Innenanstrich" },
  { src: wallBefore, alt: "Innenanstrich Vorbereitung, Wand vor dem Streichen", category: "Innenanstrich" },
  { src: hero, alt: "Innenanstrich Flur, moderne Farbgestaltung", category: "Innenanstrich" },
  { src: wohnzimmer, alt: "Innenanstrich Schlafzimmer, ruhige Farbtöne", category: "Innenanstrich" },
  { src: wallAfter, alt: "Innenanstrich Küche, hochwertige Latexfarbe", category: "Innenanstrich" },

  { src: kreativ, alt: "Fugenlose Oberfläche Wand, mineralische Spachteltechnik", category: "Fugenlose Oberflächen" },
  { src: boden, alt: "Fugenloser Boden, dekorative Spachtelbeschichtung", category: "Fugenlose Oberflächen" },
  { src: kreativ, alt: "Fugenlose Wandgestaltung, Beton-Optik", category: "Fugenlose Oberflächen" },
  { src: boden, alt: "Fugenloser Boden im Wohnbereich, seidenmatt", category: "Fugenlose Oberflächen" },

  { src: fassade, alt: "Fassadenanstrich Einfamilienhaus, cremeweiß", category: "Fassade" },
  { src: fassade, alt: "Fassadensanierung, langlebiger Silikatanstrich", category: "Fassade" },
  { src: fassade, alt: "Fassade mit Akzentfarbe, moderne Optik", category: "Fassade" },

  { src: trockenbau, alt: "Trockenbau Deckenkonstruktion, glatt verspachtelt", category: "Trockenbau" },
  { src: trockenbau, alt: "Trockenbau Wand, sauberer Rohbau", category: "Trockenbau" },
  { src: trockenbau, alt: "Trockenbau abgehängte Decke mit indirekter Beleuchtung", category: "Trockenbau" },
];

const categories: Category[] = ["Innenanstrich", "Fugenlose Oberflächen", "Fassade", "Trockenbau"];
type Filter = "Alle" | Category;
const filters: Filter[] = ["Alle", ...categories];
const PREVIEW_COUNT = 4;

function ProjektePage() {
  const [filter, setFilter] = useState<Filter>("Alle");
  const [fadeKey, setFadeKey] = useState(0);
  const [lightbox, setLightbox] = useState<{ list: Project[]; index: number } | null>(null);

  useEffect(() => { setFadeKey((k) => k + 1); }, [filter]);

  const grouped = useMemo(() => {
    const visibleCats = filter === "Alle" ? categories : [filter];
    return visibleCats.map((cat) => ({
      cat,
      items: projects.filter((p) => p.category === cat),
    }));
  }, [filter]);

  const openLightbox = useCallback((list: Project[], index: number) => {
    setLightbox({ list, index });
  }, []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => {
    setLightbox((lb) => lb ? { ...lb, index: (lb.index - 1 + lb.list.length) % lb.list.length } : lb);
  }, []);
  const next = useCallback(() => {
    setLightbox((lb) => lb ? { ...lb, index: (lb.index + 1) % lb.list.length } : lb);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative py-24 bg-anthracite border-b border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-anthracite px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkle className="h-3.5 w-3.5" /> Unsere Projekte
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-anthracite-foreground">
              Einblicke in unsere <span className="text-gold">Arbeit</span>.
            </h1>
            <p className="mt-6 text-lg text-anthracite-foreground/70">
              Handwerk, das man sieht – eine Auswahl realisierter Projekte aus
              Fürth und der Region.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-10 bg-background border-b border-border sticky top-[73px] z-30 backdrop-blur bg-background/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={
                    "rounded-full px-5 py-2 text-sm font-semibold transition-all " +
                    (active
                      ? "bg-gold text-gold-foreground shadow-md shadow-gold/20"
                      : "border border-border text-foreground/80 hover:border-gold hover:text-gold")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-background">
        <div key={fadeKey} className="container mx-auto px-4 space-y-16 animate-in fade-in duration-500">
          {grouped.map(({ cat, items }) => {
            if (items.length === 0) return null;
            const preview = items.slice(0, PREVIEW_COUNT);
            const overflow = items.length - PREVIEW_COUNT;
            return (
              <div key={cat}>
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{cat}</h2>
                  <span className="text-sm text-muted-foreground">· {items.length} {items.length === 1 ? "Projekt" : "Projekte"}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {preview.map((p, i) => {
                    const isLast = i === preview.length - 1 && overflow > 0;
                    return (
                      <button
                        key={i}
                        onClick={() => openLightbox(items, i)}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-secondary focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <img
                          src={p.src}
                          alt={p.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {isLast && (
                          <div className="absolute inset-0 flex items-center justify-center bg-anthracite/70 text-anthracite-foreground">
                            <span className="text-3xl font-bold">+{overflow}</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/40 border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Ihr Projekt wird das <span className="text-gold">nächste</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Kostenlose Beratung, faire Festpreise, saubere Ausführung.
            </p>
            <div className="mt-9 flex justify-center">
              <a href="/#kontakt" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition shadow-lg shadow-gold/20">
                Jetzt unverbindlich anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.list[lightbox.index].src}
              alt={lightbox.list[lightbox.index].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
            />
            <div className="text-sm text-white/70">
              {lightbox.index + 1} / {lightbox.list.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
