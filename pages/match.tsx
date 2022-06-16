import * as yup from "yup";

import Counter from "./components/counter";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import MatchScoreCard from "./components/matchscorecard";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("Please enter players name"),
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
        percentage: "0%",
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
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold">
          The&nbsp;
          <Link
            className="bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent"
            href="/"
          >
            Netball Counter
          </Link>
        </h1>
        <div className="mt-10">
          <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
            <div className="mx-auto flex max-w-md flex-col">
              <div className="relative mt-1">
                <input
                  id="name"
                  className={`block w-full rounded-md border py-3 px-4 shadow-sm sm:text-sm ${
                    errors.name
                      ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                      : "border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900"
                  }`}
                  type="text"
                  {...register("name")}
                  placeholder="Player Name"
                />
                {errors.name && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
                  </div>
                )}
              </div>
              {errors && (
                <p
                  className="mt-2 text-left text-sm text-red-600 dark:text-red-500"
                  id="email-error"
                >
                  <span>{errors.name?.message}</span>
                </p>
              )}

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
