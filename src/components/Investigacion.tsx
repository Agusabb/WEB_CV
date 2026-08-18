import { investigacion } from "../data/cv";
import { Reveal, SectionHeading, Tag } from "./ui";
import { IconoBackend, IconoFrontend, IconoHerramientas, IconoLibro } from "./ui";

const iconoAporte: Record<string, (p: { width?: number; height?: number }) => JSX.Element> = {
  panel: (p) => <IconoFrontend {...p} />,
  backend: (p) => <IconoBackend {...p} />,
  ruta: (p) => <IconoHerramientas {...p} />,
  libro: (p) => <IconoLibro {...p} />,
};

function TarjetaInvestigacion({
  imagen,
  etiquetas,
  titulo,
  resumen,
  invertida,
  delay,
}: {
  imagen: string;
  etiquetas: string[];
  titulo: string;
  resumen: string;
  invertida?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`group grid items-center gap-8 md:grid-cols-2 md:gap-12 ${invertida ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-line">
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={imagen}
            alt={titulo}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
          {/* Velo suave al pasar el cursor */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        </div>
        <span className="absolute left-4 top-4 rounded-md bg-bg/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
          Featured
        </span>
      </div>

      <div>
        <div className="flex flex-wrap gap-2">
          {etiquetas.map((et) => (
            <Tag key={et} tono="pine">
              {et}
            </Tag>
          ))}
        </div>
        <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">{titulo}</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-soft">{resumen}</p>
      </div>
    </Reveal>
  );
}

export function Investigacion() {
  return (
    <section id="investigacion" className="scroll-mt-24 border-t border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <SectionHeading
        numero="03"
        kicker="Science meets data"
        titulo="Research & highlights"
        descripcion="A PhD in Agricultural Sciences, 2 peer-reviewed papers and the bioinformatics pipelines that bridged the lab bench and the dashboard."
      />

      <div className="space-y-20 md:space-y-24">
        <TarjetaInvestigacion {...investigacion.destacado} />
        <TarjetaInvestigacion {...investigacion.secundario} invertida delay={80} />
      </div>

      {/* Hitos de investigación */}
      <Reveal delay={100} className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
        {investigacion.hitos.map((hito) => (
          <article key={hito.titulo} className="group bg-card p-7 transition-colors duration-300 hover:bg-surface md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-flame">{hito.anio}</p>
            <h4 className="mt-3 font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-flame">
              {hito.titulo}
            </h4>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-soft">{hito.detalle}</p>
          </article>
        ))}
      </Reveal>

      {/* Qué aporto */}
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {investigacion.aporte.map((item, i) => (
          <Reveal key={item.titulo} delay={i * 90} className="group rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/60 hover:shadow-[var(--shadow)]">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-flamesoft text-flame transition-all duration-300 group-hover:-rotate-6 group-hover:bg-pinesoft group-hover:text-pine">
              {iconoAporte[item.icono]({ width: 20, height: 20 })}
            </span>
            <h4 className="mt-4 font-display text-lg font-bold text-ink">{item.titulo}</h4>
            <p className="mt-2 text-[13px] leading-relaxed text-soft">{item.detalle}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
