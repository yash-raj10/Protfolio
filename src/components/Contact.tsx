"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:yashraj.se10@gmail.com?subject=${data.email}&body=Hey its ${data.name}, ${data.message}`;
  };

  return (
    <div className="h-screen  p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-8 w-full">
      <h1 className="text-xl uppercase tracking-[2px] font-bold text-violet-800">
        GET IN TOUCH!
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row  lg:space-x-20 md:space-x-20 space-y-1 ">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" h-8 w-8 mt-1"
          >
            {" "}
            <path
              fill="darkviolet"
              d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
            ></path>
          </svg>{" "}
          <p className="pt-2">Yashraj.se10@gamil.com</p>
        </div>
        <div className="flex flex-row justify-center ">
          <a href="">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" h-8 w-8 mt-1"
            >
              <path
                fill="darkviolet"
                d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"
              ></path>
            </svg>
          </a>
          <SocialIcon
            style={{ height: 43, width: 43 }}
            url="https://x.com/Yashrajstwt"
            fgColor="darkviolet"
            bgColor=" transparent"
          />
          <SocialIcon
            style={{ height: 43, width: 43 }}
            url="https://github.com/Yash-Raj10"
            fgColor="darkviolet"
            bgColor=" transparent"
          />
          <SocialIcon
            style={{ height: 43, width: 43 }}
            url="https://www.linkedin.com/in/yash-raj-b9696524b/"
            fgColor="darkviolet"
            bgColor=" transparent"
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-3 w-full lg:w-[60%]"
        action=""
      >
        <input
          type="text"
          className="placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          type="text"
          className="placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <textarea
          rows={8}
          className="placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Your Message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-violet-400 p-3 rounded-lg font-bold w-full text-white hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
