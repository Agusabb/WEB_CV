import { certificaciones, cursos, educacion } from "../data/cv";
import { IconoBirrete, IconoCertificado, Reveal, SectionHeading } from "./ui";

export function Formacion() {
  return (
    <section id="formacion" className="scroll-mt-24 border-t border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <SectionHeading
        numero="05"
        kicker="Education"
        titulo="Education & training"
        descripcion="Two degrees, one Microsoft certification and a decade of deliberate, curious practice."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Educación formal */}
        <div>
          <div className="space-y-6">
            {educacion.map((grado, i) => (
              <Reveal
                key={grado.titulo}
                delay={i * 110}
                className={`group rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] md:p-8 ${
                  grado.destacada ? "border-pine/50 bg-card" : "border-line bg-card"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg transition-all duration-300 group-hover:-rotate-6 ${
                      grado.destacada ? "bg-pinesoft text-pine" : "bg-linesoft text-soft"
                    }`}
                  >
                    <IconoBirrete width={22} height={22} />
                  </span>
                  <span className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-wider text-soft">
                    {grado.periodo}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink md:text-2xl">
                  {grado.titulo}
                  {grado.destacada && (
                    <span className="ml-3 inline-block translate-y-[-2px] rounded-full bg-pine px-2.5 py-0.5 align-middle font-mono text-[9px] uppercase tracking-[0.16em] text-[#eef2ea]">
                      PhD
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-soft">{grado.centro}</p>
                {grado.nota && (
                  <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-flame">{grado.nota}</p>
                )}
              </Reveal>
            ))}
          </div>

          {/* Certificaciones */}
          <Reveal delay={220} className="mt-10">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-ambersoft text-amber">
                <IconoCertificado width={17} height={17} />
              </span>
              Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certificaciones.map((cert) => (
                <li
                  key={cert.nombre}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/60"
                >
                  <div>
                    <p className="text-[14px] font-semibold leading-snug text-ink transition-colors group-hover:text-amber">
                      {cert.nombre}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">{cert.entidad}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-linesoft px-2.5 py-1 font-mono text-[11px] text-soft">
                    {cert.anio}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Cursos recientes */}
        <Reveal delay={140}>
          <h3 className="font-display text-xl font-bold text-ink">Recent courses</h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
            {cursos.length} and counting — newest first
          </p>
          <ol className="mt-6 overflow-hidden rounded-xl border border-line">
            {cursos.map((curso, i) => (
              <li
                key={curso.nombre}
                className={`group flex items-baseline justify-between gap-5 bg-card px-5 py-4 transition-colors duration-250 hover:bg-flamesoft/60 ${
                  i !== cursos.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-flame/80">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[13.5px] font-medium leading-snug text-ink transition-colors group-hover:text-flame">
                      {curso.nombre}
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-soft">{curso.entidad}</p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-soft">{curso.anio}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
