const Logos = ({ titulo, logosObject }) => {
  return (
    <div>
      <ul className="mx-8 list-disc">
        <li>
          <p className="pl-2 pt-2 font-medium">{titulo}</p>
          <div className="my-4 grid grid-cols-3 place-items-center gap-6  ">
            {logosObject.map((x) => {
              return (
                <div key={x.id} className=" w-20">
                  <img className="mx-auto h-14 w-16" src={x.logo} alt={x.alt} />
                  <p className=" text-center "> {x.nombre}</p>
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Logos;
