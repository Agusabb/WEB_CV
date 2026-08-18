import { habilidades } from "../data/cv";
import { useReveal } from "../hooks";
import { IconoBackend, IconoFrontend, IconoHerramientas, Reveal, SectionHeading } from "./ui";

const iconosGrupo = {
  frontend: (p: { width?: number; height?: number }) => <IconoFrontend {...p} />,
  backend: (p: { width?: number; height?: number }) => <IconoBackend {...p} />,
  tools: (p: { width?: number; height?: number }) => <IconoHerramientas {...p} />,
};

function BarrasNiveles() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} space-y-6`}>
      {habilidades.niveles.map((hab, i) => (
        <div key={hab.nombre}>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-sm font-semibold text-ink">{hab.nombre}</span>
            <span className="font-mono text-[11px] tracking-widest text-flame">{hab.nivel}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-linesoft">
            <div
              className="skill-fill h-full rounded-full bg-gradient-to-r from-pine via-pine to-flame"
              style={{ width: `${hab.nivel}%`, transitionDelay: `${150 + i * 110}ms` }}
            />
          </div>
        </div>
      ))}
      <p className="pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-soft/80">
        * Honest self-assessment — calibrated in code reviews.
      </p>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <SectionHeading
        numero="04"
        kicker="IT skills"
        titulo="Stack & tools"
        descripcion="Tools I use daily — and how well we get along. No endless lists: only what I have actually shipped, automated or published with."
      />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Grupos de tecnologías */}
        <div className="space-y-6">
          {habilidades.grupos.map((grupo, i) => (
            <Reveal key={grupo.titulo} delay={i * 100} className="group rounded-xl border border-line bg-card p-6 transition-colors duration-300 hover:border-pine/50 md:p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-pinesoft text-pine transition-all duration-300 group-hover:-rotate-6 group-hover:bg-flamesoft group-hover:text-flame">
                  {iconosGrupo[grupo.icono]({ width: 21, height: 21 })}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{grupo.titulo}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
                    {grupo.items.length} tools
                  </p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {grupo.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-linesoft bg-surface px-3 py-1.5 font-mono text-[12px] text-soft transition-all duration-250 hover:-translate-y-0.5 hover:border-flame/60 hover:bg-flamesoft hover:text-flame"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Niveles */}
        <Reveal delay={150} className="rounded-xl border border-line bg-card p-6 md:p-8">
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="font-display text-xl font-bold text-ink">Proficiency</h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-soft">out of 100</span>
          </div>
          <BarrasNiveles />
        </Reveal>
      </div>
    </section>
  );
}
