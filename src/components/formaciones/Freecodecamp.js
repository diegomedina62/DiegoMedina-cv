import { freeCodeCamp } from '../../data';
function Freecodecamp() {
  return (
    <div className="mx-8 mt-4 mb-4 flex flex-row space-x-4">
      {/* bisagra */}
      <div className="relative mt-2 -mb-8 w-1 bg-slate-600 pt-1">
        <div className="absolute -left-2 -top-1 h-fit w-fit">
          <svg
            className="stroke-slate-600"
            viewBox="0 0 4 4"
            width="1.25rem"
            height="1.25rem"
          >
            <circle cx="2" cy="2" r="1.5" stroke-width="0.7" fill="white" />
          </svg>
        </div>
      </div>
      {/* container de freeCodeCamp */}
      <div className="w-full pl-2">
        <h3>FreeCodeCamp</h3>
        <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">2022-2023</p>
        <p>
          Visita mi perfil de FreeCodeCamp para ver las certificaciones
          obtenidas:
        </p>
        <p>
          <a
            href="https://www.freecodecamp.org/diegomedina62/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-900"
          >
            https://www.freecodecamp.org/diegomedina62/
          </a>
        </p>
        <ul className="mx-8 list-disc py-2 text-sm">
          {freeCodeCamp.map((x) => {
            return (
              <li className="py-1">
                <p className="font-bold">
                  {x.item}
                  <span className="font-normal"> usando: </span>
                </p>
                {x.tecnos} <p></p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Freecodecamp;
