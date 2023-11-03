"use client";
import React from "react";
import { motion } from "framer-motion";
import Tool from "./Tool";

type Props = {};

export default function Tools({}: Props) {
  return (
    <motion.div className="  h-screen flex flex-col text-center items-center justify-center space-y-16">
      <h1 className=" text-violet-800 font-bold uppercase tracking-[2px] ">
        Tools I have worked with!
      </h1>
      <div className=" grid grid-cols-4 gap-5 px-5">
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
        <span className="hover:scale-105 duration-300">
          <Tool />
        </span>
      </div>
    </motion.div>
  );
}
