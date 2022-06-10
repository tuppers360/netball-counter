import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

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
      <div className="px-4 py-5 bg-slate-100 shadow rounded-lg overflow-hidden sm:p-6">
        <dt className="text-4xl font-medium text-gray-500 truncate">
          WyreWhites Team
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          {matchScore}
        </dd>
      </div>
      <div className="px-4 py-5 bg-slate-100 shadow rounded-lg overflow-hidden sm:p-6">
        <dt className="text-4xl font-medium text-gray-500 truncate">
          Oppostition Team
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          {matchScoreOpposition}
        </dd>
        <dd className="mt-2 flex">
          <button
            onClick={handleOpposotionHit}
            type="button"
            className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FontAwesomeIcon
              icon={faBasketball}
              className="w-5 h-5"
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
