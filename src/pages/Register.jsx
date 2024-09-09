"use client";
import React from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Register = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/registuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // data contains username, email, password from the form
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");
      }

      const user = await response.json();
      alert("User registered successfully:");
      // console.log("User registered successfully:", user);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm text-black">
      <div className="fixed top-28 right-12 lg:right-[30rem]">
        <button onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="h-auto w-[80%] lg:w-[30%] rounded-xl border-4 border-[#9CFF2E] bg-white">
        <h2 className="text-2xl mt-4 flex justify-center font-bold">
          Register
        </h2>
        <form action="" className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1 items-center">
            <label className="font-semibold -ms-48">Email</label>
            <input
              className=" border-2 border-black rounded-md w-60 h-10"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="flex flex-col gap-1 items-center">
            <label className="font-semibold -ms-40">Username</label>
            <input
              className=" border-2 border-black rounded-md w-60 h-10"
              type="text"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-center">
            <label className="font-semibold -ms-40">Password</label>
            <input
              className="mx-auto border-2 border-black rounded-md w-60 h-10"
              type="password"
              {...register("password", { required: true, minLength: 10 })}
            />
            {errors.password && (
              <p className="text-red-500">
                Password must be at least 10 characters
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-60 h-10 mt-5 bg-[#9CFF2E] hover:bg-[#81d126] border-2 border-black rounded-lg flex mx-auto items-center justify-center transition ease-in-out delay-150"
          >
            <h5 className="font-semibold">Register</h5>
          </button>
        </form>
        <div className="mt-2 flex justify-center">
          <p>
            Have an account?{" "}
            <a className="underline underline-offset-1 font-semibold">
              <Link href="/login">Login</Link>
            </a>
          </p>
          {/* {showRegister ? <Register toggle={toggleregister} /> : null} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
