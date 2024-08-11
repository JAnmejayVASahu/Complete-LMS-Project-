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
  activeIteam: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeIteam, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navIteamsData.map((item, index) => (
          <Link href={item.url} key={index} passHref className="mx-4">
            <span
              className={`${
                activeIteam === index
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
            {navIteamsData.map((item, index) => (
              <Link href={item.url} key={index} passHref>
                <span
                  className={`${
                    activeIteam === index
                      ? "text-[#37a39a] dark:text-[#37a39a]"
                      : "text-black dark:text-white"
                  } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
