import * as yup from 'yup';

import Counter from './components/counter';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import MatchScoreCard from './components/matchscorecard';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required('Please enter players name'),
});
interface CountersProps {
  id: number;
  name: string;
  countHit: number;
  countMiss: number;
  percentage: string;
}

interface IFormValues {
  name: string;
}

const Match: NextPage = () => {
  const [countersData, setCountersData] = useState<Array<CountersProps>>([]);
  const [id, setId] = useState(1);
  const [updateId, setUpdateId] = useState<number>();
  const [matchScore, setMatchScore] = useState<number>(0);
  const [matchScoreOpposition, setMatchScoreOpposition] = useState<number>(0);

  const generateId = () => {
    setId(id + 1);
    return id;
  };

  const handleHit = (id: number) => {
    const newCountersData = countersData.map((counter) => {
      if (counter.id !== id) return counter;
      else {
        setUpdateId(counter.id);
        setMatchScore(matchScore + 1);
        return {
          ...counter,
          countHit: counter.countHit + 1,
          percentage: `${(
            ((counter.countHit + 1) /
              (counter.countHit + 1 + counter.countMiss)) *
            100
          ).toFixed(2)}%`,
        };
      }
    });
    setCountersData(newCountersData);
  };

  const handleMiss = (id: number) => {
    const newCountersData = countersData.map((counter) => {
      if (counter.id !== id) return counter;
      else {
        setUpdateId(counter.id);
        return {
          ...counter,
          countMiss: counter.countMiss + 1,
          percentage: `${(
            (counter.countHit / (counter.countHit + counter.countMiss + 1)) *
            100
          ).toFixed(2)}%`,
        };
      }
    });
    setCountersData(newCountersData);
  };

  const handleOpposotionHit = () => {
    setMatchScoreOpposition(matchScoreOpposition + 1);
  };

  const addShooter = (id: number, name: string) => {
    console.log(id, name);
    setCountersData([
      ...countersData,
      {
        id: generateId(),
        name: name,
        countHit: 0,
        countMiss: 0,
        percentage: '0%',
      },
    ]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ resolver: yupResolver(schema) });

  const handleOnSubmit = async (data: IFormValues) => {
    console.log(data);
    addShooter(id, data.name);
    reset();
  };

  return (
    <main className="py-8">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold">
          The&nbsp;
          <Link
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-emerald-700"
            href="/"
          >
            Netball Counter
          </Link>
        </h1>
        <div className="mt-10">
          <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
            <div className="flex flex-col max-w-md mx-auto">
              <div className="relative mt-1">
                <input
                  id="name"
                  className={`py-3 px-4 block w-full border shadow-sm rounded-md sm:text-sm ${
                    errors.name
                      ? `pr-10 border-red-300 text-red-600 dark:text-red-500 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 inset-1`
                      : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300 text-slate-700'
                  }`}
                  type="text"
                  {...register('name')}
                  placeholder="Player Name"
                />
                {errors.name && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ExclamationCircleIcon className="w-5 h-5 text-red-600 dark:text-red-500" />
                  </div>
                )}
              </div>
              {errors && (
                <p
                  className="mt-2 text-sm text-left text-red-600 dark:text-red-500"
                  id="email-error"
                >
                  <span>{errors.name?.message}</span>
                </p>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Shooter to Match
              </button>
            </div>
          </form>
        </div>
        <div>
          <MatchScoreCard
            matchScore={matchScore}
            matchScoreOpposition={matchScoreOpposition}
            handleOpposotionHit={handleOpposotionHit}
          />
        </div>

        <div className="mt-10">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {countersData.map((counter) => (
              <Counter
                key={counter.id}
                {...counter}
                name={counter.name}
                handleHit={handleHit}
                handleMiss={handleMiss}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Match;
