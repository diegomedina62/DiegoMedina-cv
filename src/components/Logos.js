const Logos = ({ titulo, logosObject }) => {
  return (
    <div className="md:w-full">
      <p className="pl-2 pt-2 font-medium">{titulo}</p>
      <div className="my-4  flex flex-wrap ">
        {logosObject.map((x) => {
          return (
            <div key={x.id} className=" my-2 w-20">
              <img className="mx-auto h-14 w-14" src={x.logo} alt={x.alt} />
              <p className=" text-center "> {x.nombre}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
