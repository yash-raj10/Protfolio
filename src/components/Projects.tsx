import React from "react";
import { getProjects } from "@/utils/sanity-utils";
import { ProjectPost } from "@/app/types/ProjectPost";

type Props = {};

export default async function Projects({}: Props) {
  const getProjectsData: ProjectPost[] = await getProjects();

  return (
    <div className=" projects  h-screen max-w-full mx-auto flex flex-col items-center justify-center overflow-hidden z-0">
      <div className="flex  w-full overflow-x-scroll scrollbar-thin scrollbar-track-violet-500/20 scrollbar-thumb-violet-800/80 overflow-hidden snap-x snap-mandatory z-20">
        {getProjectsData.map((p: ProjectPost, index: number) => (
          <div
            key={index}
            className="w-screen  flex-shrink-0 snap-center flex items-center justify-center h-screen"
          >
            <div className=" border-4 max-w-7xl border-gray-700 rounded-xl bg-violet-200 flex flex-col items-center justify-center space-y-8 mx-5 p-8 md:p-28">
              <img
                className="border-4 border-gray-700 rounded-xl"
                src={p.mainImage}
                alt=""
                width={400}
              />
              <div className=" flex flex-raw space-x-6 max-w-6xl">
                <h3 className="lg:text-3xl md:text-3xl text-2xl text-center uppercase">
                  {p.name}
                </h3>
                <a href={p.link}>
                  <button className="  border-2 bg-violet-400 px-[10px] text-gray-700 hover:text-black hover:scale-105 duration-500 rounded-lg border-violet-600">
                    View Code
                  </button>
                </a>
              </div>
              <p className="text-center"> {p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
