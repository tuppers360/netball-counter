import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";

function MatchScoreCard({
  matchScore,
  matchScoreOpposition,
  handleOpposotionHit,
}: {
  matchScore: number;
  matchScoreOpposition: number;
  handleOpposotionHit: () => void;
}) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="overflow-hidden rounded-lg bg-slate-100 px-4 py-5 shadow sm:p-6">
        <dt className="truncate text-4xl font-medium text-gray-500">
          WyreWhites Team
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          {matchScore}
        </dd>
      </div>
      <div className="overflow-hidden rounded-lg bg-slate-100 px-4 py-5 shadow sm:p-6">
        <dt className="truncate text-4xl font-medium text-gray-500">
          Oppostition Team
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          {matchScoreOpposition}
        </dd>
        <dd className="mt-2 flex justify-center">
          <button
            onClick={handleOpposotionHit}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <FontAwesomeIcon
              icon={faBasketball}
              className="h-5 w-5"
              aria-hidden="true"
            />
            <span className="ml-3">Score</span>
          </button>
        </dd>
      </div>
    </dl>
  );
}

export default MatchScoreCard;
