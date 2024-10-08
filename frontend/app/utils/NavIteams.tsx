import Link from "next/link";
import * as React from "react";

export const navIteamsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];
type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navIteamsData.map((item, index) => (
          <Link href={item.url} key={index} passHref className="mx-4">
            <span
              className={`${
                activeItem === index
                  ? "text-[#37a39a] dark:text-[#37a39a]"
                  : "text-black dark:text-white"
              } text-[18px] px-6 font-Poppins font-[400]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className="md:hidden mt-5">
          <div className="w-full text-center py-6">
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
          {navIteamsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "text-[#37a39a] dark:text-[#37a39a]"
                    : "text-black dark:text-white"
                } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
