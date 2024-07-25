import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-screen flex justify-center p-6 bg-indigo-800 border-t-[20px] border-[#24134f] font-semibold tracking-tight mt-5">
      <div className="bg-indigo-950 border-[1px] border-gray-400 w-96 rounded-lg p-4 text-violet-300 flex flex-col z-10">
        <div className="flex justify-center gap-2">
          <a className="italic font-bold">METABLOG</a> · @bellegutter ·
          version-1.0
        </div>
        <div className="h-0.5 w-full bg-indigo-800 my-2"></div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-center gap-2 text-lg">
            follow me on · <FaTwitter /> <FaFacebook /> <FaInstagram />
          </div>

          <div className="flex flex-col justify-center m-auto uppercase text-sm mt-2">
            · About · Contact · Help ·
          </div>
          <div className="flex flex-col justify-center m-auto uppercase text-sm">
            · Parent's Guide · Manage Cookies ·
          </div>
          <div className="flex flex-col justify-center m-auto uppercase text-sm">
            · Terms of Service · Privacy Policy ·
          </div>
          <div className="flex flex-col justify-center m-auto uppercase text-sm">
            - MADE IN MONGOLIA - ©2024 -
          </div>
        </div>
      </div>
      <div className="bg-gray-600 sm:w-20 sm:h-[64px] flex absolute z-20 mt-[144px] ml-[366px] rounded-tl-lg"></div>
      <div className="bg-indigo-800 sm:w-32 sm:h-16 flex skew-x-[-45deg] absolute z-30 mt-36 ml-[448px]"></div>
    </footer>
  );
};
