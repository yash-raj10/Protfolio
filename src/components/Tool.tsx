import { Skill } from "@/app/types/Skill";
import { motion } from "framer-motion";

import React from "react";

type Props = {
  props: Skill;
};

export default function Tool({ props }: Props) {
  return (
    <div>
      <div className="hover:scale-105 duration-300">
        <motion.img
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={props.image}
          alt=""
          className=" w-24 h-24  "
        />
      </div>
    </div>
  );
}
