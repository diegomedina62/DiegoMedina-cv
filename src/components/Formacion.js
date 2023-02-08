import Basica from './formaciones/Basica';
import Freecodecamp from './formaciones/Freecodecamp';
import Alkemy from './formaciones/Alkemy';
import Idioma from './formaciones/Idioma';

const Formacion = () => {
  return (
    <section id="formacion">
      <h1 className="mt-20">Formación</h1>
      <div className="space-y-10 lg:flex lg:space-y-0">
        {/* Formacion basica */}

        <Basica />
        <Idioma />
      </div>

      {/* Formacion en programacion */}
      <div>
        <h2 className="mt-10 font-bold">Formación en Programación</h2>
        <Freecodecamp />
        <Alkemy />
      </div>
    </section>
  );
};
export default Formacion;
