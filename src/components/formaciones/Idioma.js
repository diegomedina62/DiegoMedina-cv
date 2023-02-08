import Bisagra from '../Bisagra';
const Idioma = () => {
  return (
    <div className="lg:basis-1/2">
      <h2 className="font-bold"> Idioma</h2>
      <div className="ml-1 mt-4 mb-10 flex flex-row space-x-4 lg:mx-8">
        {/* bisagra */}
        <Bisagra />

        {/* container de Idioma*/}
        <div className="w-full lg:pl-2">
          <h3>Ingles</h3>
          <p>Nivel avanzado, oral y escrito. </p>
          <p>
            Universidad Pontificia Bolivariana. Programa de Lenguas Extranjeras
            (13 niveles)
          </p>
          <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">1998 -2003</p>
        </div>
      </div>
    </div>
  );
};
export default Idioma;
