import { useEffect, useRef, useState } from "react";
import { marquee, perfil } from "../data/cv";
import { usePrefersReducedMotion, useReveal, useScramble } from "../hooks";
import { IconoDescarga, IconoEnviar, Reveal, SelloGiratorio } from "./ui";

/* Efecto máquina de escribir */
function Typewriter({ textos, velocidad = 46 }: { textos: string[]; velocidad?: number }) {
  const reduced = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [borrando, setBorrando] = useState(false);
  useEffect(() => {
    if (reduced) {
      setSub(textos[idx].length);
      return;
    }
    const actual = textos[idx];
    let delay = borrando ? 26 : velocidad;
    if (!borrando && sub === actual.length) delay = 2400;
    else if (borrando && sub === 0) delay = 400;
    const t = window.setTimeout(() => {
      if (!borrando) {
        if (sub < actual.length) setSub(sub + 1);
        // Con un único rol, el texto queda visible una vez escrito.
        else if (textos.length > 1) setBorrando(true);
      } else {
        if (sub > 0) setSub(sub - 1);
        else {
          setBorrando(false);
          setIdx((idx + 1) % textos.length);
        }
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [sub, borrando, idx, textos, velocidad, reduced]);
  return (
    <span aria-label={textos.join(". ")}>
      <span aria-hidden="true">
        {textos[idx].slice(0, sub)}
        <span className="caret-blink text-pine">▍</span>
      </span>
    </span>
  );
}

/* Número que cuenta desde 0 cuando entra en pantalla */
function ContadorInterno({ valor }: { valor: number }) {
  const [actual, setActual] = useState(0);
  const iniciado = useRef(false);
  useEffect(() => {
    if (iniciado.current) return;
    iniciado.current = true;
    const dur = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setActual(Math.round(valor * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [valor]);
  return <>{actual}</>;
}

function Contador({ valor, sufijo, etiqueta }: { valor: number; sufijo?: string; etiqueta: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref}>
      <p className="font-display text-4xl font-bold text-ink md:text-5xl">
        {visible ? <ContadorInterno valor={valor} /> : "0"}
        {sufijo}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-soft">{etiqueta}</p>
    </div>
  );
}

export function Hero() {
  const nombre = useScramble(perfil.nombre);
  const reduced = usePrefersReducedMotion();

  const irAContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section id="portada" className="relative flex min-h-dvh flex-col overflow-x-clip px-6 pt-14 md:px-12 lg:px-16">
      {/* Línea base del dossier */}
      <Reveal className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-soft">
        <span className="inline-block h-px w-10 bg-flame" aria-hidden="true" />
        Curriculum vitae · Dossier 2026
      </Reveal>

      {/* Nombre gigante con efecto de decodificación */}
      <div className="mt-6">
        <h1
          className="font-display font-bold leading-[0.92] tracking-tight text-ink"
          style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)" }}
        >
          <span className="block">{nombre}</span>
        </h1>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <div>
          {/* Rol con efecto máquina de escribir */}
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl font-bold text-flame md:text-2xl">
            <span aria-hidden="true" className="text-pine">▍</span>
            <Typewriter textos={[perfil.rolTyped]} velocidad={48} />
          </p>

          <Reveal delay={250}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-soft md:text-base">
              {perfil.resumen}
            </p>
          </Reveal>

          {/* Acciones */}
          <Reveal delay={380} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => window.print()}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-flame px-6 py-3.5 text-sm font-semibold text-[#fdf3ec] shadow-[0_10px_24px_-10px_var(--flame)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_var(--flame)] active:translate-y-0"
            >
              <IconoDescarga width={16} height={16} />
              Download PDF CV
            </button>
            <button
              onClick={irAContacto}
              className="group inline-flex items-center gap-2.5 rounded-lg border border-line bg-card px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-pine hover:text-pine"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <IconoEnviar width={15} height={15} />
              </span>
            </button>
          </Reveal>
        </div>

        {/* Sello + contadores */}
        <div className="flex items-center justify-between gap-6 lg:flex-col lg:items-end lg:justify-end">
          <SelloGiratorio />
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            {perfil.stats.map((stat) => (
              <Contador key={stat.etiqueta} valor={stat.valor} sufijo={stat.sufijo} etiqueta={stat.etiqueta} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquesina de tecnologías */}
      <div className="marquee mt-14 border-y border-line py-3.5 lg:mt-20" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-6 font-mono text-[12px] uppercase tracking-[0.22em] text-soft">
              {tech}
              <span className="text-flame">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
