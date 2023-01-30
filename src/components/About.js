import { cargosAbout, skillsAbout } from '../data';
import fotoperfil from '../images/fotoPerfil.jpg';
const About = () => {
  return (
    <section className=" my-4 ">
      <div>
        <h2>Presentación</h2>
        <p>
          Me apasiona la programación y el uso de algoritmos para el manejo de
          datos. Mi objetivo es desarrollar herramientas de programación para
          optimizar el manejo, cálculo y presentación de datos, con el fin de
          extraer conclusiones relevantes para el diseño, operación o
          evaluaciones de riesgo en proyectos civiles.{' '}
        </p>
      </div>
      <div className=" flex flex-row ">
        <div className="mt-4 basis-2/5 self-center ">
          <img src={fotoperfil} alt="Foto de Perfil de Diego Medina" />
        </div>
        <div className=" basis-3/5 px-6">
          {cargosAbout.map((x) => {
            return (
              <article className="px-4">
                <h3>{x.cargo}</h3>
                <p>{x.texto}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="ml-16">Habilidades</h3>
        <ul className="mx-auto mt-4 grid w-10/12 grid-cols-3 justify-evenly gap-8">
          {skillsAbout.map((x) => {
            return (
              <div className=" rounded-lg bg-slate-50 p-3 shadow-lg">
                <h4>{x.skill}</h4>
                <p>{x.texto}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default About;
