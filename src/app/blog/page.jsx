"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { getData } from "../../../utils/functions"; // adjust the import path if necessary
import { Left } from "@/components/Left";
import { Right } from "@/components/Right";
import Link from "next/link";
import { MdRefresh } from "react-icons/md";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState(20);

  const getBlogs = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles?per_page=${posts}`
      );
      setBlogs(data);
    } catch (error) {
      setError("Couldn't get blogs.");
    }
  };

  useEffect(() => {
    getBlogs();
  }, [posts]);

  return (
    <main className="min-h-screen w-screen mb-40 group">
      <div className="flex columns-3">
        <div>
          <div className="fixed">
            <Left />
          </div>
        </div>
        <div className="flex flex-col justify-center m-auto">
          <div className="flex flex-col justify-center m-auto">
            {blogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="flex mt-4 gap-4 items-center flex-row justify-center m-auto">
            <button
              onClick={() => {
                setPosts(posts + 10);
              }}
              className="text-white bg-indigo-700 active:border-none active:mt-2 active:-translate-y-2 p-3 text-xl uppercase italic font-bold border-t-8 border-violet-950"
            >
              Load More
            </button>
            <Link
              href="/"
              className="text-white p-2 text-4xl bg-pink-500 active:border-none active:mt-2 active:-translate-y-2 lg:opacity-0 lg:pointer-events-none lg:absolute border-t-8 border-fuchsia-800"
            >
              <div className=" drop-shadow-[0px_-3px_rgba(0,0,0,0.25)]">
                <MdRefresh />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
