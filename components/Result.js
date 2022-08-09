import React from 'react';

export default function Result({ title, correctWord, id }) {
  return (
    <div className="pt-2 pb-6 ">
      <div className="text-center collapse hover:bg-gray-100 hover:rounded-xl ">
        <input type="checkbox" />
        <div className="text-lg font-medium collapse-title hover:underline-offset-4">
          {title}
        </div>
        <div className="collapse-content">
          <p className="text-xl text-red-500">{correctWord}</p>
        </div>
      </div>
    </div>
  );
}
