"use client";

import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          onClick={() => setTheme("light")}
          className="w-6 h-6 text-yellow-400 cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className="h-6 w-6 text-black cursor-pointer"
        />
      )}
    </div>
  );
};

export default DarkMode;
