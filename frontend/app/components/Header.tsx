"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavIteams from "../utils/NavIteams";
import { TheameSwitcher } from "../utils/TheameSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import CustomeModel from "../utils/CustomeModel";
import Login from "./Auth/login";
import Signup from "./Auth/SignUp";
import Verification from "./Auth/Verification";
import { useSelector } from "react-redux";
import avatar from "../../public/asseests/avatar.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  useLogOutQuery,
  useSocialAuthMutation,
} from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);

  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({
          email: data?.user?.email,
          name: data?.user?.name,
          avatar: data.user?.image,
        });
      }
    }
    if (data === null) {
      if (isSuccess) {
        toast.success("Login Successfully");
      }
    }
    if (data === null) {
      setLogout(true);
    }
  }, [data, user]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };
  console.log(user);
  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
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
              <NavIteams activeItem={activeItem} isMobile={false} />
              <TheameSwitcher />
              {/* only for mobile */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  onClick={() => setOpenSidebar(true)}
                  className="cursor-pointer text-black dark:text-white"
                  size={25}
                />
              </div>
              {user ? (
                <Link href={"/profile"}>
                  <Image
                    src={user.avatar ? user.avatar : avatar}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  />
                </Link>
              ) : (
                <FaUserCircle
                  className="hidden 800px:block cursor-pointer text-black dark:text-white"
                  size={25}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] bg-[#00000024] dark:bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavIteams activeItem={activeItem} isMobile={true} />
              <FaUserCircle
                onClick={() => setOpen(true)}
                className="cursor-pointer ml-5 my-2 text-black dark:text-white"
                size={25}
              />
              <br />
              <br />
              <p className="text-[16px] px-2 pl-2 text-black dark:text-white">
                Copyright &copy; {new Date().getFullYear()} Sticky Learning
              </p>
            </div>
          </div>
        )}
      </div>
      {route === "Login" && (
        <>
          {open && (
            <CustomeModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomeModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Signup}
            />
          )}
        </>
      )}
      {route === "Verification" && (
        <>
          {open && (
            <CustomeModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
