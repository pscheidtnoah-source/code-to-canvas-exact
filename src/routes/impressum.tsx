import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Malermeister DMW" },
      { name: "description", content: "Impressum von Malermeister DMW, Inhaber Dominik Mike Wöhner, Fürth." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Impressum</h1>
        <div className="mt-10 space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG:</h2>
            <div className="mt-4 space-y-1">
              <p>Dominik Mike Wöhner</p>
              <p>Malermeister DMW</p>
              <p>Würzburger Straße 554</p>
              <p>90768 Fürth</p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-foreground">Kontakt:</p>
              <p>Tel: <a href="tel:015757475791" className="hover:text-gold">015757475791</a></p>
              <p>E-Mail: <a href="mailto:Malermeister-DMW@Web.de" className="hover:text-gold break-all">Malermeister-DMW@Web.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
            <p className="mt-3">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="mt-1 text-muted-foreground">DE458481211</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Aufsichtsbehörde</h2>
            <p className="mt-3">Finanzamt Fürth</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <Link to="/" className="inline-block mt-6 text-gold hover:underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
