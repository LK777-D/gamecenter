"use client";
import { useState } from "react";
import { useFirebaseCtx } from "@/context/firebaseContext";
const AuthForm = () => {
  const [registration, setRegistartion] = useState(false);
  const {
    setRegisterEmail,
    setRegisterPassword,
    setLogInEmail,
    setLogInPassword,
    login,
    register,
  } = useFirebaseCtx();
  return (
    <div className="flex authbg h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      {!registration && (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-4 shadow-lg  max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Instagram</h1>

              <span className="text-gray-300">Enter Login Details</span>
              <div className=" flex flex-col items-center text-sm">
                <span>Test Account</span>
                <span>E-mail : testacc@gmail.com</span>
                <span>Password : 1234567</span>
              </div>
            </div>
            <div>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                  type="email"
                  name="name"
                  placeholder="example@email.com"
                  onChange={(e) => setLogInEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                  type="Password"
                  name="name"
                  placeholder="*********"
                  onChange={(e) => setLogInPassword(e.target.value)}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  onClick={login}
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl  transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
              <p className="w-full text-center mt-3">
                Dont Have an Account ?{" "}
                <button
                  onClick={() => setRegistartion(true)}
                  className="text-yellow-400 underline"
                >
                  Register
                </button>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {registration && (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg  max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Instagram</h1>

              <span className="text-gray-300">Register New Account</span>
            </div>
            <div>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                  type="email"
                  name="name"
                  placeholder="example@email.com"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                  type="Password"
                  name="name"
                  placeholder="*********"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  onClick={register}
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl  transition-colors duration-300 hover:bg-yellow-600"
                >
                  Register
                </button>
              </div>
              <p className="w-full text-center mt-3">
                Already Have an Account ?{" "}
                <button
                  onClick={() => setRegistartion(false)}
                  className="text-yellow-400 underline"
                >
                  Login
                </button>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
