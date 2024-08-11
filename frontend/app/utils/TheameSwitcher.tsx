"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FiSunrise } from "react-icons/fi";
import { LuSunset } from "react-icons/lu";

export const TheameSwitcher = () => {
  const [mountent, setMountent] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMountent(true);
  });

  if (!mountent) return null;

  return (
    <div className="text-black dark:text-white flex iteams-center justify-between mx-4 transition-all duration-300 ease-in-out">
      <button
        className="text-black dark:text-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <FiSunrise
            className="cursor-pointer"
            fill="black"
            size={25}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <LuSunset
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("light")}
          />
        )}
      </button>
    </div>
  );
};
