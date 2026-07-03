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
        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              Malermeister DMW<br />
              Inhaber: Dominik Mike Wöhner<br />
              Würzburger Str. 554<br />
              90768 Fürth
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">
              Telefon: <a href="tel:015757475791" className="text-gold hover:underline">0157 57475791</a><br />
              E-Mail: <a href="mailto:info@malermeister-dmw.de" className="text-gold hover:underline">info@malermeister-dmw.de</a>
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Umsatzsteuer / Steuernummer</h2>
            <p className="mt-3">Steuernummer: 21828941264</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Verantwortlich für den Inhalt</h2>
            <p className="mt-3">Dominik Mike Wöhner, Anschrift wie oben.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
            <p className="mt-3 text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>
          <Link to="/" className="inline-block mt-6 text-gold hover:underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
