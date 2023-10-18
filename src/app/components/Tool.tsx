"use client";
import { motion } from "framer-motion";

import React from "react";

type Props = {};

export default function Tool({}: Props) {
  return (
    <div>
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://camo.githubusercontent.com/bbb327d6ba7708520eaafd13396fed64d73bf5df5c4cdd0ba03cf0843f7a9340/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676e755f626173682f676e755f626173682d69636f6e2e737667"
        alt=""
        className=" w-24 h-24  "
      />
    </div>
  );
}
