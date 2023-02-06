const Rol = ({ titulo, dataObject }) => {
  return (
    <div>
      <h2 className="font-bold">{titulo}</h2>

      {dataObject.map((x) => {
        return (
          <div className="mx-8 mt-4 mb-10 flex flex-row space-x-4">
            {/* bisagra */}
            <div className=" mt-4 w-1 bg-slate-600"></div>

            {/* container de "lugar trabajados" */}
            <div className="w-full pl-2">
              <h3>{x.lugar}</h3>
              <p className=" text-base text-gray-800">{x.subtitulo}</p>
              <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">
                {x.fechas}
              </p>
              {/* componente para "funciones desempeñadas" */}
              <ul className="mx-8 list-disc">
                {x.funciones.map((y) => {
                  return <li className="text-sm">{y}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Rol;
