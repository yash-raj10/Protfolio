"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Header({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer!", "Freelancer.", "Potter-Head🪄"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div>
      <h1>
        <span> {text}</span>
        <Cursor cursorColor="darkviolet" />
      </h1>
    </div>
  );
}
