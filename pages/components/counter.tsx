import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";

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
        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center justify-center space-x-3">
              <h3 className="truncate text-lg font-bold text-gray-900">
                {name}
              </h3>
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Shooter
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <p className="mt-1 flex items-center justify-between truncate text-left text-sm text-gray-500">
                Hit:
                <span className="mx-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                  {countHit}
                </span>
              </p>
              <p className="mt-1 flex items-center justify-between truncate text-left text-sm text-gray-500">
                Miss:
                <span className="ml-2 inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
                  {countMiss}
                </span>
              </p>
              <p className="mt-1 flex items-center justify-between truncate text-left text-sm text-gray-500">
                Total:
                <span className="ml-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                  {countHit + countMiss}
                </span>
              </p>
              <p className="mt-1 flex items-center justify-between truncate text-left text-sm text-gray-500">
                %'age':
                <span className="ml-2 inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                  {percentage}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <button
                onClick={() => handleHit(id)}
                type="button"
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent bg-indigo-700 py-4 text-sm font-medium text-white hover:bg-indigo-800"
              >
                <FontAwesomeIcon
                  icon={faBasketball}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                <span className="ml-3">Score</span>
              </button>
            </div>
            <div className="-ml-px flex w-0 flex-1 text-white">
              <button
                onClick={() => handleMiss(id)}
                type="button"
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent bg-emerald-700 py-4 text-sm font-medium text-white hover:bg-emerald-800"
              >
                <FontAwesomeIcon
                  icon={faBasketball}
                  className="h-5 w-5"
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
