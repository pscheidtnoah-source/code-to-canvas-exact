import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkle, ArrowRight, Phone, GraduationCap, Award, School, Trophy, Quote,
} from "lucide-react";
import heroBg from "@/assets/dominik-steckbrief.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export const Route = createFileRoute("/ueber-mich/steckbrief")({
  head: () => ({
    meta: [
      { title: "Steckbrief – Dominik Wöhner | Malermeister DMW Fürth" },
      { name: "description", content: "Der Werdegang von Dominik Wöhner: vom Auszubildenden 2013 bis zum Malermeister 2025. Innungsbester, Platz 3 im Leistungswettbewerb, Meisterprüfung Note 2,6." },
      { property: "og:title", content: "Steckbrief – Vom Gesellen zum Meister" },
      { property: "og:description", content: "12+ Jahre Handwerk, Meisterprüfung Note 2,6, Innungsbester – der Weg von Dominik Wöhner zum Malermeisterbetrieb in Fürth." },
    ],
  }),
  component: SteckbriefPage,
});

const stats = [
  { value: "12+", label: "Jahre im Handwerk" },
  { value: "2,6", label: "Meisterprüfung Note" },
  { value: "Platz 3", label: "Leistungswettbewerb" },
];

const timeline = [
  {
    year: "2013",
    icon: GraduationCap,
    title: "Beginn der Ausbildung",
    desc: "Start der Ausbildung zum Maler und Lackierer – der Grundstein für alles, was folgen sollte.",
  },
  {
    year: "2016",
    icon: Trophy,
    title: "Gesellenprüfung bestanden",
    desc: "Abschluss als Innungsbester und Platz 3 im Leistungswettbewerb des Deutschen Handwerks.",
  },
  {
    year: "2021",
    icon: School,
    title: "Beginn der Meisterschule",
    desc: "Berufsbegleitend in Bayreuth und Nürnberg – vier Jahre Weiterbildung neben der täglichen Arbeit am Kunden.",
  },
  {
    year: "2025",
    icon: Award,
    title: "Meisterprüfung bestanden",
    desc: "Erfolgreicher Abschluss der Meisterprüfung mit Gesamtnote 2,6 – Gründung des eigenen Meisterbetriebs.",
  },
];

function SteckbriefPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Dominik Wöhner, Malermeister aus Fürth" className="absolute inset-0 h-full w-full object-cover object-center sm:object-[center_20%] lg:[object-fit:contain] lg:object-right lg:bg-anthracite" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite/95 via-anthracite/85 to-anthracite/50" />
        <ScrollReveal className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl text-anthracite-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <Sparkle className="h-3.5 w-3.5" /> Malermeister · Fürth
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Dominik Wöhner.<br />
              Vom Gesellen zum <span className="text-gold">Meister.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-anthracite-foreground/80 leading-relaxed">
              Über zwölf Jahre auf der Baustelle, vier Jahre Meisterschule berufsbegleitend
              und der klare Anspruch, jedes Projekt so zu übergeben, wie ich es selbst
              annehmen würde. Das ist mein Handwerk.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold text-gold">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-anthracite-foreground/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Werdegang</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Sein Weg zum <span className="text-gold">Meisterbetrieb</span>.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Vier Stationen, ein roter Faden: Handwerk auf höchstem Niveau, jeden Tag ein Stück besser.</p>
          </ScrollReveal>

          <Timeline items={timeline} />
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-28 bg-anthracite overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,theme(colors.gold)_0%,transparent_50%)]" />
        <div className="relative container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center text-anthracite-foreground">
            <Quote className="mx-auto h-12 w-12 text-gold" />
            <blockquote className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              „Für mich ist jede Wand ein <span className="text-gold">Versprechen</span> –
              an den Kunden, an das Handwerk und an mich selbst."
            </blockquote>
            <div className="mt-8 text-sm uppercase tracking-[0.2em] text-anthracite-foreground/60">
              Dominik Wöhner · Malermeister
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Bereit für Ihr <span className="text-gold">nächstes Projekt</span>?</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Sprechen Sie direkt mit dem Meister. Kostenlose Beratung, faire Festpreise,
              saubere Ausführung.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a href="/#kontakt" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition shadow-lg shadow-gold/20">
                Jetzt unverbindlich anfragen <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:015757475791" className="inline-flex items-center gap-2 rounded-md border border-foreground/20 bg-anthracite px-7 py-4 text-sm font-semibold text-anthracite-foreground hover:bg-anthracite/90 transition">
                <Phone className="h-4 w-4" /> Jetzt anrufen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

type TimelineItem = {
  year: string;
  icon: typeof GraduationCap;
  title: string;
  desc: string;
};

function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll<HTMLElement>("[data-tl-item]");
    if (!nodes) return;
    const observer = new IntersectionObserver(
      () => {
        let count = 0;
        nodes.forEach((n) => {
          const rect = n.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.7) count += 1;
        });
        setActiveCount(count);
        // progress: fraction of last-activated item to end
        if (count === 0) setProgress(0);
        else setProgress(Math.min(1, count / nodes.length));
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    nodes.forEach((n) => observer.observe(n));

    const onScroll = () => {
      let count = 0;
      nodes.forEach((n) => {
        const rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) count += 1;
      });
      setActiveCount(count);
      setProgress(Math.min(1, count / nodes.length));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto">
      {/* base line */}
      <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-border" aria-hidden />
      {/* gold progress line (fills from top to bottom as user scrolls) */}
      <div
        className="absolute left-6 sm:left-8 top-2 w-px bg-gold transition-[height] duration-500 ease-out"
        style={{ height: `calc(${progress * 100}% - 4px)` }}
        aria-hidden
      />

      <ol className="space-y-14">
        {items.map((item, i) => {
          const isActive = i < activeCount;
          return (
            <li key={item.year} data-tl-item className="relative pl-20 sm:pl-24">
              {/* icon badge */}
              <div
                className={`absolute left-0 top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border transition-all duration-500 ${
                  isActive
                    ? "bg-anthracite border-gold text-gold shadow-lg shadow-gold/20"
                    : "bg-background border-border text-muted-foreground"
                }`}
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div
                className={`text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ${
                  isActive ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {item.year}
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">{item.desc}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
