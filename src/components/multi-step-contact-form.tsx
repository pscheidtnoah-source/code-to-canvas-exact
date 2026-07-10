import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  squareMeters: string;
  rooms: string;
  message: string;
};

const initial: FormData = {
  salutation: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  squareMeters: "",
  rooms: "",
  message: "",
};

const services = [
  "Innenanstrich",
  "Fassadenarbeiten",
  "Trockenbau",
  "Kreativtechnik / Spachtel",
  "Bodenverlegung",
  "Sonstiges",
];

const salutations = ["Herr", "Frau", "Divers"];

const steps = [
  { key: "salutation", label: "Anrede", type: "choice" as const, choices: salutations },
  { key: "firstName", label: "Vorname", placeholder: "Ihr Vorname", type: "text" as const },
  { key: "lastName", label: "Nachname", placeholder: "Ihr Nachname", type: "text" as const },
  { key: "email", label: "Email-Adresse", placeholder: "name@beispiel.de", type: "email" as const },
  { key: "phone", label: "Telefonnummer", placeholder: "+49 …", type: "tel" as const },
  { key: "service", label: "Welche Leistungen interessieren Sie?", type: "choice" as const, choices: services },
  { key: "squareMeters", label: "Anzahl der m²", placeholder: "z. B. 60", type: "text" as const },
  { key: "rooms", label: "Anzahl der Räume", placeholder: "z. B. 3", type: "text" as const },
  { key: "message", label: "Beschreiben Sie Ihr Projekt", placeholder: "Was wünschen Sie sich? Gibt es Besonderheiten?", type: "textarea" as const },
] as const;

export function MultiStepContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [done, setDone] = useState(false);

  const total = steps.length;
  const current = steps[step];
  const value = data[current.key as keyof FormData];

  const valid = (() => {
    const v = value.trim();
    if (!v) return false;
    if (current.type === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (current.type === "tel") return v.replace(/\D/g, "").length >= 6;
    if (current.type === "choice") return true;
    return v.length >= 2;
  })();

  const next = () => {
    if (!valid) return;
    if (step < total - 1) setStep(step + 1);
    else submit();
  };
  const back = () => step > 0 && setStep(step - 1);

  const submit = () => {
    const body = encodeURIComponent(
      `Anrede: ${data.salutation}\nVorname: ${data.firstName}\nNachname: ${data.lastName}\nE-Mail: ${data.email}\nTelefon: ${data.phone}\nLeistung: ${data.service}\nFläche: ${data.squareMeters} m²\nRäume: ${data.rooms}\n\n${data.message}`,
    );
    window.location.href = `mailto:info@malermeister-dmw.de?subject=${encodeURIComponent(
      "Anfrage über die Website",
    )}&body=${body}`;
    setDone(true);
    toast.success("Vielen Dank! Wir melden uns innerhalb von 24 Stunden.");
  };

  const update = (v: string) => setData({ ...data, [current.key]: v });

  if (done) {
    return (
      <div className="rounded-2xl bg-anthracite text-anthracite-foreground p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-anthracite">
          <Check className="h-8 w-8 stroke-[3]" />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Anfrage abgesendet!</h3>
        <p className="mt-3 text-anthracite-foreground/80">
          Vielen Dank, {data.firstName}. Wir melden uns innerhalb von 24 Stunden.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-anthracite text-anthracite-foreground p-6 sm:p-8 shadow-2xl min-h-[560px] flex flex-col">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gold">
        <span>
          Schritt {step + 1} von {total}
        </span>
        <span className="text-anthracite-foreground/60">
          {Math.round(((step + 1) / total) * 100)}%
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-anthracite-foreground/10">
        <div
          className="h-full bg-gold transition-all duration-500"
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center py-8">
        <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">{current.label}</h3>

        <div className="mt-10 flex-1 flex flex-col">
          {current.type === "textarea" ? (
            <textarea
              value={value}
              onChange={(e) => update(e.target.value)}
              placeholder={current.placeholder}
              rows={6}
              maxLength={1000}
              className="w-full flex-1 min-h-[180px] rounded-lg bg-anthracite-foreground/5 border border-anthracite-foreground/20 px-4 py-4 text-anthracite-foreground placeholder:text-anthracite-foreground/40 focus:outline-none focus:border-gold transition"
            />
          ) : current.type === "choice" ? (
            <div className="grid sm:grid-cols-2 gap-3 content-start">
              {current.choices!.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => update(s)}
                  className={`text-left rounded-lg border px-4 py-4 text-sm transition ${
                    value === s
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-anthracite-foreground/20 hover:border-anthracite-foreground/40 text-anthracite-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <input
              type={current.type}
              value={value}
              onChange={(e) => update(e.target.value)}
              placeholder={current.placeholder}
              maxLength={255}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && next()}
              className="w-full rounded-lg bg-anthracite-foreground/5 border border-anthracite-foreground/20 px-4 py-4 text-lg text-anthracite-foreground placeholder:text-anthracite-foreground/40 focus:outline-none focus:border-gold transition"
            />
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-md border border-anthracite-foreground/20 px-5 py-3 text-sm font-semibold text-anthracite-foreground hover:bg-anthracite-foreground/5 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!valid}
          className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-105 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {step === total - 1 ? (
            <>
              Anfrage senden <Send className="h-4 w-4" />
            </>
          ) : (
            <>
              Weiter <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
