import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Leistungen", href: "/#leistungen" },
  {
    label: "Über mich",
    href: "/#ueber",
    children: [
      { label: "Über mich", href: "/#ueber" },
      { label: "Steckbrief", href: "/ueber-mich/steckbrief" },
      { label: "Unsere Partner", href: "/ueber-mich/partner" },
    ],
  },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
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
            {navItems.map((n) =>
              n.children ? (
                <div key={n.label} className="relative group">
                  <a
                    href={n.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    {n.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </a>
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="min-w-[200px] rounded-lg border border-border bg-background shadow-xl overflow-hidden">
                      {n.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-gold transition-colors"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors">
                  {n.label}
                </a>
              )
            )}
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
              {navItems.map((n) =>
                n.children ? (
                  <div key={n.label}>
                    <button
                      onClick={() => setMobileSub(mobileSub === n.label ? null : n.label)}
                      className="w-full flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      {n.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSub === n.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSub === n.label && (
                      <div className="ml-3 border-l border-border pl-3 py-1 flex flex-col gap-1">
                        {n.children.map((c) => (
                          <a
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-gold"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
                    {n.label}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
