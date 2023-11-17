import React from "react";
import Blog from "./Blog";
import { getPosts } from "@/utils/sanity-utils";
import { BlogPost } from "@/app/types/BlogPost";

type Props = {};

export default async function Blogs({}: Props) {
  const getBlogData: BlogPost[] = await getPosts();

  return (
    <div className="h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-16">
      <p className=" font-bold uppercase text-xl text-violet-800 tracking-[2px]">
        BLOGS!
      </p>
      <div className="w-full flex flex-col items-start space-y-3 ">
        {getBlogData.map((b: BlogPost, index: number) => (
          <Blog key={index} props={b} />
        ))}
      </div>
    </div>
  );
}
