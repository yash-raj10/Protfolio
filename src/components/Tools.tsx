"use client";
import React from "react";
import { motion } from "framer-motion";
import Tool from "./Tool";
import { getSkills } from "@/utils/sanity-utils";
import { Skill } from "@/app/types/Skill";

type Props = {};

export default async function Tools({}: Props) {
  const getSkillData: Skill[] = await getSkills();

  return (
    <div className="  h-screen flex flex-col text-center items-center justify-center space-y-12">
      <h1 className=" text-violet-800 text-xl font-bold uppercase tracking-[2px] ">
        Tools I have worked with!
      </h1>
      <div className=" grid grid-cols-4 gap-5 px-5">
        {getSkillData.map((s: Skill, index: number) => (
          <Tool key={index} props={s} />
        ))}
      </div>
    </div>
  );
}
