import logoReact from './images/logos/logoReact.svg';
import logoHtml from './images/logos/logoHtml.svg';
import logoCss from './images/logos/logoCss.svg';
import logoNode from './images/logos/logoNode.svg';
import logoPython from './images/logos/logoPython.svg';
import logoNumpy from './images/logos/logoNumpy.svg';
import logoPandas from './images/logos/logoPandas.png';
import logoMocha from './images/logos/logoMocha.svg';
import logoChai from './images/logos/logoChai.svg';
import logoJavascript from './images/logos/logoJavascript.svg';
import logoMongo from './images/logos/logoMongo.svg';
import logoMysql from './images/logos/logoMysql.svg';
import logoD3 from './images/logos/logoD3.png';
import logoSeaborn from './images/logos/logoSeaborn.png';
import logoMat from './images/logos/logoMat.png';

export const linksNavbar = [
  // {
  //   id: 14,
  //   name: 'whatsapp',
  //   icon: 'fab fa-whatsapp fa-2x',
  //   href: '',
  // },
  {
    id: 11,
    name: 'Email',
    icon: 'far fa-envelope fa-2x',
    href: 'mailto:diegoleonmedina62@gmail.com',
  },
  {
    id: 12,
    name: 'GitHub',
    icon: 'fab fa-github fa-2x',
    href: 'https://github.com/diegomedina62',
  },
  {
    id: 13,
    name: 'FreeCodeCamp',
    icon: 'fab fa-free-code-camp fa-2x',
    href: 'https://www.freecodecamp.org/diegomedina62',
  },
];

export const menuNavbar = [
  { id: 21, text: 'Home', href: '#home' },
  { id: 22, text: 'Acerca de', href: '#about' },
  { id: 26, text: 'Habilidades', href: '#skills' },
  { id: 23, text: 'Experiencia Profesional', href: '#experiencia' },
  { id: 24, text: 'Formación', href: '#formacion' },
];

export const profesionHome = [
  {
    id: 31,
    profesion: 'Ingeniero Civil',
    subtexto: 'Matrícula No. 05202193010ANT',
  },
  { id: 32, profesion: 'Web Developer', subtexto: '' },
  { id: 33, profesion: 'Data Architect', subtexto: '' },
];

export const cargosAbout = [
  {
    id: 41,
    cargo: 'Ingeniero Civil',
    texto: `Soy ingeniero civil con experiencia en análisis de instrumentación
  geotécnica en represas de ISAGEN (San Carlos, Miel, Jaguas).
  Desarrollé una herramienta de procesamiento de datos para análisis
  de riesgo, logrando optimizar aproximadamente en un 85% el tiempo de
  trabajo de oficina.`,
  },
  {
    id: 43,
    cargo: 'Programador',
    texto: `Soy programador web en FrontEnd usando React y en Backend usando Node.js, con fines a desarrollar aplicaciones de manejo y analisis de datos. Uso Python para el tratamiento y analisis de datos y frameworks como D3.js y Seaborn y MatplotLib para la presentacion de resultados`,
  },
  {
    id: 42,
    cargo: 'Docente',
    texto: `También soy docente en formación musical. Dicté cursos de cátedra a
  grupos de hasta 40 personas, y en la actualidad dicto clases
  individuales, ayudando a mis alumnos a potenciar sus habilidades
  musicales y superar dificultades técnicas y académicas.`,
  },
];

export const skillsAbout = [
  {
    id: 51,
    skill: 'Optimizar Procesos',
    texto:
      'Revisar procesos actuales de manejo de datos, para proponer soluciones agiles y automatizadas',
  },
  {
    id: 52,
    skill: 'Implementar codigos',
    texto: 'Diseñar algoritmos y llevarlos a codigo para su implementacion',
  },
  {
    id: 53,
    skill: 'Comunicar',
    texto:
      'Capacidad de exponer en publico para explicar planes de accion o presentar resultados',
  },
  {
    id: 54,
    skill: 'Trabajar en Equipo',
    texto: 'Uso de Git y de Metodologias Agiles y SCRUM',
  },
];

export const expIng = [
  {
    id: 61,
    lugar: 'INTEINSA',
    subtitulo: 'Ingenieria,Tecnologia e Instrumentacion',
    fechas: '2009-2011',
    funciones: [
      `Creación y programación de la herramienta “MIG”, en VisualBasic 
    (MS Excel) para el manejo, transducción y procesamiento de 
    lecturas de piezómetros, celdas de deformación, vertederos de 
    caudal, pluviómetros y creación de base de datos para posterior 
    análisis de riesgo `,
      `Realización de informes trimestrales de análisis de instrumentación 
    geotécnica para centrales hidroeléctricas de ISAGEN (San Carlos, 
    Miel, Jaguas).`,
      `Presentación de resultados de informes de riesgo y planes de acción 
    en reuniones gerenciales`,
      `Diseño geotécnico de estabilización de laderas en subestación 
    eléctrica de Central Porce IV, EPM. Visita de campo, toma de 
    muestras para ensayos geotécnicos, diseño de soluciones de 
    drenajes`,
      `Trabajos de estabilización de laderas en punto de anclaje de 
    almenara de conducción de la represa Rio Grande, EPM. Visita de 
    campo, levantamiento geológico, diseño de soil nailing para 
    estabilización de ladera. 
    `,
      `Proyección de cantidades de obra y análisis de precios unitarios en 
    proyectos geotécnicos `,
    ],
  },
  {
    id: 62,
    lugar: 'O.M.C',
    subtitulo: 'Montajes eléctricos - Medellín, Colombia',
    fechas: '2005-2008',
    funciones: [
      `Programación de algoritmos en VisualBasic (MS Excel) para 
    procesamiento de información de pago de nómina 
    `,
      `Proyección de cantidades de obra, cotizaciones y liquidaciones en 
    obras de montajes eléctricos de baja y media tensión, para 
    empresas como Zenu, Coltabaco, Fritolay, Nacional de Chocolates, 
    Cervunion, Colcafé, entre otras`,
      `Tareas administrativas relacionadas a la compra y asignación de 
    recursos en obras de montajes eléctricos `,
    ],
  },
];

export const expDocencia = [
  {
    id: 71,
    lugar: 'DOCENCIA EN MUSICA',
    subtitulo: '',
    fechas: '2017-Actualidad',
    funciones: [
      `Dictado de clases particulares a estudiantes de música, diseñando 
    y creando contenido personalizado según las necesidades de 
    aprendizaje en diferentes instrumentos y/o habilidades musicales `,
    ],
  },
  {
    id: 72,
    lugar: 'TAMABA',
    subtitulo: ` Instituto Terciario de Música y Sonido. Buenos Aires - Argentina`,
    fechas: '2012-2016',
    funciones: [
      `Profesor de cátedra en cursos de Nivel I, II, III y IV (Armonía y 
        Entrenamiento auditivo)`,
      `Creación de material de docencia y textos institucionales `,
      `Dictado de Monitorias de Apoyo para estudiantes`,
      `Traductor e intérprete (inglés-español) en seminarios de artistas 
      internacionales `,
    ],
  },
  {
    id: 73,
    lugar: 'U. NACIONAL DE COLOMBIA',
    subtitulo: `Monitor en Mecánica de fluidos, Topografía y geodesia`,
    fechas: '2008-2010',
    funciones: [
      ` Realización y dictado de talleres de apoyo`,
      `Calificación de exámenes parciales y trabajos prácticos. `,
      `Realización de prácticas de campo de docencia para realizar 
      levantamientos topográficos con teodolito y estación total. Cálculo 
      de parámetros topográficos y creación de planos con curvas de 
      nivel 
      `,
    ],
  },
];

export const eduBasica = [
  {
    id: 81,
    titulo: `Titulo en Ingeniería Civil`,
    subtitulo: `Universidad Nacional de Colombia- Sede Medellin`,
    fechas: `2005-2010`,
    acta: `(Acta No.2067 Libro No.2)`,
  },
  {
    id: 82,
    titulo: `Titulo Secundario`,
    subtitulo: `Colegio San José de la Salle`,
    fechas: `2004`,
    acta: `(Acta No.001 Libro No.02 Folio No.68)`,
  },
];

export const freeCodeCamp = [
  {
    id: 91,
    item: 'Diseño Web (FrontEnd y Backend) ',
    tecnos: `HTML, CSS, Javascript, React, NodeJs y D3js 
  `,
  },
  {
    id: 92,
    item: 'Bases de Datos',
    tecnos: `MongoDB para bases no relacionales y MySQL para bases 
    relacionales`,
  },
  {
    id: 93,
    item: 'Data Analysis',
    tecnos: `Python, Numpy, Pandas, Matplotlib y Seaborn `,
  },
  {
    id: 94,
    item: 'Quality Assurance',
    tecnos: `Mocca y Chai`,
  },
];

export const logosWeb = [
  {
    id: 101,
    logo: logoJavascript,
    alt: 'logo React',
    nombre: 'Javascript',
  },
  {
    id: 102,
    logo: logoHtml,
    alt: 'logo HTML',
    nombre: 'HTML',
  },
  {
    id: 103,
    logo: logoCss,
    alt: 'logo Css',
    nombre: 'Css',
  },
  {
    id: 104,
    logo: logoReact,
    alt: 'logo React',
    nombre: 'React',
  },
  {
    id: 105,
    logo: logoNode,
    alt: 'logo Node',
    nombre: 'Node',
  },
  {
    id: 106,
    logo: logoD3,
    alt: 'logo D3.js',
    nombre: 'D3.js',
  },
];

export const logosData = [
  {
    id: 111,
    logo: logoPython,
    alt: 'logo Node',
    nombre: 'Python',
  },
  {
    id: 112,
    logo: logoNumpy,
    alt: 'logo Numpy',
    nombre: 'Numpy',
  },
  {
    id: 113,
    logo: logoPandas,
    alt: 'logo pandas',
    nombre: 'pandas',
  },

  {
    id: 114,
    logo: logoSeaborn,
    alt: 'logo Seaborn',
    nombre: 'Seaborn',
  },
  {
    id: 113,
    logo: logoMat,
    alt: 'logo Matplotlib',
    nombre: 'Matplotlib',
  },
];

export const logosDatabase = [
  {
    id: 131,
    logo: logoMongo,
    alt: 'logo MongoDB',
    nombre: 'MongaDB',
  },
  {
    id: 132,
    logo: logoMysql,
    alt: 'logo MySQL',
    nombre: 'MySQL',
  },
];

export const logosQuality = [
  {
    id: 121,
    logo: logoMocha,
    alt: 'logo Mocha',
    nombre: 'Mocha',
  },
  {
    id: 122,
    logo: logoChai,
    alt: 'logo Chai',
    nombre: 'Chai',
  },
];
