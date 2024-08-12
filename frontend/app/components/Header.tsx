"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavIteams from "../utils/NavIteams";
import { TheameSwitcher } from "../utils/TheameSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeIteam: number;
};

const Header: FC<Props> = ({ activeIteam, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 : dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#fff] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#fff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-black dark:text-white blog-title font-[Poppins] hover:scale-110 transition duration-300 italic"
              >
                <span className=" animate-typing px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-bold italic">
                  Sticky
                </span>
                Learning
              </Link>
            </div>

            <div className="flex items-center">
              <NavIteams activeIteam={activeIteam} isMobile={false} />
              <TheameSwitcher />
              {/* only for mobile */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  onClick={() => setOpenSidebar(true)}
                  className="cursor-pointer text-black dark:text-white"
                  size={25}
                />
              </div>
              <FaUserCircle
                onClick={() => setOpenSidebar(true)}
                className="cursor-pointer text-black dark:text-white"
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
