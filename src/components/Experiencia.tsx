import { experiencia } from "../data/cv";
import { useReveal } from "../hooks";
import { IconoCheck, Reveal, SectionHeading, Tag } from "./ui";

function EntradaExperiencia({
  item,
  indice,
}: {
  item: (typeof experiencia)[number];
  indice: number;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>(0.1);
  const tonos: ("flame" | "pine" | "amber")[] = ["flame", "pine", "amber"];

  return (
    <li
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} relative pl-10 md:pl-14`}
      style={{ ["--reveal-delay" as string]: `${indice * 90}ms` }}
    >
      {/* Nodo de la línea de tiempo */}
      <span
        className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border-2 bg-bg transition-all duration-500 md:left-1 ${
          item.destacada ? "border-flame text-flame" : "border-line text-soft"
        }`}
        aria-hidden="true"
      >
        <span className={`h-2 w-2 rounded-full ${item.destacada ? "bg-flame" : "bg-soft/60"}`} />
      </span>

      <article
        className={`group rounded-xl border p-6 transition-all duration-400 md:p-8 ${
          item.destacada
            ? "border-flame/40 bg-gradient-to-br from-flamesoft/70 to-transparent hover:shadow-[var(--shadow)]"
            : "border-line bg-card hover:-translate-y-1 hover:border-pine/50 hover:shadow-[var(--shadow)]"
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
              {item.puesto}
              {item.destacada && (
                <span className="ml-3 inline-block translate-y-[-2px] rounded-full bg-flame px-2.5 py-0.5 align-middle font-mono text-[9px] uppercase tracking-[0.16em] text-[#fdf3ec]">
                  Present
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm font-semibold text-pine">
              {item.empresa} <span className="font-normal text-soft">· {item.ubicacion}</span>
            </p>
          </div>
          <span className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-wider text-soft">
            {item.periodo}
          </span>
        </div>

        <p className="mt-4 text-[14.5px] leading-relaxed text-soft">{item.descripcion}</p>

        <ul className="mt-5 space-y-2.5">
          {item.logros.map((logro) => (
            <li key={logro} className="flex gap-3 text-[14px] leading-relaxed text-soft">
              <span className="mt-0.5 shrink-0 text-flame">
                <IconoCheck width={15} height={15} />
              </span>
              <span>{logro}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((tech, i) => (
            <Tag key={tech} tono={tonos[i % tonos.length]}>
              {tech}
            </Tag>
          ))}
        </div>
      </article>
    </li>
  );
}

export function Experiencia() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);

  return (
    <section id="experiencia" className="scroll-mt-24 border-t border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <SectionHeading
        numero="02"
        kicker="Career"
        titulo="Experience"
        descripcion="Eight years across three worlds — academic research, global consulting and enterprise BI — with one constant: turning complex data into clear decisions."
      />

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} relative`}>
        {/* Línea vertical que se dibuja */}
        <span
          className="timeline-line absolute bottom-4 left-[11px] top-2 w-px bg-gradient-to-b from-flame via-line to-transparent md:left-3"
          aria-hidden="true"
        />
        <ol className="space-y-10">
          {experiencia.map((item, i) => (
            <EntradaExperiencia key={item.empresa} item={item} indice={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
