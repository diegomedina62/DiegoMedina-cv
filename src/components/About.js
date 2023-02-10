import { cargosAbout } from '../data';
import fotoperfil from '../images/fotoPerfil.jpg';
import PersonalData from './PersonalData';

const About = () => {
  return (
    <section id="about" className="">
      {/* presentacion y parrafo inicial */}
      <h1>Presentación</h1>
      <p>
        Me apasiona la programación y el uso de algoritmos para el manejo de
        datos. Mi objetivo es desarrollar herramientas de programación para
        optimizar el manejo, cálculo y presentación de datos, con el fin de
        extraer conclusiones relevantes para el diseño, operación o evaluaciones
        de riesgo en proyectos civiles.{' '}
      </p>

      {/* container foto y roles */}
      <div className=" flex flex-col items-center py-4 lg:flex-row lg:space-x-8">
        {/* foto */}
        <div className="mt-4 w-10/12 lg:basis-1/2">
          <img
            src={fotoperfil}
            alt="Foto de Perfil de Diego Medina"
            className="rounded-lg"
          />
          <PersonalData />
          <p className="font-bold">
            Email:{' '}
            <a
              className="font-normal text-blue-900 underline"
              href="mailto:diegoleonmedina62@gmail.com"
            >
              diegoleonmedina62@gmail.com
            </a>
          </p>
        </div>

        {/* roles */}
        <div className="py-8 lg:basis-1/2 lg:py-0">
          <ul>
            {cargosAbout.map((x) => {
              return (
                <li key={x.id} className="">
                  <h2 className="pt-4">{x.cargo}</h2>
                  <p>{x.texto}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
