import React from "react";

type Props = {};

export default function Blog({}: Props) {
  return (
    <div className="flex justify-between items-center border-2 border-gray-400 px-2 py-1 bg-violet-200 rounded-lg w-full">
      <a href="">
        <p className="text-violet-800 cursor-pointer font-bold hover:text-black">
          hlo i am yash raj
        </p>
      </a>
      <p className="text-sm text-violet-500  md:block">mar 18th</p>
    </div>
  );
}
