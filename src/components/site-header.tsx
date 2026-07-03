import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über mich", href: "/#ueber" },
  { label: "Steckbrief", href: "/ueber-mich/steckbrief" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset} alt="Malermeister DMW Logo" className="h-11 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight text-foreground">Malermeister DMW</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Farbe · Design · Wohlgefühl</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors">{n.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:015757475791" className="hidden md:inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground hover:brightness-105 transition">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border" aria-label="Menü">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">{n.label}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
