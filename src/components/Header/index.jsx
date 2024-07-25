"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "../Search";
import { IoSettingsSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

const links = [
  { name: <GoHomeFill />, path: "/blog" },
  { name: <IoSettingsSharp />, path: "/credits" },
  { name: <FaUser />, path: "/contact" },
];

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [inputClear, setInputClear] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScroll < lastScrollTop || currentScroll < 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleClear = () => {
    setInputClear("");
  };

  return (
    <header
      className={`w-screen flex justify-center p-1 sm:p-2 pb-7 sm:pb-9 text-white bg-indigo-700 border-b-[16px] sm:border-b-[20px] border-violet-950 font-bold tracking-tight text-xl fixed top-0 z-50 duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full sm:translate-y-0"
      }`}
    >
      <div className="flex mt-1.5 sm:mt-1 text-violet-950 font-extrabold tracking-tighter text-2xl sm:text-3xl absolute left-0 ml-4 sm:ml-8">
        | | |
      </div>
      <Link
        href="/"
        className="flex italic mt-2.5 sm:mt-1.5 sm:text-3xl text-indigo-200 absolute left-0 ml-14 sm:ml-20 hover:text-indigo-50"
      >
        METABLOG
      </Link>
      <div className="opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto flex mt-1 sm:mt-0 border-indigo-900 border-2 bg-indigo-700 hover:bg-indigo-600 p-1 sm:p-2 pr-2 sm:pr-3 pl-3 sm:pl-4 rounded-xl text-base sm:text-lg absolute ml-4 justify-end mr-0 text-indigo-200 group">
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
      <div>‎ </div>
      <div className="flex justify-evenly absolute right-0 mr-2 sm:mr-4 lg:mr-6">
        <div className="flex gap-3 sm:gap-4 lg:gap-6 z-10 absolute mt-0.5 sm:-mt-0.5">
          {links.map((link, i) => {
            const textSize =
              link.path === "/credits" || "/contact"
                ? "text-2xl p-2 sm:p-3"
                : link.path === "/blog"
                ? "text-2xl p-2 sm:p-3 opacity-0 sm:opacity-100"
                : "text-lg p-2.5";
            return (
              <Link
                className={`${textSize} active:translate-y-1.5 sm:active:translate-y-2 bg-pink-500 rounded-xl`}
                key={i}
                href={link.path}
              >
                <p className="drop-shadow-[0px_3px_rgba(0,0,0,0.25)]">
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-3 sm:gap-4 lg:gap-6 z-1 mt-2 sm:mt-1.5 pointer-events-none">
          {links.map((link, i) => {
            const textSize =
              link.path === "/credits" || "/contact"
                ? "text-2xl p-2 sm:p-3"
                : link.path === "/blog"
                ? "text-2xl p-2 sm:p-3 opacity-0 sm:opacity-100"
                : "text-lg p-2.5";
            return (
              <Link
                className={`${textSize} active:translate-y-0.5 sm:active:translate-y-2 bg-fuchsia-800 rounded-xl`}
                key={i}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div></div>
    </header>
  );
};
