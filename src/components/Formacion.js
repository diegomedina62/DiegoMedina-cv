import Basica from './formaciones/Basica';
import Freecodecamp from './formaciones/Freecodecamp';
import Alkemy from './formaciones/Alkemy';
import Idioma from './formaciones/Idioma';

const Formacion = () => {
  return (
    <section>
      <h1>Formación</h1>
      <div className="lg:flex">
        {/* Formacion basica */}

        <Basica />
        <Idioma />
      </div>

      {/* Formacion en programacion */}
      <div>
        <h2 className="font-bold">Formación en Programación</h2>
        <Freecodecamp />
        <Alkemy />
      </div>
    </section>
  );
};
export default Formacion;
