"use client";
import User from "./User";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [miniNavOpen, setMiniNavOpen] = useState(false);
  return (
    <nav
      onMouseLeave={() => setMiniNavOpen(false)}
      className="fontskr h-[5rem] bg-purple-950 text-white flex items-center justify-between px-4 lg:px-10"
    >
      <Link href={"/"} className="fontskr text-xl">
        <span className="text-green-400 text-3xl">G</span>ame
        <span className="text-red-400 text-3xl">C</span>enter
      </Link>
      <div className="hidden md:flex fontskr  gap-3 ">
        <Link
          className="transition hover:text-green-400 duration-150 ease-linear"
          href={"/xbox"}
        >
          Xbox
        </Link>
        <Link
          className="transition hover:text-purple-400 duration-150 ease-linear"
          href={"/playstaion"}
        >
          PlayStation
        </Link>
        <Link
          className="transition hover:text-red-400 duration-150 ease-linear"
          href={"/nintendo"}
        >
          Nintendo
        </Link>
      </div>
      <div
        className="hidden md:block relative cursor-pointer"
        onMouseEnter={() => setMiniNavOpen(true)}
      >
        <span>Mini Games</span>
        {miniNavOpen && (
          <div
            className={` absolute mininav ${
              miniNavOpen ? "show" : ""
            } left-5 text-center top-[220%] w-[12rem] z-[1000] bg-purple-950 flex flex-col p-2 `}
          >
            <Link
              className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear"
              href={"/memo"}
            >
              Meme Memo Game
            </Link>
            <Link
              className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear"
              href={"/guessVideoGame"}
            >
              Guess Video Game
            </Link>
          </div>
        )}
      </div>
      <User />
    </nav>
  );
};

export default Nav;
