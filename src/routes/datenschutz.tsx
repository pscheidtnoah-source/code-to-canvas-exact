import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Malermeister DMW" },
      { name: "description", content: "Datenschutzerklärung von Malermeister DMW." },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Datenschutzerklärung</h1>
        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Verantwortlicher</h2>
            <p className="mt-3">
              Malermeister DMW, Inhaber Dominik Mike Wöhner, Würzburger Str. 554, 90768 Fürth.<br />
              E-Mail: <a href="mailto:info@malermeister-dmw.de" className="text-gold hover:underline">info@malermeister-dmw.de</a>
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">2. Erhebung allgemeiner Informationen</h2>
            <p className="mt-3 text-muted-foreground">
              Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse, Uhrzeit). Diese dienen ausschließlich der technischen Bereitstellung und Sicherheit unserer Website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Kontaktaufnahme</h2>
            <p className="mt-3 text-muted-foreground">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte findet nicht statt.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">4. Ihre Rechte</h2>
            <p className="mt-3 text-muted-foreground">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch und Datenübertragbarkeit. Wenden Sie sich dafür an die oben genannte Kontaktadresse.
            </p>
          </section>
          <Link to="/" className="inline-block mt-6 text-gold hover:underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
