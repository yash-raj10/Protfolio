import React from "react";

type Props = {};

export default function Blog({}: Props) {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-violet-800 cursor-pointer font-bold hover:text-black">
        hlo i am yash raj
      </p>{" "}
      <p className="text-sm text-violet-500  md:block">mar 18th</p>
    </div>
  );
}
