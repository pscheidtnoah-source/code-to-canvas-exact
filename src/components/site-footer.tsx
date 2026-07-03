import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoAsset from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-anthracite text-anthracite-foreground">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoAsset} alt="Malermeister DMW Logo" className="h-11 w-auto object-contain" />
            <div className="font-display text-lg font-bold">Malermeister DMW</div>
          </div>
          <p className="text-sm text-anthracite-foreground/70 leading-relaxed">
            Hochwertige Malerarbeiten, kreative Wandgestaltung und fugenlose Oberflächen für Ihr Zuhause in Fürth & Umgebung.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-anthracite-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Würzburger Str. 554<br />90768 Fürth</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:015757475791" className="hover:text-gold">0157 57475791</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:info@malermeister-dmw.de" className="hover:text-gold break-all">info@malermeister-dmw.de</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-anthracite-foreground/80">
            <li><a href="#leistungen" className="hover:text-gold">Leistungen</a></li>
            <li><a href="#ueber" className="hover:text-gold">Über mich</a></li>
            <li><a href="#referenzen" className="hover:text-gold">Referenzen</a></li>
            <li><a href="#kontakt" className="hover:text-gold">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Folgen Sie uns</h4>
          <a href="https://instagram.com/malermeister_dmw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-anthracite-foreground/80 hover:text-gold">
            <Instagram className="h-5 w-5" /> @malermeister_dmw
          </a>
          <div className="mt-6 space-y-2 text-sm">
            <Link to="/impressum" className="block text-anthracite-foreground/80 hover:text-gold">Impressum</Link>
            <Link to="/datenschutz" className="block text-anthracite-foreground/80 hover:text-gold">Datenschutz</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-anthracite-foreground/10">
        <div className="container mx-auto px-4 py-5 text-xs text-anthracite-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Malermeister DMW – Dominik Mike Wöhner. Alle Rechte vorbehalten.</span>
          <span>Inhaber: Dominik Mike Wöhner</span>
        </div>
      </div>
    </footer>
  );
}
