import {
  skillsAbout,
  logosWeb,
  logosData,
  logosQuality,
  logosDatabase,
} from '../data';
import Logos from './Logos';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="">Habilidades</h1>
      {/* celdas de skills  */}
      <div className=" my-4 flex flex-col space-y-6">
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
          <h3 className="fontd-semibold">Heramientas de programación</h3>
          <Logos titulo="Web development" logosObject={logosWeb} />
          <Logos titulo="Data Managment" logosObject={logosData} />
          <Logos titulo="Base de Datos" logosObject={logosDatabase} />
          <Logos titulo="Quality Assurance" logosObject={logosQuality} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
