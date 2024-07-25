import React from "react";
import { FaBell, FaPlus, FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import {
  FaRegBookmark,
  FaRegHeart,
  FaRegComment,
  FaHeart,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const leftSide = [
  { name: "Post", icon: <FaPlus /> },
  { name: "Explore", icon: <IoSearchSharp /> },
  { name: "Messages", icon: <IoMdMail /> },
  { name: "Notifications", icon: <FaBell /> },
  { name: "Bookmarks", icon: <FaRegBookmark /> },
  { name: "More", icon: <FaAngleDown /> },
];

export const Left = () => {
  return (
    <div className="lg:ml-4 xl:ml-12 pointer-events-none lg:pointer-events-auto opacity-0 lg:opacity-100">
      {leftSide.map((button, i) => (
        <div
          key={i}
          className="text-white lg:text-lg xl:text-2xl lg:mb-4 xl:mb-6 lg:mt-2 xl:mt-4"
        >
          <button className="p-1 items-center flex flex-row gap-3 uppercase font-bold italic text-violet-300 hover:text-violet-200 hover:underline">
            {button.icon}
            {button.name}
          </button>
        </div>
      ))}
    </div>
  );
};
