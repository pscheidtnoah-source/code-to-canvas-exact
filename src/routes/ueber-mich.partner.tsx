import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import plancraftLogo from "@/assets/plancraft.png.asset.json";
import brilluxLogo from "@/assets/brillux.jpg.asset.json";
import volzLogo from "@/assets/farben-volz.png.asset.json";

export const Route = createFileRoute("/ueber-mich/partner")({
  head: () => ({
    meta: [
      { title: "Unsere Partner – Malermeister DMW Fürth" },
      { name: "description", content: "Für alles rund ums Zuhause – unsere starken Partner: Plancraft, Brillux und Farben Volz. Ein Ansprechpartner, null Koordinationsstress." },
      { property: "og:title", content: "Unsere Partner – Malermeister DMW" },
      { property: "og:description", content: "Plancraft, Brillux, Farben Volz – die Partner hinter Malermeister DMW aus Fürth." },
    ],
  }),
  component: PartnerPage,
});

const partners = [
  {
    logo: plancraftLogo.url,
    name: "Plancraft",
    role: "Digitale Handwerkersoftware",
    desc: "Unterstützt uns bei Angeboten, Rechnungen und Projektplanung – für einen reibungslosen Ablauf von der Anfrage bis zur Übergabe.",
  },
  {
    logo: brilluxLogo.url,
    name: "Brillux",
    role: "Premium-Farbenhersteller",
    desc: "Unser Farblieferant für hochwertige Innen- und Fassadenfarben. Langlebige Ergebnisse mit brillanter Farbtiefe.",
  },
  {
    logo: volzLogo.url,
    name: "Farben Volz",
    role: "Fachhandel & Materialpartner",
    desc: "Regionaler Fachhandel mit persönlicher Beratung – schnelle Verfügbarkeit von Farben, Werkzeugen und Spezialmaterialien.",
  },
];

const stats = [
  { value: "3", label: "Starke Partner" },
  { value: "1", label: "Ansprechpartner für alles" },
  { value: "0", label: "Koordinations-Stress" },
];

function PartnerPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative py-24 bg-secondary/40 border-b border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkle className="h-3.5 w-3.5" /> Unsere Partner
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Für alles rund ums <span className="text-gold">Zuhause</span>
              <br />
              haben wir den passenden Partner an unserer Seite.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ob Planung, Material oder Spezialgewerk – ein starkes Netzwerk sorgt dafür,
              dass Ihr Projekt aus einer Hand koordiniert wird.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {partners.map((p) => (
              <ScrollReveal key={p.name}>
                <div className="group h-full rounded-2xl border border-border bg-background p-8 hover:border-gold/60 hover:shadow-xl transition-all duration-300">
                  <div className="h-24 flex items-center justify-start">
                    <img src={p.logo} alt={`${p.name} Logo`} className="max-h-20 max-w-[180px] object-contain" />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.role}</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">{p.name}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-anthracite py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-bold text-gold">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-anthracite-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ein Ansprechpartner für Ihr <span className="text-gold">gesamtes Projekt</span>.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Sie sprechen mit mir – ich koordiniere den Rest. Kostenlose Beratung,
              faire Festpreise, saubere Ausführung.
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
