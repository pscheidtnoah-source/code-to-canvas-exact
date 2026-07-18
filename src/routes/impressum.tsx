import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Malermeister DMW" },
      { name: "description", content: "Impressum von Malermeister DMW, Inhaber Dominik Wöhner, Fürth." },
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
              <p>[VORNAME, NACHNAME]</p>
              <p>[ADRESSE]</p>
              <p>[PLZ, ORT]</p>
            </div>
            <div className="mt-4 space-y-1">
              <p>[KONTAKT/INFO:]</p>
              <p>Telefon: [TELEFONNUMMER]</p>
              <p>Fax: [FAXNUMMER]</p>
              <p>E-Mail: [E-MAIL-ADRESSE]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">[Umsatzsteuer-ID]</h2>
            <p className="mt-3">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="mt-1 text-muted-foreground">[DE XXX XXX XXX]</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Haftungsausschluss – Disclaimer:</h2>
            <h3 className="mt-4 font-semibold text-foreground">Haftung für Inhalte</h3>
            <p className="mt-3">
              Die Inhalte unserer Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
            <p className="mt-3">
              Eine diesbezügliche Haftung ist jedoch ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <Link to="/" className="inline-block mt-6 text-gold hover:underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
