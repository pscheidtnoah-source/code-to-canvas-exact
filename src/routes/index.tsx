import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, ArrowRight, Check, Brush, Sparkles, Square, Layers, Home as HomeIcon, PaintRoller,
  Frown, Clock, Lightbulb, UserCheck, Sparkle, MapPin, Mail, Star, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import projWohnzimmer from "@/assets/project-wohnzimmer.jpg";
import wallBefore from "@/assets/wall-before.jpg";
import wallAfter from "@/assets/wall-after.jpg";
import dominikAsset from "@/assets/dominik-real.png";
import trockenbauAsset from "@/assets/trockenbau.png";
import fassadeAsset from "@/assets/fassade.png";
import bodenAsset from "@/assets/boden.png";
import kreativAsset from "@/assets/kreativ.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { MultiStepContactForm } from "@/components/multi-step-contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malermeister DMW – Maler in Fürth | Wandgestaltung, Fassade & Trockenbau" },
      { name: "description", content: "Ihr Malermeister in Fürth: Innenanstriche, Fassaden, Trockenbau, Bodenverlegung & Kreativtechniken. Über 10 Jahre Erfahrung, 500+ Projekte." },
      { property: "og:title", content: "Malermeister DMW – Maler in Fürth" },
      { property: "og:description", content: "Farbe. Design. Wohlgefühl. Hochwertige Malerarbeiten in Fürth & Umgebung." },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: PaintRoller,
    title: "Traditionelle Malerarbeiten",
    desc: "Klassische Innenarbeiten mit Charakter – vom Anstrich bis zur Tapete.",
    img: wallAfter,
    backTitle: "Innenarbeiten aus Meisterhand",
    backIntro: "Bewährte Handwerkstechniken kombiniert mit hochwertigen Materialien – für Neubau, Altbau und Renovierung.",
    points: [
      "Anstricharbeiten für Wände und Decken",
      "Lackierarbeiten an Türen, Fenstern & Heizkörpern",
      "Tapezierarbeiten (Raufaser, Vlies, klassisch)",
      "Spachtel- und Putzarbeiten",
      "Renovierungs- & Ausbesserungsarbeiten",
    ],
  },
  {
    icon: Sparkles,
    title: "Kreativtechniken",
    desc: "Spachteltechniken, Strukturputz, Metallic- und Betonoptik für besondere Akzente.",
    img: kreativAsset,
    backTitle: "Oberflächen mit Charakter",
    backIntro: "Handwerkliches Können trifft gestalterische Freiheit – jede Wand wird zum Unikat.",
    points: [
      "Spachtel- & Glättetechniken, fugenlos",
      "Beton- und Rostoptiken",
      "Lasur- & Wischtechniken mit Tiefenwirkung",
      "Metallische Effekte für exklusive Akzente",
      "Natur- & Kalktechniken für gesundes Raumklima",
    ],
  },
  {
    icon: Brush,
    title: "Fugenlose Oberflächen",
    desc: "Nahtlose Wand- und Bodenflächen – modern, hygienisch, langlebig.",
    img: projWohnzimmer,
    backTitle: "Zeitloses Design ohne Fugen",
    backIntro: "Ideal für Bad, Küche, Wohnbereich und Gewerbe – auch nahtlos über bestehende Fliesen.",
    points: [
      "Edles Erscheinungsbild ohne Unterbrechungen",
      "Pflegeleicht & hygienisch",
      "Wasser- & schmutzabweisend",
      "Langlebig & robust",
      "Individuell in Farbe & Struktur gestaltbar",
    ],
  },
  {
    icon: Square,
    title: "Trockenbau",
    desc: "Saubere, moderne Bauweise für neue Räume und optimierten Schall- & Wärmeschutz.",
    img: trockenbauAsset,
    backTitle: "Räume neu gedacht",
    backIntro: "Vom Neubau bis zur Renovierung – funktional, ästhetisch und wirtschaftlich.",
    points: [
      "Montage von Gipskarton- & OSB-Platten",
      "Deckenabhängungen inkl. LED-Lichtsystemen",
      "Raumtrennwände & individuelle Grundrisse",
      "Verspachtelung in Q1–Q4-Qualität",
    ],
  },
  {
    icon: Layers,
    title: "Bodenbelagsarbeiten",
    desc: "Von der Untergrundvorbereitung bis zur Verlegung – millimetergenau.",
    img: bodenAsset,
    backTitle: "Böden mit Wohlfühl-Faktor",
    backIntro: "Persönliche Beratung und fachgerechte Verlegung individuell auf Ihr Projekt abgestimmt.",
    points: [
      "Laminat verlegen",
      "PVC & Vinyl",
      "Teppichböden",
      "Fachgerechte Untergrundvorbereitung",
      "Sockelleisten & Abschlussarbeiten",
    ],
  },
  {
    icon: HomeIcon,
    title: "Fassaden",
    desc: "Fassadenanstrich und Verputzarbeiten – Ihr Ansprechpartner rund ums Haus.",
    img: fassadeAsset,
    backTitle: "Ihr Haus im besten Licht",
    backIntro: "Von der Planung bis zur Ausführung – individuell auf die Größe Ihres Projekts abgestimmt.",
    points: [
      "Fassadenanstriche",
      "Verputzarbeiten",
      "Persönliche Beratung & Planung",
      "Umsetzung individuell nach Projektgröße",
      "(Kein Anbringen von WDVS-Systemen)",
    ],
  },
];

const problems = [
  { icon: Frown, title: "Verblasste Wände?", desc: "Ihre Räume wirken stumpf, uninspiriert und werden Ihrer Wohnqualität nicht mehr gerecht." },
  { icon: Clock, title: "Handwerker-Chaos?", desc: "Sie warten ewig auf Angebote, Rückrufe oder Termine – und ein klarer Ansprechpartner fehlt." },
  { icon: Lightbulb, title: "Fehlende Ideen?", desc: "Sie wissen nicht, welche Farben, Materialien oder Techniken wirklich zu Ihrem Zuhause passen." },
];

const references = [
  { img: kreativAsset, tag: "Kreativtechnik", title: "Akzentwand mit Strukturputz", desc: "Warme Metallic-Optik mit feinem Lichtspiel – ein echter Hingucker im Wohnbereich." },
  { img: fassadeAsset, tag: "Fassade", title: "Fassadenrenovierung Einfamilienhaus", desc: "Komplettanstrich inkl. Vorarbeiten und Schutzbeschichtung – wetterfest für Jahre." },
  { img: trockenbauAsset, tag: "Trockenbau", title: "Trockenbau-Ausbau", desc: "Neue Wände und Decken im Rohbau – sauber gespachtelt und streichfertig übergeben." },
  { img: bodenAsset, tag: "Boden", title: "Bodenverlegung Eiche-Optik", desc: "Designboden in warmer Holzoptik – millimetergenau verlegt, inkl. Sockelleisten." },
  { img: wallAfter, tag: "Innenanstrich", title: "Wohnraum-Anstrich", desc: "Frische Wandfarbe in warmem Beige – ein neues Wohngefühl an einem Wochenende." },
  { img: projWohnzimmer, tag: "Spachteltechnik", title: "Wohnzimmer in Betonoptik", desc: "Edle Spachteltechnik mit sanften Verläufen – modern und zeitlos zugleich." },
];

const steps = [
  { n: "01", icon: Phone, title: "Kontakt aufnehmen", desc: "Per Telefon oder E-Mail – wir melden uns innerhalb von 24 Stunden zurück." },
  { n: "02", icon: UserCheck, title: "Kostenlose Beratung vor Ort", desc: "Wir schauen uns Ihre Räume an, hören zu und entwickeln ein Konzept – unverbindlich." },
  { n: "03", icon: Sparkle, title: "Professionelle Umsetzung", desc: "Saubere Ausführung im vereinbarten Zeitraum – mit Liebe zum Detail bis zur Abnahme." },
];

const collaboration = [
  "Fester Ansprechpartner von der ersten Beratung bis zur Abnahme.",
  "Saubere Baustelle, geschützte Möbel und klare Terminplanung.",
  "Transparente Beratung zu Materialien, Techniken und Kosten.",
  "Faire Festpreise – keine Überraschungen nach Auftragsende.",
  "Über 10 Jahre Erfahrung – Meisterbetrieb aus Fürth.",
];

const testimonials = [
  { name: "Steffen B.", city: "Nürnberg", source: "MyHammer", project: "Malerarbeiten innen · 67 m² · 5 Räume",
    text: "Hervorragende Arbeit. Sehr saubere und präzise Arbeit, zuverlässig, pünktlich und professionell. Die Arbeiten wurden schnell erledigt, die Wohnung sauber hinterlassen und die Kommunikation war jederzeit unkompliziert. Ich musste mich um nichts kümmern. Klare Weiterempfehlung!" },
  { name: "Renate B.", city: "Erlangen", source: "MyHammer", project: "Verputzen Decken & Innenwände · 8 m²",
    text: "Super schnelle Rückmeldung. Sehr gute Arbeit geleistet. Schnell und sauber gearbeitet. Werde ich jederzeit wieder beauftragen." },
  { name: "Gunda H. B.", city: "Pretzfeld", source: "Blauarbeit", project: "Innenanstrich Wände & Decken · 20 m²",
    text: "Empfehlenswert! Sehr gute Kommunikation, völlig unproblematisch. Kostenvoranschlag kam noch am selben Tag. Terminfindung innerhalb kürzester Zeit. Sauberer Anstrich, alles tip top zu einem absolut fairen Preis." },
  { name: "Susanne W. K.", city: "Fürth", source: "MyHammer", project: "Verputzen & Anstrich · 18 m²",
    text: "Herr Wöhner hat alles perfekt erledigt. Verputzen, den Anstrich – alles perfekt. Er war zuverlässig und hat super sauber gearbeitet. Wir können ihn wärmstens empfehlen." },
  { name: "Stefan H.", city: "Zirndorf", source: "MyHammer", project: "Malerarbeiten innen · 60 m² · 3 Räume",
    text: "Top Job von Dominik! Es waren 3 Zimmer zu streichen und eine Menge Löcher zu spachteln. Das Ergebnis ist perfekt, Löcher sind alle zu, super sauber gestrichen. Absolute Empfehlung und sicher nicht der letzte Job!" },
  { name: "Christopher S.", city: "Nürnberg", source: "MyHammer", project: "Malerarbeiten innen · 50 m² · 3 Räume",
    text: "Dominik hat die Ausbesserungsarbeiten nach dem Fensterneueinbau super gemacht. Bei Fragen und Farbauswahl hat er sehr gut beraten. Dachgauben, Akzentwände, Wasserflecken im Bad und Türzarge – absolut perfekt ausgeführt. Sehr sauber und der Preis fair." },
  { name: "Florian B.", city: "Zirndorf", source: "Google", project: "Trockenbau, Wände, Decken, Ausbesserungen",
    text: "Unser Malermeister Dominik ist ein Meister seines Faches. Freundlich, zuverlässig und sehr qualitätsorientiert. Die Ausführung aller Arbeiten hat unsere Erwartungen immer wieder übertroffen. Klare Empfehlung für alle, die Qualität und Zuverlässigkeit schätzen." },
  { name: "Werner H.", city: "Nürnberg", source: "MyHammer", project: "Malerarbeiten innen · 38 m² · 1 Raum",
    text: "Herr Wöhner hat perfekte Arbeit geleistet, sehr sauber und genau – was die Vorbereitung und die Ausführung angeht. Wir können Herrn Wöhner nur weiterempfehlen." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Hochwertig gestalteter Wohnraum" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite/95 via-anthracite/75 to-anthracite/30" />
        <ScrollReveal className="relative container mx-auto px-4 py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-anthracite-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <Sparkle className="h-3.5 w-3.5" /> Meisterbetrieb · Fürth
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Farbe. Design. <span className="text-gold">Wohlgefühl.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-anthracite-foreground/80 leading-relaxed">
              Vergessen Sie Handwerker-Stress. Seit über 10 Jahren bringen wir hochwertige Malerarbeiten,
              Trockenbau und kreative Wandgestaltungen in die Haushalte der Region Fürth.
              Sauber, pünktlich, meisterhaft.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition shadow-lg shadow-gold/20">
                Projekt starten <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:015757475791" className="inline-flex items-center gap-2 rounded-md border border-anthracite-foreground/30 bg-transparent px-7 py-4 text-sm font-semibold text-anthracite-foreground hover:bg-anthracite-foreground/10 transition">
                <Phone className="h-4 w-4" /> Jetzt anrufen
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <div className="text-4xl font-bold text-gold">10+</div>
                <div className="text-xs uppercase tracking-wider text-anthracite-foreground/70 mt-1">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold">500+</div>
                <div className="text-xs uppercase tracking-wider text-anthracite-foreground/70 mt-1">Projekte realisiert</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold flex items-center gap-1">5,0 <Star className="h-5 w-5 fill-gold" /></div>
                <div className="text-xs uppercase tracking-wider text-anthracite-foreground/70 mt-1">Kundenbewertung</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ihre Situation</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Wir kennen Ihre Sorgen als Hausbesitzer.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Und wir nehmen sie Ihnen ab – mit Handschlagqualität und meisterlicher Ausführung.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div className="group relative rounded-xl border border-border bg-card p-8 hover:border-gold/60 hover:shadow-xl transition-all h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-anthracite text-gold mb-6">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <BeforeAfterSlider beforeSrc={wallBefore} afterSrc={wallAfter} beforeLabel="Vorher" afterLabel="Nachher" alt="Wand vor und nach dem Anstrich" />
              <p className="mt-3 text-sm text-muted-foreground text-center">Regler verschieben für den Vorher-/Nachher-Effekt</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">So arbeiten wir</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Sehen Sie den Unterschied.</h2>
              <p className="mt-5 text-muted-foreground text-lg">Vom matten, fleckigen Altanstrich zur frisch gestalteten Wand – mit sauberer Vorbereitung, hochwertigen Materialien und einem geübten Auge fürs Detail.</p>
              <ul className="mt-8 space-y-4">
                {collaboration.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-anthracite"><Check className="h-3.5 w-3.5 stroke-[3]" /></span>
                    <span className="text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Unsere Leistungen</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Alles aus einer Meisterhand.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Von der ersten Farbidee bis zur fertigen Fassade – ein Ansprechpartner, ein Team, ein Ergebnis, das bleibt.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100} className="h-[460px]">
                <article tabIndex={0} className="group [perspective:1400px] h-full outline-none">
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                    {/* FRONT */}
                    <div className="absolute inset-0 rounded-xl border border-border bg-card overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <div className="aspect-[4/3] overflow-hidden bg-anthracite">
                        <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold">
                            <s.icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                        </div>
                        <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                        <p className="mt-4 text-xs uppercase tracking-widest text-gold/80">Karte drehen →</p>
                      </div>
                    </div>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-xl border border-gold/40 bg-anthracite text-white p-7 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] overflow-auto">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-anthracite">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-gold">{s.backTitle}</h3>
                      </div>
                      <p className="mt-3 text-sm text-white/80 leading-relaxed">{s.backIntro}</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="text-gold mt-0.5">•</span>
                            <span className="text-white/90">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* (Referenzen-Sektion entfernt – Projekte werden bereits in den Leistungen gezeigt) */}


      {/* PROCESS TIMELINE */}
      <section id="ueber" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Warum Malermeister DMW</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">So einfach geht's.</h2>
            <p className="mt-4 text-muted-foreground text-lg">In drei klaren Schritten zu Räumen, in denen Sie sich wirklich wohlfühlen.</p>
          </ScrollReveal>

          <div className="relative">
            {/* Horizontal timeline line (desktop) */}
            <div aria-hidden className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
            {/* Vertical timeline line (mobile) */}
            <div aria-hidden className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-gold/30 via-gold to-gold/30" />

            <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
              {steps.map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 150} className="relative flex md:flex-col gap-5 md:gap-0 md:items-center md:text-center">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-anthracite shadow-lg shadow-gold/30 ring-8 ring-secondary/40">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="md:mt-6 flex-1">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Schritt {s.n}</div>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* OWNER */}
          <ScrollReveal className="mt-24 grid lg:grid-cols-12 gap-10 items-center bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-anthracite">
                <img src={dominikAsset} alt="Dominik Mike Wöhner, Inhaber Malermeister DMW" width={800} height={1024} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Der Mann hinter der Marke</div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Dominik Mike Wöhner</h3>
              <p className="mt-2 text-muted-foreground">Inhaber & Malermeister</p>
              <blockquote className="mt-6 relative pl-6 border-l-4 border-gold">
                <p className="text-xl sm:text-2xl leading-relaxed text-foreground italic">
                  „Ich arbeite so, wie ich es auch bei mir zuhause erwarten würde – sorgfältig, ordentlich und mit Liebe zum Detail."
                </p>
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md bg-anthracite px-6 py-3 text-sm font-semibold text-anthracite-foreground hover:bg-anthracite/90 transition">
                  Angebot einholen <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:015757475791" className="inline-flex items-center gap-2 rounded-md border border-input px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition">
                  <Phone className="h-4 w-4" /> 0157 57475791
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS – Slideshow */}
      <section className="py-24 bg-secondary/40 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Kundenstimmen</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Was unsere Kunden sagen.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Echte Bewertungen von MyHammer, Blauarbeit und Google.</p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <TestimonialMarquee items={testimonials} />
        </ScrollReveal>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 bg-gold">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-anthracite/70">Kontakt</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-anthracite">Lassen Sie uns über Ihr Projekt sprechen.</h2>
              <p className="mt-4 text-anthracite/80 text-lg">Beantworten Sie ein paar kurze Fragen – wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Vorschlag.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a href="tel:015757475791" className="rounded-xl bg-anthracite text-anthracite-foreground p-5 hover:bg-anthracite/90 transition">
                  <Phone className="h-5 w-5 text-gold mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gold">Telefon</div>
                  <div className="mt-1 text-base font-semibold">0157 57475791</div>
                </a>
                <a href="mailto:info@malermeister-dmw.de" className="rounded-xl bg-anthracite text-anthracite-foreground p-5 hover:bg-anthracite/90 transition">
                  <Mail className="h-5 w-5 text-gold mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gold">E-Mail</div>
                  <div className="mt-1 text-sm font-semibold break-all">info@malermeister-dmw.de</div>
                </a>
                <div className="rounded-xl bg-anthracite text-anthracite-foreground p-5">
                  <MapPin className="h-5 w-5 text-gold mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gold">Standort</div>
                  <div className="mt-1 text-sm font-semibold">Würzburger Str. 554<br />90768 Fürth</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <MultiStepContactForm />
          </ScrollReveal>
        </div>
      </section>


      <SiteFooter />
    </div>
  );
}
