import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer-container" className="flex flex-col   w-full  gap-y-10 ">
      <div className="flex flex-col sm:flex-row  sm:justify-around w-full ">
        <section id="contact" className="flex flex-col  mb-1 p-4 gap-y-3 ">
          <div className="font-light text-xl mb-1 text-gray-500">CONTACT</div>
          <div className="flex  gap-4  ">
            <div>
              {" "}
              <AiFillTikTok size="1.4rem" />
            </div>
            <div>
              {" "}
              <FaInstagram size="1.4rem" />
            </div>
            <div>
              {" "}
              <FaFacebook size="1.4rem" />
            </div>
          </div>
          <Link
            href="tel:+3356869362"
            className="font-normal text-xs  w-[35%] footer:w-[60%] hover:text-greeno"
          >
            06 56 86 93 62
          </Link>
          <Link
            href="mailto:cocktail-envents@gmail.com"
            className="font-normal text-xs   w-[57%] footer:w-[100%] hover:text-greeno"
          >
            cocktail-envents@gmail.com
          </Link>
        </section>

        <section id="pages" className="flex flex-col mb-4 md:mb-0 p-4  gap-y-3">
          <div className="font-light text-xl  text-gray-500 mb-1  ">PAGES</div>
          <Link href="/prestation" className="font-normal text-xs w-[30%] hover:text-greeno">
            Presations
          </Link>
          <Link href="/info" className="font-normal text-xs w-[30%] hover:text-greeno">
            Equipe
          </Link>
          <Link href="/booking" className="font-normal text-xs w-[30%] hover:text-greeno">
            Booking
          </Link>
        </section>

        <section id="prestations" className="flex flex-col p-4 gap-y-3">
          <div className="font-light text-xl mb-1  text-gray-500">
            PRESTATIONS
          </div>
          <Link href="/prestation/mariage" className="font-normal text-xs w-[30%] hover:text-greeno ">
            Mariage
          </Link>
          <Link
            href="/prestation/privatisation"
            className="font-normal text-xs w-[30%] hover:text-greeno "
          >
            Privatisation
          </Link>
          <Link href="/prestation/entreprise" className="font-normal text-xs w-[52%] footer:w-[100%] hover:text-greeno">
            Entreprise Team Building
          </Link>
          <Link href="/prestation/atelier" className="font-normal text-xs w-[30%] footer:w-[100%] hover:text-greeno">
            Atelier Cocktail
          </Link>
        </section>
      </div>
      <section
        id="mention-cookie"
        className=" bg-creme flex justify-center  items-center gap-x-8"
      >
        <Link href="/mentions" className="font-normal  text-gray-500  text-xs  hover:text-greeno">
          Mentions légales
        </Link>
        <p>-</p>
        <Link href="/cookie" className="font-normal  text-gray-500 text-xs hover:text-greeno">
          Cookie
        </Link>
      </section>
    </div>
  );
};

export default Footer;
