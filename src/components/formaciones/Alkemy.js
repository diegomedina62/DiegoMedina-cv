const Alkemy = () => {
  return (
    <div className="mx-8 mt-4 mb-4 flex flex-row space-x-4">
      {/* bisagra */}
      <div className="relative mt-2 -mb-8 w-1 bg-slate-600 pt-1">
        <div className="absolute -left-2 -top-1 h-fit w-fit">
          <svg
            className="stroke-slate-600"
            viewBox="0 0 4 4"
            width="1.25rem"
            height="1.25rem"
          >
            <circle cx="2" cy="2" r="1.5" stroke-width="0.7" fill="white" />
          </svg>
        </div>
      </div>
      {/* container de Alkemy*/}
      <div className="w-full pl-2">
        <h3>Alkemy</h3>
        <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">NOV-DIC 2022</p>
        <p>Certificación en BackEnd dentro del programa Skill Up de Node.Js</p>
        <p>
          <a
            href="https://www.alkemy.org/ 
            "
            target="_blank"
            rel="noreferrer"
            className="text-blue-900"
          >
            https://www.alkemy.org/
          </a>
        </p>
        <ul className="mx-8 list-disc py-2 text-sm">
          <li className="py-1">
            <p>
              {' '}
              Programa de capacitación basado en desarrollar un proyecto en
              equipo, apoyándose en{' '}
              <span className="font-bold">metodologías ágiles</span> y{' '}
              <span className="font-bold">SCRUM</span>, para diseñar una{' '}
              <span className="font-bold">Rest API</span> para una aplicación de
              billetera electrónica, usando NodeJs. Énfasis en trabajo en equipo
              y manejo de control de versiones de{' '}
              <span className="font-bold">GIT</span> y uso de repositorios en{' '}
              <span className="font-bold">GITHUB</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Alkemy;
