import type { CSSProperties, ReactNode, SVGProps } from "react";
import { useReveal } from "../hooks";

/* ————— Revelado al entrar en pantalla ————— */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "figure";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ————— Cabecera de sección, estilo expediente ————— */
export function SectionHeading({
  numero,
  kicker,
  titulo,
  descripcion,
}: {
  numero: string;
  kicker: string;
  titulo: string;
  descripcion?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-flame">
        <span className="inline-block h-px w-10 bg-flame" aria-hidden="true" />
        {numero} / {kicker}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl">
        {titulo}
      </h2>
      {descripcion && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-soft">{descripcion}</p>}
    </Reveal>
  );
}

/* ————— Etiqueta / chip ————— */
export function Tag({ children, tono = "neutro" }: { children: ReactNode; tono?: "neutro" | "flame" | "pine" | "amber" }) {
  const tonos = {
    neutro: "border-line text-soft",
    flame: "border-flame/40 bg-flamesoft text-flame",
    pine: "border-pine/40 bg-pinesoft text-pine",
    amber: "border-amber/40 bg-ambersoft text-amber",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-transform duration-300 hover:-translate-y-0.5 ${tonos[tono]}`}
    >
      {children}
    </span>
  );
}

/* ————— Marquesina de tecnologías ————— */
export function Marquesina({ items }: { items: string[] }) {
  const doble = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-line bg-surface/60 py-3" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {doble.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-soft">
            {item}
            <svg width="10" height="10" viewBox="0 0 10 10" className="text-flame">
              <path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ————— Sello circular giratorio «CV · 2025» ————— */
export function SelloGiratorio({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="spin-slow relative h-28 w-28 md:h-36 md:w-36">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="circulo-sello" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
          </defs>
          <circle cx="50" cy="50" r="49" fill="none" stroke="var(--line)" strokeWidth="1" />
          <text className="font-mono" fontSize="8.2" letterSpacing="2.6" fill="var(--flame)">
            <textPath href="#circulo-sello">HOJA DE VIDA · CV WEB · MMXXV ·</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-2xl font-bold text-ink md:text-3xl">AV</span>
        </div>
      </div>
    </div>
  );
}

/* ————— Iconografía propia (SVG inline, trazo 1.6) ————— */
type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconoFrontend = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="M3 8.5h18M6 6.7h.01M8.4 6.7h.01" />
    <path d="m8.5 12-2.5 2.5L8.5 17M15.5 12l2.5 2.5L15.5 17M13.2 11.2l-2.4 6.6" />
  </svg>
);
export const IconoBackend = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" />
    <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
    <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    <path d="M9 12.5h.01M9 18.5h.01" />
  </svg>
);
export const IconoHerramientas = (p: P) => (
  <svg {...base(p)}>
    <path d="M14.5 6.5a4 4 0 0 0-5.4 5.1L4 16.7a2 2 0 1 0 2.8 2.8l5.1-5.1a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.5-.7-.7-2.5Z" />
    <path d="m5.4 18.4.01.01" />
  </svg>
);
export const IconoMontana = (p: P) => (
  <svg {...base(p)}>
    <path d="m3 19 6-10 3.2 5.1L14.5 11 21 19Z" />
    <path d="M9 9 7.5 6.5 6 9" />
    <circle cx="17.5" cy="5.5" r="1.8" />
  </svg>
);
export const IconoCamara = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.4" />
  </svg>
);
export const IconoCafe = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 9h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" />
    <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M7.5 3.5c0 1-1 1.2-1 2.2M11 3.5c0 1-1 1.2-1 2.2M14.5 3.5c0 1-1 1.2-1 2.2" />
  </svg>
);
export const IconoLibro = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21Z" />
    <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8.5 7.5h7" />
  </svg>
);
export const IconoSol = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </svg>
);
export const IconoLuna = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);
export const IconoDescarga = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.5v11M7.5 10 12 14.5 16.5 10" />
    <path d="M4.5 16.5v2.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-2.5" />
  </svg>
);
export const IconoFlecha = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15M13.5 6 19.5 12l-6 6" />
  </svg>
);
export const IconoExterno = (p: P) => (
  <svg {...base(p)}>
    <path d="M10 5H6a1.5 1.5 0 0 0-1.5 1.5V18A1.5 1.5 0 0 0 6 19.5h11.5A1.5 1.5 0 0 0 19 18v-4" />
    <path d="M13.5 4.5H19.5V10.5M19 5 11 13" />
  </svg>
);
export const IconoEmail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7.5 7.5 6 7.5-6" />
  </svg>
);
export const IconoTelefono = (p: P) => (
  <svg {...base(p)}>
    <path d="M7.5 3.5h3l1.2 4.2-2.2 1.6a12.5 12.5 0 0 0 5.2 5.2l1.6-2.2 4.2 1.2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);
export const IconoUbicacion = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.6-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);
export const IconoGitHub = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z" />
  </svg>
);
export const IconoLinkedIn = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M6.9 8.6H3.6V21h3.3ZM5.2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 13.4c0-3.4-1.8-5-4.2-5a3.6 3.6 0 0 0-3.3 1.8V8.6H10.2V21h3.3v-6.6c0-1.5.7-2.6 2.1-2.6s2 1.1 2 2.6V21H21Z" />
  </svg>
);
export const IconoX = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M17.8 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.3L5.6 21h-3l7.1-8.1L2 3h6.3l4.3 5.7Zm-1 16.2h1.7L7.6 4.7H5.8Z" />
  </svg>
);
export const IconoCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5L19.5 7" />
  </svg>
);
export const IconoBirrete = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 4 10 5-10 5L2 9Z" />
    <path d="M6.5 11.2V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.8M22 9v5" />
  </svg>
);
export const IconoCertificado = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m9.5 13.8-1.8 6.7 4.3-2.4 4.3 2.4-1.8-6.7M9.8 9l1.6 1.6L14.6 7.4" />
  </svg>
);
export const IconoEnviar = (p: P) => (
  <svg {...base(p)}>
    <path d="M20.5 3.5 3.5 10l6.5 2.5L12.5 19ZM20.5 3.5 10 12.5" />
  </svg>
);
