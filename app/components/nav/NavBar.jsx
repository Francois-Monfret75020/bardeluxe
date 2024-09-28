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
  const [linkEffect3, setlinkEffect3] = useState(false);

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
        className=" bg-greeno top-8 right-4 h-12 w-12 flex items-center justify-center z-50 rounded-full fixed md:hidden "
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
            className="fixed flex h-[100vh] bg-black bg-opacity-90 text-white items-center justify-evenly flex-col w-full z-40 top-0 left-0"
          >
            <div className="flex items-center justify-start h-[10%]  text-gray-500 border-b border-gray-500 w-[80%]">
              {" "}
              <Link href="/" onClick={toggleOpen}>
                Home
              </Link>
            </div>

            <div className="flex mb:justify-around justify-center  items-start h-[35%] w-[80%] flex-col text-xl gap-8 relative ">
             
            <motion.div {...linkAnimation} className="opacity-100">
                <FlyOutLink
                  FlyOutContent={FlyOutMenu}
                  toggleOpen={toggleOpen}
                  name={"Vos prestation"}
                />
              </motion.div>
             
              <motion.div {...linkAnimation}>
                <Link href="/bar" onClick={toggleOpen}>
                  Vos Bars
                </Link>
              </motion.div>
              <motion.div {...linkAnimation}>
                <Link href="/info" onClick={toggleOpen}>
                  Notre Histoire
                </Link>
              </motion.div>
            
              <motion.div {...linkAnimation}>
                <Link href="/booking" onClick={toggleOpen}>
                  Booking
                </Link>
              </motion.div>
            </div>
            <div className="flex text-xs gap-8 items-center">
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
        className="hidden md:flex h-[7vh] min-h-[2.5rem] w-full bg-greeno text-white  "
        style={{ zIndex: 50 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <Link href="/" className="text-lg font-bold hover:text-creme">
            Brand
          </Link>
          <div className="flex space-x-12 justify-center  ">
            <FlyOutLink FlyOutContent={FlyOutMenu} name={"Vos prestations"} />
            <div
              className=" flex flex-col "
              onMouseEnter={() => setlinkEffect(true)}
              onMouseLeave={() => setlinkEffect(false)}
            >
              <Link
                href="/info"
                className=" transition justify-center flex items-center hover:text-creme "
              >
                 Vos bars
              </Link>
              <span
                style={{ transform: linkEffect ? "scaleX(1)" : "scaleX(0)" }}
                className=" mx-auto h-1 left-1/2 w-[66px] origin-left rounded-full bg-creme transition-transform duration-300 ease-out"
              ></span>
            </div>

            <div
              className=" flex flex-col "
              onMouseEnter={() => setlinkEffect2(true)}
              onMouseLeave={() => setlinkEffect2(false)}
            >
              <Link
                href="/info"
                className=" justify-center flex items-center hover:text-creme "
              >
               Notre Histoire
              </Link>
              <span
                style={{ transform: linkEffect2 ? "scaleX(1)" : "scaleX(0)" }}
                className=" mx-auto h-1 left-1/2 w-[105px] origin-left rounded-full bg-creme transition-transform duration-300 ease-out"
              ></span>
            </div>

            <div
              className=" flex flex-col "
              onMouseEnter={() => setlinkEffect3(true)}
              onMouseLeave={() => setlinkEffect3(false)}
            >
              <Link
                href="/booking"
                className=" justify-center flex items-center hover:text-creme"
              >
                Booking
              </Link>
              <span
                style={{ transform: linkEffect3 ? "scaleX(1)" : "scaleX(0)" }}
                className=" mx-auto h-1 left-1/2 w-[62px] origin-left rounded-full  bg-creme  transition-transform duration-300 ease-out"
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
