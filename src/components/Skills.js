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
      <div className=" flex- my-4 mx-auto max-w-lg flex-col space-y-6 md:mx-12 md:grid md:max-w-none md:grid-cols-5 md:gap-6 md:space-y-0 ">
        {/* Celdas de habilidades */}
        {skillsAbout.map((x) => {
          return (
            <div
              key={x.id}
              className="h-full w-full rounded-lg bg-slate-50 p-2 shadow-lg  md:col-span-2 md:col-start-1"
            >
              <h3 className="font-semibold">{x.skill}</h3>
              <p className="pl-2 pt-2">{x.texto}</p>
            </div>
          );
        })}
        {/* Celda de logos */}
        <div className=" h-full w-full rounded-lg bg-slate-50 p-2 shadow-lg md:col-start-3 md:col-end-6 md:row-span-4 md:row-start-1">
          <h3 className="fontd-semibold">
            Programar con las siguientes herramientas
          </h3>
          <Logos titulo="Web Development" logosObject={logosWeb} />
          <Logos titulo="Data Management" logosObject={logosData} />
          <Logos titulo="Bases de Datos" logosObject={logosDatabase} />
          <Logos titulo="Quality Assurance" logosObject={logosQuality} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
