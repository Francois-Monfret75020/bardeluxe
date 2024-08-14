"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyOutLink from "../../ui/FlyOutLink";
import FlyOutMenu from "../../ui/FlyOutMenu";
import Curve from "./Curve";
import Hamburger from "hamburger-react";
import { menuSlide, linkAnimation } from "./anim";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="right-8 bg-creme top-8 h-12 w-12 flex items-center justify-center z-50 rounded-full fixed lg:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={19}
          className="flex justify-center items-center"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed flex h-[50%] bg-black text-white items-center justify-center flex-col w-full opacity-80 z-40"
          >
            <div className="flex items-center justify-start h-[10%] mt-20 text-gray-500 border-b border-gray-500 w-[80%]">
              <p>Navigation</p>
            </div>
            <div className="flex justify-around items-start h-[45%] w-[100%] flex-row text-xl gap-8 mt-10">
              <motion.div {...linkAnimation}>
                <Link href="/equipe" onClick={toggleOpen}>
                  Equipe
                </Link>
              </motion.div>
              <motion.div {...linkAnimation}>
                <FlyOutLink
                  FlyOutContent={FlyOutMenu}
                  toggleOpen={toggleOpen}
                  name={"Prestation"}
                />
              </motion.div>
              <motion.div {...linkAnimation}>
                <Link href="/booking" onClick={toggleOpen}>
                  Booking
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center h-1/6 text-xs gap-8 items-center mb-4">
              <motion.div
                {...linkAnimation}
                className="flex items-center gap-1"
              >
                <AiFillTikTok size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Tik Tok
                </Link>
              </motion.div>
              <motion.div
                {...linkAnimation}
                className="flex items-center gap-1"
              >
                <FaInstagram size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Instagram
                </Link>
              </motion.div>
              <motion.div
                {...linkAnimation}
                className="flex items-center gap-1"
              >
                <FaFacebook size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Facebook
                </Link>
              </motion.div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}

      <div
        className="hidden lg:flex  w-full bg-black text-white "
        style={{ zIndex: 50 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <Link href="/" className="text-lg font-bold">
            Brand
          </Link>
          <div className="flex space-x-8">
            <FlyOutLink FlyOutContent={FlyOutMenu} name={"Prestation"} />

            <Link
     
              href="/equipe"
              className="hover:text-gray-400 transition"
            >
              Equipe
            </Link>
            <Link
         
              href="/booking"
              className="hover:text-gray-400 transition"
            >
              Booking
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              
              className="hover:text-gray-400 transition"
              href="/resaux"
            >
              <AiFillTikTok size="1.4rem" />
            </Link>
            <Link

              className="hover:text-gray-400 transition"
              href="/resaux"
            >
              <FaInstagram size="1.4rem" />
            </Link>
            <Link

              className="hover:text-gray-400 transition"
              href="/resaux"
            >
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
