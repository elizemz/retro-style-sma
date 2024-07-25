"use client";
import React, { useEffect, useState } from "react";
import { Left } from "@/components/Left";
import { useParams } from "next/navigation";
import { getData, formatDate } from "../../../../utils/functions";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  const getBlog = async (id) => {
    try {
      const data = await getData(`https://dev.to/api/articles/${id}`);
      setBlog(data);
    } catch (error) {
      setError("Couldn't get blog details.");
    }
  };

  useEffect(() => {
    if (id) {
      getBlog(id);
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="min-h-screen">
      <div>
        <div className="fixed">
          <Left />
        </div>
      </div>
      {blog ? (
        <div className="text-indigo-100 bg-[#130c30] rounded-b-md tracking-tight flex w-[360px] md:w-[640px] justify-center flex-col m-auto relative">
          <div className="relative mb-4">
            <div className="z-20 absolute w-full text-indigo-100 items-center flex text-5xl">
              <Link
                href="/blog"
                className="mt-1 hover:bg-fuchsia-600 hover:bg-opacity-25 active:text-pink-300 rounded-full"
              >
                <div className=" drop-shadow-[0px_3px_rgba(0,0,0,0.8)]">
                  <MdKeyboardArrowLeft />
                </div>
              </Link>
              <div className="flex right-0 justify-end gap-1 items-center absolute mr-4 drop-shadow-[0px_3px_rgba(0,0,0,0.8)]">
                <div className="size-1 bg-indigo-100"></div>
                <div className="size-1 bg-indigo-100"></div>
                <div className="size-1 bg-indigo-100"></div>
              </div>
            </div>
            <div className="group">
              <img
                src={blog.social_image ? blog.social_image : "/default.avif"}
                className="rounded-t-md w-full opacity-50 group-hover:opacity-75 duration-100 z-10"
              />
              <div className="absolute h-64 w-full group-hover:opacity-0 duration-100 -mt-64 z-20 bg-gradient-to-t from-[#130c30] to-"></div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="left-0 absolute flex justify-center gap-3">
              <img
                src={blog.user.profile_image}
                className="size-10 rounded-full ml-4 "
              />
              <div className="flex justify-center items-center gap-2">
                <div className="font-semibold text-indigo-200">
                  {blog.user.name}
                </div>
                ·
                <div className="text-sm text-indigo-300 opacity-50">
                  {formatDate(blog.published_at)}
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-semibold mt-6 mx-4">
            {blog.title}
          </p>
          <div className="mt-2 mb-56 gap-10 p-4">
            <div
              className="blog-content text-xl mx-1 font-light break-words leading-10 text-indigo-200"
              dangerouslySetInnerHTML={{ __html: blog.body_html }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </main>
  );
};

export default BlogDetail;
