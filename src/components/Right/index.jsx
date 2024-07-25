import React from "react";

const leftSide = [
  { name: "Post" },
  { name: "Explore" },
  { name: "Messages" },
  { name: "Notifications" },
  { name: "Bookmarks" },
  { name: "More" },
];

export const Right = () => {
  return (
    <div className="w-72 mt-2 mr-8">
      {/* {leftSide.map((button, i) => (
        <div key={i} className="text-indigo-100 my-5">
          {button.name}
        </div>
      ))} */}
    </div>
  );
};
