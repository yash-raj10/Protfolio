"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen overflow-hidden flex flex-col lg:flex-row text-centre lg:p-32 justify-center items-center ">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" border-4 border-violet-700 shadow-2xl shadow-violet-500 rounded-3xl  "
        src="https://media.licdn.com/dms/image/D4D03AQGilvHy0u3zeA/profile-displayphoto-shrink_200_200/0/1693978057417?e=1702512000&v=beta&t=WkF8ighSn2cb_hIcVbpU9Z1KGnItn9LntCvkTqKIHrA"
        alt=""
      />

      <motion.div
        initial={{ x: +200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-10 lg:text-lg md:text-lg text-base  "
      >
        Hey there! I am Yash a Full Stack Dev from India, an avid technology
        enthusiast, always fascinated by the latest advancements in the tech
        world. Currently Learning Cloud and Devops. I'm also the Outreach Lead
        at @GdscBpit and a proud contributor to @rustDelhi & @FOSSDelhi
        Communities.
      </motion.div>
    </div>
  );
}
