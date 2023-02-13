const data = [
  { titulo: 'Fecha de nacimiento: ', texto: '21 de julio de 1987' },
  { titulo: 'Lugar: ', texto: 'Medellín - Colombia' },
  { titulo: 'Profesión: ', texto: 'Ingeniero Civil' },
  { titulo: 'Residencia: ', texto: 'Buenos Aires - Argentina' },
];

const PersonalData = () => {
  return (
    <div className=" mt-4">
      {data.map((x) => {
        return (
          <p className="font-bold">
            {x.titulo} <span className="font-normal">{x.texto}</span>
          </p>
        );
      })}
    </div>
  );
};
export default PersonalData;
