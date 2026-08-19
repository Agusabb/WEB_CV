import { perfil } from "../data/cv";
import { IconoDescarga, IconoLinkedIn, IconoLuna, IconoSol } from "./ui";

export const NAV_ITEMS = [
  { id: "perfil", num: "01", label: "Profile" },
  { id: "experiencia", num: "02", label: "Experience" },
  { id: "investigacion", num: "03", label: "Research" },
  { id: "stack", num: "04", label: "Stack" },
  { id: "formacion", num: "05", label: "Education" },
  { id: "contacto", num: "06", label: "Contact" },
];

export function Sidebar({
  activo,
  oscuro,
  alternarTema,
  alImprimir,
}: {
  activo: string;
  oscuro: boolean;
  alternarTema: () => void;
  alImprimir: () => void;
}) {
  return (
    <>
      {/* ——— Escritorio: raíl lateral fijo ——— */}
      <aside className="no-print sticky top-0 hidden h-dvh w-64 shrink-0 flex-col justify-between overflow-y-auto border-r border-line bg-surface/70 px-6 py-7 backdrop-blur-sm lg:flex">
        <div>
          {/* Identidad */}
          <a href="#portada" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-flame bg-flamesoft font-display text-lg font-bold text-flame transition-transform duration-300 group-hover:-rotate-6">
              {perfil.iniciales}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg font-bold leading-tight text-ink">Agustín S.</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-soft">
                {perfil.rol}
              </span>
            </span>
          </a>

          {/* Estado compacto: el retrato se omite para priorizar contenido y navegación. */}
          <div className="mt-7 flex items-start gap-3 rounded-xl border border-pine/30 bg-pinesoft px-4 py-3.5">
            <span className="relative mt-1 flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-pine" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-pine">Availability</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-ink">{perfil.disponibilidad}</p>
            </div>
          </div>

          {/* Navegación con scrollspy */}
          <nav className="mt-7" aria-label="CV sections">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const activoItem = activo === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`nav-link flex items-baseline gap-3 py-1.5 text-sm transition-colors duration-300 ${
                        activoItem ? "is-active font-semibold text-ink" : "text-soft hover:text-ink"
                      }`}
                    >
                      <span className={`font-mono text-[10px] ${activoItem ? "text-flame" : "text-soft/70"}`}>
                        {item.num}
                      </span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-8 space-y-5">
          {/* Acciones */}
          <div className="flex gap-2">
            <button
              onClick={alImprimir}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-flame px-3 py-2.5 text-xs font-semibold text-[#fdf3ec] shadow-[0_8px_20px_-8px_var(--flame)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_-8px_var(--flame)] active:translate-y-0"
            >
              <IconoDescarga width={15} height={15} />
              PDF CV
            </button>
            <button
              onClick={alternarTema}
              aria-label={oscuro ? "Switch to light theme" : "Switch to dark theme"}
              className="grid w-11 place-items-center rounded-lg border border-line text-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-flame/60 hover:text-flame"
            >
              {oscuro ? <IconoSol /> : <IconoLuna />}
            </button>
          </div>

          {/* Redes */}
          <div className="flex items-center justify-between border-t border-line pt-4">
            {perfil.redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={red.nombre}
                className="text-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-flame"
              >
                <IconoLinkedIn width={19} height={19} />
              </a>
            ))}
            <span className="font-mono text-[10px] tracking-widest text-soft/70">dossier v2.6</span>
          </div>
        </div>
      </aside>

      {/* ——— Móvil: cabecera compacta ——— */}
      <header className="no-print sticky top-0 z-40 border-b border-line bg-surface/85 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#portada" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md border-2 border-flame bg-flamesoft font-display text-sm font-bold text-flame">
              {perfil.iniciales}
            </span>
            <span className="font-display text-base font-bold text-ink">Agustín Sabbione</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={alImprimir}
              className="flex items-center gap-1.5 rounded-md bg-flame px-3 py-2 text-[11px] font-semibold text-[#fdf3ec] transition-transform active:scale-95"
            >
              <IconoDescarga width={13} height={13} />
              PDF
            </button>
            <button
              onClick={alternarTema}
              aria-label={oscuro ? "Switch to light theme" : "Switch to dark theme"}
              className="grid h-9 w-9 place-items-center rounded-md border border-line text-soft transition-colors hover:text-flame"
            >
              {oscuro ? <IconoSol width={16} height={16} /> : <IconoLuna width={16} height={16} />}
            </button>
          </div>
        </div>
        <nav aria-label="CV sections" className="overflow-x-auto">
          <ul className="flex gap-5 whitespace-nowrap px-5 pb-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    activo === item.id ? "text-flame" : "text-soft"
                  }`}
                >
                  {item.num}·{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
