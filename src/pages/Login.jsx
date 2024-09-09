import { X } from "lucide-react";
import React from "react";
import { useState } from "react";
import Register from "./Register";

const Login = ({ onClose }) => {
  const [showRegister, setShowRegister] = useState(false);

  function toggleregister() {
    setShowRegister(!showRegister);
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm text-black">
      <div className="fixed top-28 right-12 lg:right-[30rem]">
        <button onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="h-[55%] w-[80%] lg:w-[30%] rounded-xl border-4 border-[#9CFF2E] bg-white">
        <h2 className="text-2xl mt-4 flex justify-center font-bold">Login</h2>
        <form action="" className="mt-10">
          <div className="flex flex-col gap-1 items-center">
            <label className="font-semibold -ms-40">Username</label>
            <input
              className=" border-2 border-black rounded-md w-60 h-10"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <label className="font-semibold -ms-40">Password</label>
            <input
              className="mx-auto border-2 border-black rounded-md w-60 h-10"
              type="password"
            />
          </div>
          <button className="w-60 h-10 mt-5 bg-[#9CFF2E] hover:bg-[#81d126] border-2 border-black rounded-lg flex mx-auto items-center justify-center transition ease-in-out delay-150">
            <h5 className="font-semibold">Login</h5>
          </button>
        </form>
        <div className="mt-2 flex justify-center">
          <p>
            Wanna create account?{" "}
            <button
              onClick={toggleregister}
              className="underline underline-offset-1 font-semibold"
            >
              Register
            </button>
          </p>
          {showRegister ? (
            <Register
              toggle={toggleregister}
              onClose={() => setShowRegister(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
