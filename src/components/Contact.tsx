"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-16 w-full">
      <h1 className=" text-xl uppercase tracking-[2px] font-bold text-violet-800">
        contact me
      </h1>
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
