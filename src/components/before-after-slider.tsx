import { useRef, useState, useCallback } from "react";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = "Vorher", afterLabel = "Nachher", alt = "Vorher Nachher Vergleich" }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl select-none touch-none cursor-ew-resize bg-anthracite"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <img src={afterSrc} alt={`${alt} – ${afterLabel}`} width={1024} height={768} className="absolute inset-0 h-full w-full object-cover pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img src={beforeSrc} alt={`${alt} – ${beforeLabel}`} width={1024} height={768} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>
      <div className="absolute top-4 left-4 bg-anthracite/80 text-anthracite-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">{beforeLabel}</div>
      <div className="absolute top-4 right-4 bg-gold text-gold-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">{afterLabel}</div>
      <div className="absolute top-0 bottom-0 w-1 bg-gold pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%)" }} />
      <div
        className="absolute top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-anthracite shadow-2xl"
        style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 6 15 12 9 18" transform="translate(8 0)" />
        </svg>
      </div>
    </div>
  );
}
