"use client";
import React from "react";
import Link from "next/link";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import yash from "../../public/yash.jpg";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer!", "Freelancer.", "Tech-Blogger.", "Potter-Head🪄"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex space-y-6 flex-col lg:flex-row md:flex-row justify-center items-center lg:space-x-24 md:space-x-16 overflow-hidden text-center">
      <div className="space-y-8">
        <h1 className="text-xl lg:text-6xl md:text-6xl">
          Hey, I Am YA.sh
          <p>
            <span className=" text-violet-700">{text}</span>
            <Cursor cursorColor="darkviolet" />
          </p>
        </h1>
        <div className="hidden lg:flex md:flex justify-center">
          <a href="#projects">
            <button className="border-2 shadow-gray-300  px-4 mx-2 py-1 rounded-lg border-violet-400 bg-violet-700 text-lg  text-white  hover:scale-105 duration-500">
              PROJECTS
            </button>
          </a>

          <a href="#blogs">
            <button className="border-2 shadow-gray-300  px-4 py-1 mx-2 bg-violet-700 border-violet-400  rounded-lg text-lg  text-white hover:scale-105 duration-500">
              BLOGS
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div
          // initial={{ x: +40, opacity: 0, scale: 1 }}
          // animate={{ x: 0, opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
          className=" h-56 w-52 bg-violet-600 rounded-3xl shadow-lg shadow-violet-500 flex items-center justify-center"
        >
          <Image
            src={yash}
            alt="Yash"
            width={175}
            className=" rounded-3xl  hover:scale-105 duration-300"
          />
        </div>
        <div className="flex lg:hidden md:hidden mt-6 justify-center">
          <a href="#projects">
            <button className=" shadow-gray-300  border-2 px-3 mx-2 border-violet-500 bg-violet-400 rounded-lg text-lg text-gray-600">
              PROJECTS
            </button>
          </a>

          <a href="#blogs">
            <button className=" shadow-gray-300  border-2 px-3 mx-2 border-violet-500 bg-violet-400 rounded-lg text-lg text-gray-600">
              BLOGS
            </button>
          </a>
        </div>
        <div className=" space-x-4 pt-6 text-gray-700 sm:space-x-12  ">
          <Link
            href="#about"
            className="hover:border-2  rounded-2xl hover:border-violet-600 px-[6px] hover:opacity-100 opacity-80 "
          >
            ABOUT
          </Link>
          <Link
            href="#skills"
            className="hover:border-2 rounded-2xl hover:border-violet-600 px-[6px] hover:opacity-100 opacity-80"
          >
            TOOLS
          </Link>
          <Link
            href="#contact"
            className="hover:border-2 rounded-2xl hover:border-violet-600 px-[6px]  hover:opacity-100 opacity-80"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
