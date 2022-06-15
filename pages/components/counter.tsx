import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

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
        className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center justify-center space-x-3">
              <h3 className="text-gray-900 text-lg font-bold truncate">
                {name}
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                Shooter
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <p className="mt-1 text-gray-500 text-sm truncate text-left flex items-center justify-between">
                Hit:
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mx-2">
                  {countHit}
                </span>
              </p>
              <p className="mt-1 text-gray-500 text-sm truncate text-left flex items-center justify-between">
                Miss:
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800 ml-2">
                  {countMiss}
                </span>
              </p>
              <p className="mt-1 text-gray-500 text-sm truncate text-left flex items-center justify-between">
                Total:
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 ml-2">
                  {countHit + countMiss}
                </span>
              </p>
              <p className="mt-1 text-gray-500 text-sm truncate text-left flex items-center justify-between">
                %'age':
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 ml-2">
                  {percentage}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
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
        </div>
      </li>
    </>
  );
}

export default Counter;
