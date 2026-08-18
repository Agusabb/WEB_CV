import { useState } from "react";
import type { FormEvent } from "react";
import { perfil } from "../data/cv";
import {
  IconoCheck,
  IconoEmail,
  IconoEnviar,
  IconoLinkedIn,
  IconoTelefono,
  IconoUbicacion,
  Reveal,
} from "./ui";

const estadoInicial = { nombre: "", email: "", mensaje: "" };

export function Contacto() {
  const [datos, setDatos] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const asunto = encodeURIComponent(`Message from CV Web · ${datos.nombre}`);
    const cuerpo = encodeURIComponent(`${datos.mensaje}\n\n—\n${datos.nombre}\n${datos.email}`);
    window.location.href = `mailto:${perfil.email}?subject=${asunto}&body=${cuerpo}`;
    setEnviado(true);
    window.setTimeout(() => setEnviado(false), 6000);
    setDatos(estadoInicial);
  };

  const campo =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-soft/60 outline-none transition-all duration-300 focus:border-flame focus:shadow-[0_0_0_3px_var(--flame-soft)]";

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden border-t border-line">
      <div className="relative bg-gradient-to-b from-transparent to-pinesoft/40 px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <Reveal className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-flame">
          <span className="inline-block h-px w-10 bg-flame" aria-hidden="true" />
          06 / Contact
        </Reveal>

        <div className="mt-6 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* CTA grande */}
          <div>
            <Reveal>
              <h2 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Got data that
                <br />
                needs a{" "}
                <span className="relative inline-block text-flame">
                  story?
                  <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                    <path d="M3 9c40-6 140-6 214-3" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-soft">
                I am currently based in Turin and <strong className="font-semibold text-ink">open to relocation to Spain</strong>.
                Dashboards, data models, BI platforms or a good conversation about analytics — my inbox
                is open and I reply within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10 space-y-4">
              <a
                href={`mailto:${perfil.email}`}
                className="group flex items-center gap-4 text-ink transition-colors hover:text-flame"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-card text-flame transition-all duration-300 group-hover:-rotate-6 group-hover:border-flame">
                  <IconoEmail width={18} height={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">Email</span>
                  <span className="text-sm font-semibold underline-offset-4 group-hover:underline">{perfil.email}</span>
                </span>
              </a>
              <a
                href={`tel:${perfil.telefonoHref}`}
                className="group flex items-center gap-4 text-ink transition-colors hover:text-pine"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-card text-pine transition-all duration-300 group-hover:-rotate-6 group-hover:border-pine">
                  <IconoTelefono width={18} height={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">Phone / WhatsApp</span>
                  <span className="text-sm font-semibold">{perfil.telefono}</span>
                </span>
              </a>
              <p className="flex items-center gap-4 text-ink">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-card text-amber">
                  <IconoUbicacion width={18} height={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">Based in</span>
                  <span className="text-sm font-semibold">{perfil.ubicacion} · open to Spain</span>
                </span>
              </p>
            </Reveal>

            {/* LinkedIn */}
            <Reveal delay={280} className="mt-10">
              <a
                href={perfil.redes[0].url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-pine hover:text-pine"
              >
                <IconoLinkedIn width={18} height={18} />
                Connect on LinkedIn
                <span className="font-mono text-[11px] font-normal text-soft transition-transform duration-300 group-hover:translate-x-1">
                  /in/agustin-sabbione
                </span>
              </a>
            </Reveal>
          </div>

          {/* Formulario */}
          <Reveal delay={150}>
            <form
              onSubmit={enviar}
              className="relative rounded-2xl border border-line bg-card p-7 shadow-[var(--shadow)] md:p-9"
            >
              <span className="absolute -top-3 left-7 rounded-full bg-flame px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#fdf3ec]">
                Reply &lt; 24h
              </span>
              <h3 className="font-display text-2xl font-bold text-ink">Send me a message</h3>
              <p className="mt-1.5 text-[13px] text-soft">Your email client will open with everything pre-filled.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="nombre" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
                    Your name
                  </label>
                  <input
                    id="nombre"
                    required
                    value={datos.nombre}
                    onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                    placeholder="Ana García"
                    className={campo}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={datos.email}
                    onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                    placeholder="ana@company.com"
                    className={campo}
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
                    Tell me about it
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={datos.mensaje}
                    onChange={(e) => setDatos({ ...datos, mensaje: e.target.value })}
                    placeholder="We have a BI project that needs…"
                    className={`${campo} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg bg-flame px-5 py-3.5 text-sm font-semibold text-[#fdf3ec] shadow-[0_10px_24px_-10px_var(--flame)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_var(--flame)] active:translate-y-0"
              >
                {enviado ? (
                  <>
                    <IconoCheck width={16} height={16} />
                    Message ready to send!
                  </>
                ) : (
                  <>
                    Send message
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      <IconoEnviar width={15} height={15} />
                    </span>
                  </>
                )}
              </button>

              {enviado && (
                <p role="status" className="mt-4 rounded-lg border border-pine/40 bg-pinesoft px-4 py-2.5 text-[12.5px] font-medium text-pine">
                  Your email client just opened with the message ready. Thanks for reaching out!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="no-print border-t border-line px-6 py-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-bold text-ink">
              {perfil.nombre} <span className="text-flame">·</span> CV Web
            </p>
            <p className="mt-1 font-mono text-[11px] text-soft">
              Designed & built by hand with React + Vite + Tailwind · {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[11px] text-soft">Made in Turin with plenty of espresso</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group grid h-10 w-10 place-items-center rounded-lg border border-line text-soft transition-all duration-300 hover:-translate-y-1 hover:border-flame hover:text-flame"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-0.5">
                <path d="M12 19.5v-15M6 10.5l6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
