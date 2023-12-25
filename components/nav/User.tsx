"use client";
import { useFirebaseCtx } from "@/context/firebaseContext";
import { useState, useEffect } from "react";
import lines from "@/assets/menu.svg";
import userImg from "@/assets/user.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
const User = () => {
  const { user, logout } = useFirebaseCtx();
  const [userMenuIsopen, setUserMenuIsOpen] = useState(false);
  const [navIsopen, setNavIsOpen] = useState(false);

  const openNavHandler = () => {
    setUserMenuIsOpen(false);
    setNavIsOpen(true);
  };
  useEffect(() => {
    document.body.style.overflow = navIsopen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [navIsopen]);
  return (
    <div className="relative">
      <div className="flex gap-2 md:hidden">
        <button onClick={() => setUserMenuIsOpen((prev) => !prev)}>
          <Image alt="img" src={userImg} width={40} height={40} />
        </button>
        <button onClick={openNavHandler}>
          <Image alt="img" src={lines} width={40} height={40} />
        </button>
      </div>
      {
        <div
          className={`absolute drodown mininav ${
            userMenuIsopen ? "show" : ""
          }  p-2 rounded-md flex gap-1 flex-col items-center transition duration-150 ease-out   top-[128%] bg-purple-900 z-50 `}
        >
          <h2 className="flex gap-1">
            <span>Account</span>
            <span>Details:</span>
          </h2>
          <span className="text-sm mb-1">
            {user ? user?.email : "login to see user"}
          </span>
          {userMenuIsopen && (
            <>
              <Link
                href={"/posts/new"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Add Item
              </Link>
              <Link
                href={"/posts/myposts"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                My Posts
              </Link>
              <Link
                href={""}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                All Items
              </Link>
            </>
          )}
          {user ? (
            <button
              onClick={logout}
              className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              href={"/auth"}
            >
              Login
            </Link>
          )}
        </div>
      }
      {navIsopen && (
        <div
          className={`md:hidden appear transition duration-150  absolute z-50 flex flex-col items-center justify-center gap-10 top-[-23%] right-[-15%] w-[80vw]  h-[100vh]  bg-purple-800`}
        >
          <div className="flex flex-col gap-3 w-full items-center">
            <h1 className="text-2xl">GameCenter</h1>
            <div className="h-[1px] bg-gray-300 w-[90%] "></div>
          </div>

          <div className="flex flex-col text-2xl gap-10 w-full px-4">
            <div className="flex flex-col">
              <h1 className="text-center mb-1">Navigation</h1>
              <div className="mb-4 h-[1px] bg-gray-300 w-[70%] mx-auto "></div>
              <Link
                href={"/"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Home
              </Link>
              <Link
                href={"/xbox"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Xbox
              </Link>
              <Link
                href={"/playstation"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                PlayStation
              </Link>
              <Link
                href={"/nintendo"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Nintendo
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="text-center mb-2">Mini-Games</h1>
              <div className="mb-4 h-[1px] bg-gray-300 w-[70%] mx-auto "></div>
              <Link
                href={"/memo"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Memo Game
              </Link>
              <Link
                href={"/guessVideoGame"}
                className="rounded-md text-[1.1rem] transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Guess The Video Game
              </Link>
            </div>
          </div>
          <span className="mb-20">
            user : {user ? user?.email : "login to see user e-mail"}
          </span>
        </div>
      )}
      {navIsopen && <Modal setNavIsOpen={setNavIsOpen} />}
      <div className="hidden md:flex gap-2">
        <span className="hidden lg:inline">{user && user.email}</span>
        {user && (
          <div className="flex gap-1">
            <Link href={"/posts/myposts"} className="hover:underline">
              My Posts
            </Link>
            <Link href={"/posts/new"} className="hover:underline">
              Add Item
            </Link>
          </div>
        )}
        {user ? (
          <button className="hover:underline" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link className="hover:underline" href={"/auth"}>
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default User;
