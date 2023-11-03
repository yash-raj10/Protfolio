"use client";
import React from "react";
import Link from "next/link";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Yash from "next/image";

type Props = {};

export default function Header({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer!", "Freelancer.", "Tech-Blogger.", "Potter-Head🪄"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 overflow-hidden text-center">
      <motion.div
        initial={{ x: +40, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className=" h-56 w-52 bg-violet-600 rounded-3xl shadow-lg shadow-violet-500 flex items-center justify-center"
      >
        <img
          src="/yash.jpg"
          alt="Yash"
          width={175}
          className=" rounded-3xl  hover:scale-105 duration-300"
        />
      </motion.div>
      <h1>
        Hey, I Am YA.sh <span className=" text-violet-700">{text}</span>
        <Cursor cursorColor="darkviolet" />
      </h1>
      <div className=" space-x-4 pt-6 text-gray-700 sm:space-x-12  ">
        <Link
          href="#about"
          className="hover:border-2 rounded-3xl hover:border-violet-600 px-[6px] hover:opacity-100 opacity-80 "
        >
          HOME
        </Link>
        <Link
          href="#skills"
          className="hover:border-2 rounded-3xl hover:border-violet-600 px-[6px] hover:opacity-100 opacity-80"
        >
          TOOLS
        </Link>
        <Link
          href="#projects"
          className="hover:border-2 rounded-3xl hover:border-violet-600 px-[6px]  hover:opacity-100 opacity-80"
        >
          PROJECTS
        </Link>
        <Link
          href="#blogs"
          className="hover:border-2 rounded-3xl hover:border-violet-600 px-[6px] hover:opacity-100 opacity-80 "
        >
          BLOGS
        </Link>
      </div>
    </div>
  );
}
