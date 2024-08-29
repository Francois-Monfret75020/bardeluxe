"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyOutLink from "../../ui/FlyOutLink";
import FlyOutMenu from "../../ui/FlyOutMenu";
import Curve from "./Curve";
import Hamburger from "hamburger-react";
import { menuSlide, linkAnimation } from "../../anim/curveAnim";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./style.css";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [linkEffect, setlinkEffect] = useState(false);
  const [linkEffect2, setlinkEffect2] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleOpen = () => {
    setOpen(!isOpen);
    zeroScrool();
  };

  const zeroScroll = () => {
    if (!isOpen) {
      // document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
      console.log("open");
    } else {
      // document.body.classList.remove("no-scroll");
      document.body.style.overflow = "auto";
      console.log("close");
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className="right-8 bg-greeno top-8 h-12 w-12 flex items-center justify-center z-50 rounded-full fixed lg:hidden "
        ref={hamburgerRef}
        onClick={zeroScroll}
      >
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
            ref={navRef}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed flex h-[100vh] bg-black bg-opacity-90 text-white items-center justify-around flex-col w-full z-40 top-0 left-0"
          >
            <div className="flex items-center justify-start h-[10%]  text-gray-500 border-b border-gray-500 w-[80%]">
              {" "}
              <Link href="/" onClick={toggleOpen}>
                Home
              </Link>
            </div>

            <div className="flex mb:justify-around justify-center  items-center h-[45%] w-[100%] flex-row text-xl gap-8 relative top-[-60px]">
              <motion.div {...linkAnimation}>
                <Link href="/info" onClick={toggleOpen}>
                  Infomation
                </Link>
              </motion.div>
              <motion.div {...linkAnimation} className="opacity-100">
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
            <div className="flex justify-center h-1/8 text-xs gap-8 items-center">
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
        className="hidden lg:flex  w-full bg-greeno text-white  "
        style={{ zIndex: 50 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <Link href="/" className="text-lg font-bold hover:text-creme">
            Brand
          </Link>
          <div className="flex space-x-8">
            <FlyOutLink FlyOutContent={FlyOutMenu} name={"Prestation"} />

            <div
              className=" flex flex-col w-[50%]"
              onMouseEnter={() => setlinkEffect(true)}
              onMouseLeave={() => setlinkEffect(false)}
            >
              <Link
                href="/info"
                className=" transition justify-center flex items-center "
              >
                Qui sommes-nous ?
              </Link>
              <span
                style={{ transform: linkEffect ? "scaleX(1)" : "scaleX(0)" }}
                className=" mx-auto h-1 left-1/2 w-[170px] origin-left rounded-full bg-white transition-transform duration-300 ease-out"
              ></span>
            </div>

            <div
              className=" flex flex-col w-[50%]"
              onMouseEnter={() => setlinkEffect2(true)}
              onMouseLeave={() => setlinkEffect2(false)}
            >
              <Link
                href="/booking"
                className=" justify-center flex items-center "
              >
                Booking
              </Link>
              <span
                style={{ transform: linkEffect2 ? "scaleX(1)" : "scaleX(0)" }}
                className=" mx-auto h-1 left-1/2 w-[80px] origin-left rounded-full bg-white transition-transform duration-300 ease-out"
              ></span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link className="hover:text-creme transition" href="/resaux">
              <AiFillTikTok size="1.4rem" />
            </Link>
            <Link className="hover:text-creme transition" href="/resaux">
              <FaInstagram size="1.4rem" />
            </Link>
            <Link className="hover:text-creme transition" href="/resaux">
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
