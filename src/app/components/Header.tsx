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
        className=" h-44 w-40 bg-violet-600 rounded-3xl shadow-lg shadow-violet-500 flex items-center justify-center"
      >
        <img src="/yash.jpg" alt="Yash" width={140} className=" rounded-3xl" />
      </motion.div>
      <h1>
        Hey, I Am YA.sh <span className=" text-violet-700">{text}</span>
        <Cursor cursorColor="darkviolet" />
      </h1>
      <div className=" space-x-8 pt-6 text-gray-700">
        <Link href="#about">HOME</Link>
        <Link href="#skills">SKILLS</Link>
        <Link href="#projects">PROJECTS</Link>
        <Link href="#blogs">BLOGS</Link>
      </div>
    </div>
  );
}
