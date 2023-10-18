"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen overflow-hidden flex flex-col lg:flex-row text-centre  px-48 justify-center items-center ">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" border-4 border-violet-700 shadow-2xl shadow-violet-500 rounded-3xl "
        src="https://media.licdn.com/dms/image/D4D03AQGilvHy0u3zeA/profile-displayphoto-shrink_200_200/0/1693978057417?e=1702512000&v=beta&t=WkF8ighSn2cb_hIcVbpU9Z1KGnItn9LntCvkTqKIHrA"
        alt=""
      />

      <motion.div
        initial={{ x: +200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-16 text-lg"
      >
        Hey there! I am Yash a Full Stack Dev from India, an avid technology
        enthusiast, always fascinated by the latest advancements in the tech
        world. 👨‍💻 Currently Learning Cloud and Devops. I'm also the Outreach
        Lead at @GdscBpit and a proud contributor to @cncfnd and @rustDelhi
        Communities. I enjoy mentoring and collaborating with fellow tech
        enthusiasts to create a vibrant and innovative community.🚀 In a world
        powered by code, I find my sanctuary in Linux, where every command and
        line of code carries the potential to shape the digital realm.⚡
      </motion.div>
    </div>
  );
}