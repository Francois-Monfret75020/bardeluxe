"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BgImgBtn = ({ href , text , event }) => {

  console.log(event);
  

  return (
    <div

      className="relative border-2  cursor-pointer bg-transparent overflow-hidden text-white py-2 px-4 text-lg  border-white font-thin"
    >
      <motion.div
        className="absolute inset-0 bg-white origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: event ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <Link href={href} className="">
        <motion.span
          className="relative"
          initial={{ color: "white" }}
          animate={{ color: event ? "black" : "white" }}
          transition={{ duration: 5 }}
        >
          {text}
        </motion.span>
      </Link>
    </div>
  );
};

export default BgImgBtn;
