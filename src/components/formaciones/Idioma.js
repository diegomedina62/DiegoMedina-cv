const Idioma = () => {
  return (
    <div className="lg:basis-1/2">
      <h2 className="font-bold"> Idioma</h2>
      <div className="mx-8 mt-4 mb-4 flex flex-row space-x-4">
        {/* bisagra */}
        <div className="relative mt-2 -mb-8 w-1 bg-slate-600 pt-1">
          <div className="absolute -left-2 -top-1 h-fit w-fit">
            <svg
              className="stroke-slate-600"
              viewBox="0 0 4 4"
              width="1.25rem"
              height="1.25rem"
            >
              <circle cx="2" cy="2" r="1.5" stroke-width="0.7" fill="white" />
            </svg>
          </div>
        </div>
        {/* container de Idioma*/}
        <div className="w-full pl-2">
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
