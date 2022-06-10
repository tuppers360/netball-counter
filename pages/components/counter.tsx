import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

function Counter({
  id,
  name,
  handleHit,
  handleMiss,
  countHit,
  countMiss,
  percentage,
}: {
  id: number;
  name: string;
  handleHit: (id: number) => void;
  handleMiss: (id: number) => void;
  countHit: number;
  countMiss: number;
  percentage: string;
}) {
  return (
    <>
      <li
        key={id}
        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 border"
      >
        <div className="flex-1 flex flex-col p-8">
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          />
          <h3 className="mt-6 text-gray-900 text-lg font-bold">{name}</h3>

          <div className="text-sm space-y-2 font-medium">
            <div>Match Shooting Stats:</div>
            <div>
              Hit:
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mx-2">
                {countHit}
              </span>
              Miss:
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800 ml-2">
                {countMiss}
              </span>
            </div>
            <div>
              Total:
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 ml-2">
                {countHit + countMiss}
              </span>
            </div>
            <div>
              Hit Percentage:
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 ml-2">
                {percentage}
              </span>
            </div>
          </div>
        </div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <button
              onClick={() => handleHit(id)}
              type="button"
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg text-white bg-indigo-700 hover:bg-indigo-800"
            >
              <FontAwesomeIcon
                icon={faBasketball}
                className="w-5 h-5"
                aria-hidden="true"
              />
              <span className="ml-3">Score</span>
            </button>
          </div>
          <div className="-ml-px w-0 flex-1 flex text-white">
            <button
              onClick={() => handleMiss(id)}
              type="button"
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg text-white bg-emerald-700 hover:bg-emerald-800"
            >
              <FontAwesomeIcon
                icon={faBasketball}
                className="w-5 h-5"
                aria-hidden="true"
              />

              <span className="ml-3">Miss</span>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default Counter;
