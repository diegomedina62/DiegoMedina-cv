import { expIng } from '../data';
import { expDocencia } from '../data';
import Rol from './experiencia/Rol';
const Experiencia = () => {
  return (
    <section id="experiencia">
      <h1>Experiencia Profesional</h1>

      {/* container de experiencia segun rol */}
      <div className="flex flex-col space-y-10 lg:grid lg:grid-cols-2 lg:items-center">
        <Rol titulo="En Ingenieria y Programación" dataObject={expIng} />
        <Rol titulo="En Docencia" dataObject={expDocencia} />
      </div>
    </section>
  );
};
export default Experiencia;
