"use client";
import Login from "@/pages/Login";
import React from "react";
import { useState } from "react";

const Button = () => {
  const [seen, setSeen] = useState(false);

  // function popup modal
  function togglepop() {
    setSeen(!seen);
  }
  return (
    <div>
      <button
        onClick={togglepop}
        className="h-7 w-16 rounded-full bg-black text-[#FFFBE6]"
      >
        <h5 className="flex justify-center mb-0.5 font-semibold">Login</h5>
      </button>
      {seen ? (
        <Login toggle={togglepop} onClose={() => setSeen(false)} />
      ) : null}
    </div>
  );
};

export default Button;
