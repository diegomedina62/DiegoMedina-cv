import Bisagra from '../Bisagra';

const Alkemy = () => {
  return (
    <div className="ml-1 mt-4 mb-10 flex flex-row space-x-4 lg:mx-8">
      {/* bisagra */}
      <Bisagra />
      {/* container de Alkemy*/}
      <div className="w-full lg:pl-2">
        <h3>Alkemy</h3>
        <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">Nov-Dic 2022</p>
        <p>Certificación en BackEnd dentro del programa Skill Up de Node.js</p>
        <p>
          <a
            href="https://www.alkemy.org/ 
            "
            target="_blank"
            rel="noreferrer"
            className="text-blue-900 underline"
          >
            https://www.alkemy.org/
          </a>
        </p>
        <ul className="mx-4 list-disc py-2 text-sm">
          <li className="py-1">
            <p>
              {' '}
              Programa de capacitación basado en desarrollar un proyecto en
              equipo, apoyándose en{' '}
              <span className="font-bold">metodologías ágiles</span> y{' '}
              <span className="font-bold">SCRUM</span>, para diseñar una{' '}
              <span className="font-bold">Rest API</span> para una aplicación de
              billetera electrónica, usando Node.js. Énfasis en trabajo en
              equipo y manejo de control de versiones de{' '}
              <span className="font-bold">GIT</span> y uso de repositorios en{' '}
              <span className="font-bold">GITHUB</span>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Alkemy;
