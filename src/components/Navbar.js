import fotoPerfil from '../images/fotoPerfilcuadrada.jpg';
import { linksNavbar, menuNavbar } from '../data';
import NavnarBtn from './NavnarBtn';

const Navbar = () => {
  return (
    <nav
      id="navBar"
      className="fixed top-0 bottom-0 z-10  w-8 bg-slate-900 pl-8 text-white transition-all duration-500 lg:fixed lg:w-72 lg:pl-0 lg:transition-none"
    >
      {/* menu button */}
      <NavnarBtn />

      <div className="flex h-full w-full flex-col space-y-8 overflow-y-auto overflow-x-hidden">
        {/* photo and name */}
        <div className="flex   flex-col items-center space-y-4">
          <div className=" w-2/5 pt-4">
            <img
              src={fotoPerfil}
              alt="Foto de perfil Diego M"
              className="rounded-full border-4 border-slate-200"
            />
          </div>
          <p className=" text-2xl font-medium">Diego Medina</p>
        </div>

        {/* links Icons */}
        <div className="">
          <ul className="my-auto flex flex-row justify-center space-x-6">
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

        {/* Nav links */}
        <div className="">
          <ul className="flex h-full flex-col space-y-5">
            {menuNavbar.map((x) => {
              return (
                <li
                  key={x.id}
                  className=" w-full text-center  text-xl font-light"
                >
                  <a href={x.href}>{x.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
