"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ThreeDots } from "../ThreeDots"; // adjust the import path if necessary
import { formatDate } from "../../../utils/functions";
import {
  FaRegBookmark,
  FaRegHeart,
  FaRegComment,
  FaHeart,
} from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";

export const Card = ({ blog }) => {
  const [heartFilled, setHeartFilled] = useState(false);
  const [count, setCount] = useState(blog.public_reactions_count);

  const handleClick = () => {
    setHeartFilled((prevState) => !prevState);

    setCount((count) => {
      if (count === blog.public_reactions_count) {
        return count + 1;
      } else {
        return blog.public_reactions_count;
      }
    });
  };

  return (
    <div className="bg-[#130c30] hover:border-violet-900 w-[360px] md:w-[640px] tracking-tight p-3 sm:p-4 flex justify-center flex-col text-indigo-100 m-auto relative border-2 rounded-md my-2 border-[#130c30] duration-200 gap-3">
      <Link href={`/blog/${blog.id}`}>
        <div className="flex justify-center items-center p-3">
          <div className="left-0 absolute flex justify-center gap-3">
            <img
              src={blog.user.profile_image}
              className="size-10 rounded-full ml-4 hover:opacity-50"
            />
            <div className="flex justify-center items-center gap-2">
              <div className="font-semibold text-indigo-200 hover:underline">
                {blog.user.name}
              </div>
              ·
              <div className="text-sm text-indigo-300 opacity-50">
                {formatDate(blog.published_at)}
              </div>
            </div>
          </div>
          <div className="size-4 group">
            <div className="right-0 absolute mr-4">
              <div className="flex justify-center gap-3 items-center">
                <div className="flex gap-1">
                  <div className="size-1 bg-indigo-500 group-hover:bg-indigo-300"></div>
                  <div className="size-1 bg-indigo-500 group-hover:bg-indigo-300"></div>
                  <div className="size-1 bg-indigo-500 group-hover:bg-indigo-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-2xl font-semibold my-3">{blog.title}</p>
        <img
          src={blog.social_image ? blog.social_image : "/default.avif"}
          className="rounded-sm w-full"
        />
      </Link>
      <div className="flex flex-row items-center p-1">
        <div className="flex flex-row">
          <button
            onClick={handleClick}
            className="flex items-center gap-1.5 w-24"
          >
            <button className="text-3xl text-indigo-500 hover:text-pink-500">
              {heartFilled ? (
                <div className="text-pink-500">
                  <FaHeart />
                </div>
              ) : (
                <FaRegHeart />
              )}
            </button>
            <h1 className=" tracking-tight text-indigo-300">{count}</h1>
          </button>
          <div className="flex items-center gap-1.5">
            <div className="text-3xl text-indigo-500 hover:text-indigo-300">
              <FaRegComment />
            </div>
            <h1 className=" tracking-tight text-indigo-300">
              {blog.comments_count}
            </h1>
          </div>
        </div>
        <div className="flex justify-end right-0 absolute mr-4 gap-4 p-1 items-center">
          <div className="text-indigo-500 hover:text-indigo-300 text-2xl">
            <FaRegBookmark />
          </div>
          <div className="text-indigo-500 hover:text-indigo-300 text-3xl">
            <RiShareLine />
          </div>
        </div>
      </div>
    </div>
  );
};
