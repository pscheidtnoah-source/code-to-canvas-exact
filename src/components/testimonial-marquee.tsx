import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  city: string;
  source: string;
  project: string;
  text: string;
}

export function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((t, i) => (
          <figure
            key={i}
            className="w-[340px] sm:w-[380px] shrink-0 rounded-xl border border-border bg-card p-7 flex flex-col"
          >
            <Quote className="h-7 w-7 text-gold mb-3" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="text-foreground leading-relaxed text-[15px] flex-1">
              „{t.text}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-border">
              <div className="font-semibold text-foreground">
                {t.name} <span className="text-muted-foreground font-normal">· {t.city}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{t.project}</div>
              <div className="text-xs uppercase tracking-wider text-gold mt-2">via {t.source}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
