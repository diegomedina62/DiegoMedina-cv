import fotoPerfil from '../images/fotoPerfilcuadrada.jpg';
import { linksNavbar, menuNavbar } from '../data';
const Navbar = () => {
  return (
    <section className="fixed flex h-full w-80 flex-col bg-slate-900 px-1 text-white shadow-md">
      <div className="h-full basis-4/12">
        <img
          src={fotoPerfil}
          className="mx-auto mt-4 w-2/3 rounded-full border-8"
          alt="Foto perfil Diego Medina"
        />
        <h1 className="p-4 text-center text-4xl">Diego Medina</h1>
      </div>

      <div className=" h-full basis-1/12">
        <ul className="my-auto flex h-full flex-row items-center justify-evenly">
          {linksNavbar.map((x) => {
            return (
              <li key={x.id}>
                <a href={x.href} target="_blank" rel="noreferrer">
                  <i className={x.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="h-full basis-7/12">
        <ul className="flex h-full flex-col justify-evenly">
          {menuNavbar.map((x) => {
            return (
              <li key={x.id} className=" text-center text-2xl">
                {x.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Navbar;
