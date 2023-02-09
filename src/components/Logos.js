const Logos = ({ titulo, logosObject }) => {
  return (
    <div>
      <p className="pl-2 pt-2 text-sm">{titulo}</p>
      <div className="grid grid-cols-3 space-x-4">
        {logosObject.map((x) => {
          return (
            <div key={x.id} className="my-4 max-w-fit">
              <img className="h-14 w-16" src={x.logo} alt={x.alt} />
              <p className=" text-center "> {x.nombre}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
