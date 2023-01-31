import { profesionHome } from '../data';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-[url('./images/home1.png')] bg-cover bg-no-repeat "
    >
      <div className="ml-28 flex h-screen w-fit  flex-col justify-center ">
        <div className="rounded-3xl  p-4 backdrop-blur-sm">
          <h1 className=" py-6 text-4xl font-bold">
            Diego León Medina Velásquez
          </h1>
          <ul>
            {profesionHome.map((x) => {
              return (
                <li key={x.id}>
                  <p className=" text-2xl font-semibold ">
                    {x.profesion}{' '}
                    <span className="text-xl italic">{x.subtexto}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;
