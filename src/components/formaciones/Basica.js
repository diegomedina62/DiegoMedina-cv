import { eduBasica } from '../../data';
const Basica = () => {
  return (
    <div className="lg:basis-1/2">
      <h2 className="font-bold">Formación Básica</h2>
      {eduBasica.map((x) => {
        return (
          <div key={x.id} className="mx-8 mt-4 mb-4 flex flex-row space-x-4">
            {/* bisagra */}
            <div className="relative mt-2 -mb-8 w-1 bg-slate-600 pt-1">
              <div className="absolute -left-2 -top-1 h-fit w-fit">
                <svg
                  className="stroke-slate-600"
                  viewBox="0 0 4 4"
                  width="1.25rem"
                  height="1.25rem"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="1.5"
                    stroke-width="0.7"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {/* container de "educaciones basicas" */}
            <div className="w-full pl-2">
              <h3>{x.titulo}</h3>
              <p className=" text-base">{x.subtitulo}</p>
              <p className="text-sm italic text-gray-800">{x.acta}</p>
              <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">
                {x.fechas}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Basica;
