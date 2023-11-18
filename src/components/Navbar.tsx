"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  return (
    <div className=" bg-violet-200 sticky top-0 flex flex-row items-start justify-between z-50">
      <div
        // initial={{ x: -100, opacity: 0, scale: 0.5 }}
        // animate={{ x: 0, opacity: 1, scale: 1 }}
        // transition={{ duration: 0.8 }}
        className=" flex flex-row items-center"
      >
        {/*Social's */}
        <SocialIcon
          style={{ height: 43, width: 43 }}
          url="https://x.com/Yashrajstwt"
          fgColor="darkviolet"
          bgColor=" transparent"
        />
        <SocialIcon
          style={{ height: 43, width: 43 }}
          url="https://github.com/Yash-Raj10"
          fgColor="darkviolet"
          bgColor=" transparent"
        />
        <SocialIcon
          style={{ height: 43, width: 43 }}
          url="https://www.linkedin.com/in/yash-raj-b9696524b/"
          fgColor="darkviolet"
          bgColor=" transparent"
        />
      </div>
      <div
        // initial={{ x: +100, opacity: 0, scale: 0.5 }}
        // animate={{ x: 0, opacity: 1, scale: 1 }}
        // transition={{ duration: 0.8 }}
        className=" flex flex-row items-center "
      >
        {/* <SocialIcon
          href="#contact"
          className=" cursor-pointer"
          network="email"
          fgColor="darkviolet"
          bgColor=" transparent"
        /> */}
        {pathname !== "/" && (
          <a href="/">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" h-6 w-6"
            >
              <path
                fill=" darkviolet"
                d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
              ></path>
            </svg>
          </a>
        )}
        {pathname !== "/posts" && (
          <a href="/posts" className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" h-6 w-6"
            >
              <path
                fill=" darkviolet"
                d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"
              ></path>
              <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
            </svg>
          </a>
        )}
        <a href="/#projects" className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=" h-8 w-8"
          >
            <path
              fill=" darkviolet"
              d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
