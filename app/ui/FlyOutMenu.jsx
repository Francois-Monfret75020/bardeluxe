import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { prestaData } from "../content/Presta Hero content/prestationContent";


const FlyOutMenu = ({ toggleOpen }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setData(prestaData);
  }, []);

  return (
    <div className="flex flex-col h-auto p-6 shadow-xl gap-x-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 w-full  flex justify-around  gap-y-3"
        >
          <Link href={item.link} onClick={toggleOpen}>
            <div className="flex flex-col items-center justify-center relative cursor-pointer h-full">
              <span className=" top-12   text-center bg-opacity-50 text-white hover:text-gray-500 p-1">
                {item.navTitlle}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FlyOutMenu;
