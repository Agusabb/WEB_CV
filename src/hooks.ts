import { useCallback, useEffect, useRef, useState } from "react";

/* ¿El usuario prefiere movimiento reducido? */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* Revela un elemento cuando entra en el viewport (una sola vez) */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* Efecto «decodificación» para el nombre: caracteres aleatorios que se fijan */
const GLIFOS = "#/<>{}[]*+=%$&@!?";
export function useScramble(texto: string, velocidad = 34) {
  const reduced = usePrefersReducedMotion();
  const [salida, setSalida] = useState(reduced ? texto : "");
  useEffect(() => {
    if (reduced) {
      setSalida(texto);
      return;
    }
    let frame = 0;
    const total = texto.length * 3 + 8;
    const id = window.setInterval(() => {
      frame += 1;
      const fijados = Math.floor((frame / total) * texto.length * 1.35);
      const siguiente = texto
        .split("")
        .map((ch, i) => {
          if (ch === " " || ch === "\u00A0") return ch;
          if (i < fijados) return ch;
          return GLIFOS[Math.floor(Math.random() * GLIFOS.length)];
        })
        .join("");
      setSalida(siguiente);
      if (fijados >= texto.length) {
        setSalida(texto);
        window.clearInterval(id);
      }
    }, velocidad);
    return () => window.clearInterval(id);
  }, [texto, velocidad, reduced]);
  return salida;
}

/* Scrollspy: qué sección está activa ahora mismo */
export function useScrollSpy(ids: string[]) {
  const [activo, setActivo] = useState(ids[0] ?? "");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActivo(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return activo;
}

/* Tema claro / oscuro con persistencia */
export function useTheme() {
  const [oscuro, setOscuro] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", oscuro);
    try {
      localStorage.setItem("cv-theme", oscuro ? "dark" : "light");
    } catch {
      /* almacenamiento no disponible */
    }
  }, [oscuro]);
  const alternar = useCallback(() => setOscuro((v) => !v), []);
  return { oscuro, alternar };
}

/* Barra de progreso de lectura de la página */
export function useScrollProgress() {
  const [progreso, setProgreso] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgreso(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return progreso;
}
