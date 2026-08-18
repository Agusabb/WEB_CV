import { useMemo } from "react";
import { useScrollProgress, useScrollSpy, useTheme } from "./hooks";
import { Sidebar, NAV_ITEMS } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Experiencia } from "./components/Experiencia";
import { Investigacion } from "./components/Investigacion";
import { Stack } from "./components/Stack";
import { Formacion } from "./components/Formacion";
import { Contacto } from "./components/Contacto";

export default function App() {
  const { oscuro, alternar } = useTheme();
  const ids = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activo = useScrollSpy(ids);
  const progreso = useScrollProgress();

  const imprimir = () => window.print();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg font-body text-ink antialiased">
      {/* Fondo ambiental: retícula + grano + halos de color */}
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="noise pointer-events-none fixed inset-0 z-[60] opacity-[0.055]" aria-hidden="true" />
      <div
        className="pointer-events-none fixed -left-32 -top-32 z-0 h-[30rem] w-[30rem] rounded-full opacity-[0.16] blur-3xl transition-opacity duration-700"
        style={{ background: "radial-gradient(circle, var(--pine) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -bottom-40 -right-40 z-0 h-[34rem] w-[34rem] rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--flame) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Barra de progreso de lectura */}
      <div
        className="no-print fixed left-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-pine via-flame to-amber"
        style={{ width: `${progreso * 100}%` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px]">
        <Sidebar activo={activo} oscuro={oscuro} alternarTema={alternar} alImprimir={imprimir} />

        <main className="min-w-0 flex-1">
          <Hero />
          <Sobre />
          <Experiencia />
          <Investigacion />
          <Stack />
          <Formacion />
          <Contacto />
        </main>
      </div>
    </div>
  );
}
