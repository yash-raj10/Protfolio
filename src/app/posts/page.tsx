import React from "react";
import Navbar from "@/components/Navbar";
import Post from "@/components/Post";

type Props = {};

export default function posts({}: Props) {
  return (
    <div className="w-full h-full bg-violet-300">
      <Navbar />
      <div className="max-w-7xl min-h-screen mx-auto p-6 space-y-5">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
