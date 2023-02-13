const data = [
  { id: 131, titulo: 'Fecha de nacimiento: ', texto: '21 de julio de 1987' },
  { id: 132, titulo: 'Lugar: ', texto: 'Medellín - Colombia' },
  { id: 133, titulo: 'Profesión: ', texto: 'Ingeniero Civil' },
  { id: 134, titulo: 'Residencia: ', texto: 'Buenos Aires - Argentina' },
];

const PersonalData = () => {
  return (
    <div className=" mt-4">
      {data.map((x) => {
        return (
          <p key={x.id} className="font-bold">
            {x.titulo} <span className="font-normal">{x.texto}</span>
          </p>
        );
      })}
    </div>
  );
};
export default PersonalData;
