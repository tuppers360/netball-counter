import React, { useEffect, useState } from 'react';

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
    <div className="max-w-2xl p-6 border rounded-md">
      <div>
        Player Name: {name} ID: {id}
      </div>
      <span className="relative z-0 inline-flex pt-4 rounded-md shadow-sm">
        <button
          onClick={() => handleHit(id)}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          Hit
        </button>

        <button
          onClick={() => handleMiss(id)}
          type="button"
          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          Miss
        </button>
      </span>
      <div>Match Shooting Stats:</div>
      <div>Hit: {countHit}</div>
      <div>Miss: {countMiss}</div>
      <div>Total: {countHit + countMiss}</div>
      <div>Hit Percentage: {percentage}</div>
    </div>
  );
}

export default Counter;
