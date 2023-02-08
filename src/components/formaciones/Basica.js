import { eduBasica } from '../../data';
import Bisagra from '../Bisagra';

const Basica = () => {
  return (
    <div className="lg:basis-1/2">
      <h2 className="font-bold">Formación Básica</h2>
      {eduBasica.map((x) => {
        return (
          <div
            key={x.id}
            className="ml-1 mt-4 mb-4 flex flex-row space-x-4 lg:mx-8"
          >
            {/* bisagra */}
            <Bisagra />

            {/* container de "educaciones basicas" */}
            <div className="w-full lg:pl-2">
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
