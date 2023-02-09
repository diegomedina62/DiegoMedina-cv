import { skillsAbout, logosWeb, logosData, logosQuality } from '../data';
import Logos from './Logos';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="">Habilidades</h1>
      {/* celdas de skills  */}
      <div className="m-4 grid place-items-stretch gap-8 md:mx-auto md:w-10/12 md:grid-cols-2 lg:grid-cols-3">
        {skillsAbout.map((x) => {
          return (
            <div key={x.id}>
              <div className=" h-full w-full rounded-lg bg-slate-100 p-2 shadow-lg">
                <h3 className="font-semibold">{x.skill}</h3>
                <p className="pl-2 pt-2 text-sm">{x.texto}</p>
              </div>
            </div>
          );
        })}
        <div className="h-full w-full rounded-lg bg-slate-100 p-2 shadow-lg">
          <h3 className="font-semibold">Heramientas de programación</h3>
          <Logos titulo="Para web development" logosObject={logosWeb} />
          <Logos titulo="Para Data Managment" logosObject={logosData} />
          <Logos titulo="Para Quality Assurance" logosObject={logosQuality} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
