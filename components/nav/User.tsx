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
          <Image alt="img" src={userImg} width={50} height={60} />
        </button>
        <button onClick={openNavHandler}>
          <Image alt="img" src={lines} width={50} height={60} />
        </button>
      </div>
      {
        <div
          className={`absolute drodown mininav ${
            userMenuIsopen ? "show" : ""
          }  p-2 rounded-md flex gap-1 flex-col items-center transition duration-150 ease-out   top-[128%] bg-purple-900 z-50 `}
        >
          <span>Account Details:</span>
          <span className="text-sm">{user && user?.email}</span>
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
          <button
            onClick={logout}
            className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
          >
            Logout
          </button>
        </div>
      }
      {
        <div
          className={`md:hidden ${
            navIsopen ? "slidein" : "slideout"
          } transition duration-150  absolute z-50 flex flex-col items-center justify-around top-[-23%] right-[-15%] w-[80vw]  h-[100vh]  bg-purple-800`}
        >
          <div className="flex flex-col gap-3 w-full items-center">
            <h1 className="text-3xl">GameCenter</h1>
            <div className="h-[1px] bg-gray-300 w-[90%] "></div>
          </div>

          <div className="flex flex-col text-2xl gap-10 w-full px-4">
            <div className="flex flex-col">
              <h1 className="text-center mb-5">Navigation</h1>
              <Link
                href={"/"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Home
              </Link>
              <Link
                href={"/xbox"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Xbox
              </Link>
              <Link
                href={"/playstation"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                PlayStation
              </Link>
              <Link
                href={"/nintendo"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Nintendo
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="text-center mb-5">Mini-Games</h1>
              <Link
                href={"/memo"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Memo Game
              </Link>
              <Link
                href={"/memo"}
                className="rounded-md transition hover:bg-gray-400 duration-150 ease-linear w-full text-center"
              >
                Guess The Video Game
              </Link>
            </div>
          </div>
          <span>user : {user && user?.email}</span>
        </div>
      }
      {navIsopen && <Modal setNavIsOpen={setNavIsOpen} />}
      <div className="hidden md:flex gap-2">
        <span>{user && user.email}</span>
        {user && <Link href={"/myposts"}>My Posts</Link>}
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link href={"/auth"}>LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default User;
