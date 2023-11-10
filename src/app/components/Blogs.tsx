import React from "react";
import Blog from "./Blog";

type Props = {};

export default function Blogs({}: Props) {
  return (
    <div className="h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-16">
      <p className=" font-bold uppercase text-xl text-violet-800 tracking-[2px]">
        BLOGS!
      </p>
      <div className="w-full flex flex-col items-start space-y-3 ">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}
