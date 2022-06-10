import React, { useEffect, useState } from 'react';

import Counter from './components/counter';
import { NextPage } from 'next';

interface CountersProps {
  id: number;
  countHit: number;
  countMiss: number;
  percentage: string;
}

const Match: NextPage = () => {
  const [countersData, setCountersData] = useState<Array<CountersProps>>([]);
  const [id, setId] = useState(1);

  const generateId = () => {
    setId(id + 1);
    return id;
  };

  const handleHit = (id: number) => {
    const newCountersData = countersData.map((counter) => {
      if (counter.id !== id) return counter;
      else
        return {
          ...counter,
          countHit: counter.countHit + 1,
          setCountHit: counter.countHit,
        };
    });
    setCountersData(newCountersData);
  };

  const handleMiss = (id: number) => {
    const newCountersData = countersData.map((counter) => {
      if (counter.id !== id) return counter;
      else
        return {
          ...counter,
          countMiss: counter.countMiss + 1,
        };
    });
    setCountersData(newCountersData);
  };

  const addShooter = (id: number) => {
    setCountersData([
      ...countersData,
      { id: generateId(), countHit: 0, countMiss: 0, percentage: '0%' },
    ]);
  };

  useEffect(() => {
    console.log(countersData);
  }, [handleHit, handleMiss]);

  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <h1 className="text-6xl font-extrabold">
        The&nbsp;
        <a
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-emerald-700"
          href="https://nextjs.org"
        >
          Netball Counter
        </a>
      </h1>
      <div className="mt-10">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => addShooter(id)}
        >
          Add Shooter to Match
        </button>
      </div>
      <div className="mt-10">
        {countersData.map((counter) => (
          <Counter
            key={counter.id}
            {...counter}
            name="Mia"
            handleHit={handleHit}
            handleMiss={handleMiss}
          />
        ))}
      </div>
    </main>
  );
};

export default Match;
