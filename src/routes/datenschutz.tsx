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
            <h2 className="font-display text-xl font-semibold text-foreground">1. Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              NAME<br />
              STRAßE<br />
              ORT
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Verantwortlicher für die Datenverarbeitung</h2>
            <p className="mt-3">
              NAME, STRAßE, ORT<br />
              E-Mail: <span className="text-muted-foreground">E-MAIL-ADRESSE</span>
            </p>
          </section>
          <Link to="/" className="inline-block mt-6 text-gold hover:underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
