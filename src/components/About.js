import { cargosAbout, skillsAbout } from '../data';
import fotoperfil from '../images/fotoPerfil.jpg';
const About = () => {
  return (
    <section className="py-4">
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
        <div className="mt-4 lg:basis-3/5">
          <img
            src={fotoperfil}
            alt="Foto de Perfil de Diego Medina"
            className="rounded-lg"
          />
        </div>

        {/* roles */}
        <div className="py-8 lg:basis-2/5 lg:py-0">
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

      {/* container de skills */}
      <div className="">
        <h1 className="">Habilidades</h1>
        {/* celdas de skills  */}
        <ul className="m-4 grid grid-cols-2 place-items-stretch gap-8 lg:mx-auto lg:w-10/12 lg:grid-cols-3">
          {skillsAbout.map((x) => {
            return (
              <li key={x.id}>
                <div className=" h-full w-full rounded-lg bg-slate-100 p-2 shadow-lg hover:-translate-y-1 hover:translate-x-1 hover:scale-105">
                  <h3 className="font-semibold">{x.skill}</h3>
                  <p className="pl-2 font-light">{x.texto}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default About;
