/* ============================================================
   CV DATA — edit this file to update every section of the site.
   ============================================================ */

export const perfil = {
  nombre: "Agustín Sabbione",
  iniciales: "AS",
  rol: "Data Analyst",
  rolTyped: "Data Analyst · Qlik & Power BI",
  resumen:
    "Data Analyst with 8+ years turning complex data into clear decisions — from bioinformatics pipelines in a CONICET lab to enterprise BI platforms built on Qlik and Power BI. I design data models, build interactive dashboards and keep the whole platform governed, secure and humming. Currently based in Turin and open to relocation to Spain.",
  disponibilidad: "Open to relocation — Spain",
  email: "sabbioneagustin@gmail.com",
  telefono: "+39 351 494 0002",
  telefonoHref: "+393514940002",
  ubicacion: "Turin (TO), Italy",
  redes: [{ nombre: "LinkedIn", url: "https://www.linkedin.com/in/agustin-sabbione/" }],

  /* Números que cuentan la trayectoria de un vistazo */
  stats: [
    { valor: 8, sufijo: "+", etiqueta: "years in data" },
    { valor: 2, sufijo: "", etiqueta: "university degrees" },
    { valor: 2, sufijo: "", etiqueta: "published papers" },
    { valor: 4, sufijo: "", etiqueta: "languages" },
  ],

  personales: [
    { etiqueta: "Citizenship", valor: "Italian · EU passport" },
    { etiqueta: "Born", valor: "09 / 12 / 1990" },
    { etiqueta: "Driving licence", valor: "Category B · own vehicle" },
  ],

  idiomas: [
    { idioma: "Spanish", nivel: "Native", porcentaje: 100 },
    { idioma: "English", nivel: "C1", porcentaje: 85 },
    { idioma: "Italian", nivel: "B2", porcentaje: 70 },
    { idioma: "French", nivel: "A2", porcentaje: 35 },
  ],

  intereses: [
    "Espresso hunting in Turin",
    "Road trips across Italy",
    "Science communication",
    "Mate — Argentine roots",
  ],
};

/* Marquesina de tecnologías bajo el hero */
export const marquee = [
  "QlikSense",
  "QlikView",
  "Power BI",
  "SQL Server",
  "Python",
  "R",
  "Bash",
  "Linux",
  "Excel",
  "ETL",
  "Data Modelling",
  "Stored Procedures",
  "Matplotlib",
  "ggplot2",
  "Plotly",
  "QMC",
];

export type ExperienciaItem = {
  puesto: string;
  empresa: string;
  ubicacion: string;
  periodo: string;
  descripcion: string;
  destacada?: boolean;
  logros: string[];
  stack: string[];
};

export const experiencia: ExperienciaItem[] = [
  {
    puesto: "Data Analyst / Qlik Developer",
    empresa: "Orbyta Tech",
    ubicacion: "Turin, Italy",
    periodo: "Sep 2024 — Present",
    destacada: true,
    descripcion:
      "Full-stack BI work for enterprise clients: from data modelling to dashboard architecture and platform governance.",
    logros: [
      "Design, develop and maintain internal logic, complex data models and backend/frontend architecture for highly complex interactive dashboards.",
      "Configure, automate and monitor reload tasks in the Qlik Management Console (QMC).",
      "Manage user permissions, license allocation and design advanced security rules.",
      "Work close to clients to gather technical requirements, design optimal data models and present tailored solutions.",
    ],
    stack: ["QlikSense", "QlikView", "QMC", "SQL Server"],
  },
  {
    puesto: "Data Analyst / Qlik Developer",
    empresa: "Accenture",
    ubicacion: "Rosario, Argentina · full remote",
    periodo: "2021 — Apr 2024",
    descripcion:
      "BI development for the Information Security area of a global client — modelling, reporting and database support, end to end.",
    logros: [
      "Developed and maintained interactive, accessible dashboards that report clearly to the Information Security area.",
      "Performed ETL from multiple sources — databases and spreadsheets — cleaning, transforming and structuring data to guarantee model accuracy and integrity.",
      "Wrote SQL queries and stored procedures to extract from and maintain one of the business's core databases.",
      "Interacted with clients to gather data requirements, design tailored solutions and keep technical documentation up to date.",
      "Mentored and gave technical guidance to new members joining the development team.",
    ],
    stack: ["QlikSense", "SQL", "ETL", "Data Modelling"],
  },
  {
    puesto: "PhD Researcher · CONICET Fellow",
    empresa: "ICiAgro Litoral (UNL–CONICET)",
    ubicacion: "Esperanza, Santa Fe, Argentina",
    periodo: "2017 — 2021",
    descripcion:
      "Doctoral research on the role of small RNAs in fruit ripening and organoleptic properties — where biology met big data long before I called myself an analyst.",
    logros: [
      "Built bioinformatics pipelines and automated scripts in Python, Bash and R to ingest, clean and process large volumes of data.",
      "Ran advanced statistical analysis in R and Excel; produced high-impact charts and technical reports with Matplotlib, Plotly and ggplot2.",
      "Trained new team members, prepared technical documentation and presented results orally.",
      "Lead author of 2 scientific papers published in indexed international journals.",
    ],
    stack: ["Python", "R", "Bash", "Statistics"],
  },
];

/* Sección 03 — Investigación & publicaciones */
export const investigacion = {
  destacado: {
    imagen: "https://image.qwenlm.ai/generated-images/76dac4d2-6ae0-492f-b029-9ef395f9bc94/_result.png",
    etiquetas: ["PhD Research", "CONICET · UNL"],
    titulo: "Small RNAs in fruit ripening",
    resumen:
      "Doctoral research on the role of small RNAs in fruit ripening and their influence on the development of organoleptic properties — the project where high-volume omics data first taught me to think like an analyst.",
  },
  secundario: {
    imagen: "https://image.qwenlm.ai/generated-images/569b1bd6-3876-461a-a315-3043bcc30726/_result.png",
    etiquetas: ["Business Intelligence", "Orbyta · Accenture"],
    titulo: "Dashboards, models & governance",
    resumen:
      "Highly complex interactive dashboards backed by clean data models: reload automation, security rules, licensing and client-facing BI consulting — BI as a product, not just a report.",
  },
  hitos: [
    {
      anio: "2021",
      titulo: "PhD Thesis",
      detalle: "Role of small RNAs in fruit ripening and organoleptic properties — Universidad Nacional del Litoral.",
    },
    {
      anio: "2017–21",
      titulo: "2 peer-reviewed papers",
      detalle: "Lead author in indexed international journals on fruit ripening and small RNA biology.",
    },
    {
      anio: "2017–21",
      titulo: "Bioinformatics pipelines",
      detalle: "Python, Bash and R pipelines for ingestion, cleaning and processing of high-volume omics data.",
    },
  ],
  aporte: [
    {
      icono: "panel" as const,
      titulo: "BI architecture",
      detalle: "Data models and dashboard design for highly complex, client-specific requirements.",
    },
    {
      icono: "backend" as const,
      titulo: "Governance & security",
      detalle: "QMC automation, reload tasks, security rules and license administration.",
    },
    {
      icono: "ruta" as const,
      titulo: "Data pipelines",
      detalle: "From messy sources to clean models: ETL, scripting and report automation.",
    },
    {
      icono: "libro" as const,
      titulo: "Mentoring & docs",
      detalle: "Onboarding, technical guidance and documentation that teams actually read.",
    },
  ],
};

export const habilidades = {
  grupos: [
    {
      icono: "frontend" as const,
      titulo: "Business Intelligence",
      items: ["QlikSense", "QlikView", "Power BI (PL-300)", "QMC", "Dashboard design", "Data modelling"],
    },
    {
      icono: "backend" as const,
      titulo: "Data & Databases",
      items: ["Microsoft SQL Server", "Advanced queries & views", "Stored procedures", "ETL", "Data cleaning", "Linux · Bash"],
    },
    {
      icono: "tools" as const,
      titulo: "Programming & Analysis",
      items: ["Python", "R", "Bash scripting", "Matplotlib", "Plotly", "ggplot2", "Excel (advanced)"],
    },
  ],
  niveles: [
    { nombre: "Qlik ecosystem (Sense / View)", nivel: 95 },
    { nombre: "Microsoft Excel & reporting", nivel: 95 },
    { nombre: "Microsoft SQL Server", nivel: 90 },
    { nombre: "Power BI", nivel: 85 },
    { nombre: "Linux & Bash", nivel: 75 },
    { nombre: "Python & R", nivel: 70 },
  ],
};

export const educacion = [
  {
    titulo: "PhD in Agricultural Sciences",
    centro: "Faculty of Agricultural Sciences · Universidad Nacional del Litoral",
    periodo: "2017 — 2021",
    nota: "CONICET fellowship · ICiAgro Litoral",
    destacada: true,
  },
  {
    titulo: "BSc in Biotechnology",
    centro: "Faculty of Biochemistry and Biological Sciences · Universidad Nacional del Litoral",
    periodo: "2009 — 2015",
    nota: "",
    destacada: false,
  },
];

export const certificaciones = [
  { nombre: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", entidad: "Microsoft", anio: "06/2026" },
  { nombre: "Data Architect Qualification", entidad: "Qlik", anio: "2022" },
  { nombre: "Business Analyst Qualification", entidad: "Qlik", anio: "2022" },
];

export const cursos = [
  { nombre: "AI Fluency: Framework & Foundations", entidad: "Anthropic", anio: "2025" },
  { nombre: "The Complete Guide to Agile Scrum Master & Kanban", entidad: "Udemy", anio: "2024" },
  { nombre: "Microsoft Excel: Advanced Dashboard Design", entidad: "Udemy", anio: "2023" },
  { nombre: "Power BI — Data Analysis & Business Intelligence", entidad: "Udemy", anio: "2023" },
  { nombre: "The Complete SQL Bootcamp: Zero to Hero", entidad: "Udemy", anio: "2023" },
  { nombre: "Data Analytics", entidad: "Coderhouse", anio: "2021" },
  { nombre: "Machine Learning for Bioinformatics", entidad: "Universidad Nacional del Litoral", anio: "2021" },
  { nombre: "Introduction to R for Data Analysis & Bioinformatics", entidad: "Universidad Nacional del Litoral", anio: "2020" },
  { nombre: "Introduction to Python for Data Science", entidad: "Universidad Nacional del Litoral", anio: "2019" },
];
