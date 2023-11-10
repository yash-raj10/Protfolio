import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const project = [1, 2, 3];
  return (
    <div className="h-screen  max-w-full mx-auto flex flex-col items-center justify-center overflow-hidden z-0">
      <div className="flex  w-full overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20">
        {project.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-8 mt-10 p-16 md:p-44 h-screen">
            <img
              src="https://www.gnu.org/graphics/snowflake-purple.png"
              alt=""
              width={400}
            />
            <div className=" max-w-6xl">
              <h3 className="lg:text-4xl md:text-4xl text-2xl text-center uppercase">
                hlo i am yash{" "}
              </h3>
            </div>
            <p className="  text-center">
              latest advancements in the tech world. 👨‍💻 Currently Learning Cloud
              and Devops. I'm also the Outreach Lead at @GdscBpit and a proud
              contributor to @cncfnd and @rustDelhi Communities. I enjoy
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
