import { profesionHome } from '../data';

const Home = () => {
  return (
    <section
      id="home"
      className="flex h-screen bg-[url('./images/home1.png')] bg-cover bg-no-repeat "
    >
      <div className="my-auto ml-16 h-fit w-fit rounded-sm p-2 backdrop-blur-md xl:ml-52 2xl:ml-96 ">
        <p className="text-3xl font-bold">Diego León Medina Velásquez</p>
        <ul>
          {profesionHome.map((x) => {
            return (
              <li key={x.id}>
                <p className="text-xl font-medium">{x.profesion}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Home;
