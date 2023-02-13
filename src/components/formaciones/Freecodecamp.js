import { freeCodeCamp } from '../../data';
import Bisagra from '../Bisagra';

function Freecodecamp() {
  return (
    <div className="ml-1 mt-4 mb-4 flex flex-row space-x-4 lg:mx-8">
      {/* bisagra */}
      <Bisagra />
      {/* container de freeCodeCamp */}
      <div className="w-full lg:pl-2">
        <h3>FreeCodeCamp</h3>
        <p className="mb-2 w-fit rounded-lg bg-slate-200 px-2">2022-2023</p>
        <p>
          <a
            href="https://www.freecodecamp.org/diegomedina62/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-900 underline"
          >
            Visita mi perfil
          </a>{' '}
          de FreeCodeCamp para ver las certificaciones obtenidas:
        </p>

        <ul className="mx-4 list-disc py-2 text-sm lg:mx-8">
          {freeCodeCamp.map((x) => {
            return (
              <li className="py-1">
                <p className="font-bold">
                  {x.item}
                  <span className="font-normal">: </span>
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
