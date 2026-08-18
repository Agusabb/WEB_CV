import { perfil } from "../data/cv";
import { useReveal } from "../hooks";
import { IconoCafe, IconoCamara, IconoMontana, Reveal, SectionHeading } from "./ui";

const iconosInteres = [
  (p: { width?: number; height?: number }) => <IconoCafe {...p} />,
  (p: { width?: number; height?: number }) => <IconoMontana {...p} />,
  (p: { width?: number; height?: number }) => <IconoCamara {...p} />,
  (p: { width?: number; height?: number }) => <IconoCafe {...p} />,
];

function BarrasIdiomas() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} space-y-5`}>
      {perfil.idiomas.map((idioma, i) => (
        <div key={idioma.idioma}>
          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-ink">{idioma.idioma}</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-flame">{idioma.nivel}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-linesoft">
            <div
              className="skill-fill h-full rounded-full bg-gradient-to-r from-pine to-flame"
              style={{ width: `${idioma.porcentaje}%`, transitionDelay: `${200 + i * 120}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Sobre() {
  return (
    <section id="perfil" className="scroll-mt-24 border-t border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <SectionHeading
        numero="01"
        kicker="About"
        titulo="The short version"
        descripcion="A scientist who learned to love dashboards — and a data analyst who never stopped being rigorous."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Editorial: resumen + ficha personal */}
        <div>
          <Reveal>
            <p className="text-[17px] leading-relaxed text-soft md:text-lg">
              <span className="float-left mr-3 mt-1 font-display text-6xl font-bold leading-[0.8] text-flame" aria-hidden="true">
                I
              </span>
              spent my PhD teaching computers to read biology — pipelines in Python, Bash and R
              making sense of high-volume omics data. Then I realised the same obsession —
              <em className="text-ink not-italic font-semibold"> clean models, honest numbers, clear visual stories </em>
              — was exactly what Business Intelligence needed. Since 2021 I have been building
              enterprise dashboards at Accenture and Orbyta Tech: data models, ETL, SQL, security
              rules and the governance that keeps a BI platform trustworthy.
            </p>
          </Reveal>

          {/* Ficha rápida */}
          <Reveal delay={140} className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {[
              { etiqueta: "Location", valor: perfil.ubicacion },
              { etiqueta: "Status", valor: perfil.disponibilidad },
              ...perfil.personales,
            ].slice(0, 6).map((dato) => (
              <div key={dato.etiqueta} className="group bg-card p-5 transition-colors duration-300 hover:bg-surface">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-soft">{dato.etiqueta}</p>
                <p className="mt-1.5 text-[14px] font-semibold text-ink transition-colors duration-300 group-hover:text-flame">
                  {dato.valor}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Idiomas + intereses */}
        <div className="space-y-8">
          <Reveal delay={100} className="rounded-xl border border-line bg-card p-7">
            <h3 className="font-display text-xl font-bold text-ink">Languages</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-soft">CEFR levels</p>
            <div className="mt-6">
              <BarrasIdiomas />
            </div>
          </Reveal>

          <Reveal delay={180} className="rounded-xl border border-line bg-card p-7">
            <h3 className="font-display text-xl font-bold text-ink">Off the clock</h3>
            <ul className="mt-5 space-y-3.5">
              {perfil.intereses.map((interes, i) => (
                <li key={interes} className="group flex items-center gap-3.5 text-[14px] text-soft transition-colors duration-300 hover:text-ink">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-pinesoft text-pine transition-all duration-300 group-hover:-rotate-6 group-hover:bg-flamesoft group-hover:text-flame">
                    {iconosInteres[i % iconosInteres.length]({ width: 16, height: 16 })}
                  </span>
                  {interes}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
