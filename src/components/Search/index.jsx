"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

export const Search = () => {
  const [inputClear, setInputClear] = useState("");

  const handleClear = () => {
    setInputClear("");
  };
  return (
    <div className="flex border-indigo-900 border-2 bg-indigo-700 hover:bg-indigo-600 p-2 pr-3 pl-4 rounded-xl text-lg absolute text-indigo-200 -mr-[600px] group">
      <input
        placeholder="SEARCH..."
        type="text"
        className="bg-indigo-700 group-hover:bg-indigo-600 outline-none peer"
        value={inputClear}
        onChange={(e) => setInputClear(e.target.value)}
      ></input>
      <div
        onClick={handleClear}
        className="opacity-0 peer-focus:opacity-100 text-violet-950 text-3xl mt-0.5 mr-2"
      >
        <MdOutlineClear />
      </div>
      <div className="flex p-2 bg-violet-950 rounded-2xl">
        <IoSearchSharp />
      </div>
    </div>
  );
};
