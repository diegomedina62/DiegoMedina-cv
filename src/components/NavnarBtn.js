const NavnarBtn = () => {
  const buttonClick = () => {
    document.getElementById('navBar').classList.toggle('w-72');
    document.getElementById('menuIcon').classList.toggle('hidden');
    document.getElementById('menuClose').classList.toggle('hidden');
  };

  return (
    <button
      id="btn"
      className="absolute -right-3 top-3 rounded-full bg-slate-600 p-2 px-3 lg:hidden"
      onClick={buttonClick}
    >
      <i id="menuIcon" class="fas fa-bars"></i>
      <i id="menuClose" className="fas fa-angle-left fa-lg hidden"></i>
    </button>
  );
};
export default NavnarBtn;
