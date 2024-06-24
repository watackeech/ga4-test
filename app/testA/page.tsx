"use client";

import { sendGTMEvent } from '@next/third-parties/google';
import { SetStateAction, useState } from 'react';

export default function InputPage() {
  const [number, setNumber] = useState('');

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    console.log(number);
    sendGTMEvent({
      event: "button_1",
      label: number,
    });
  };

  const doubleInputChange = () => {
    const doubledNumber = Number(number) * 2;
    setNumber(doubledNumber.toString());
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-black">Number Input and Button</h1>
        <div className="mb-4">
          <input
            type="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Enter a number"
            className="w-full px-3 py-2 border border-gray-300 rounded text-black focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Log Number
        </button>
        <button
          id="button2"
          onClick={doubleInputChange}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Double Number
        </button>
      </div>
    </div>
  );
}
