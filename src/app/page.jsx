import Button_get from "@/components/Button_get";
import Navbar from "@/pages/Navbar";
import React from "react";

export default function Home() {
  return (
    <main className="h-screen w-auto top-0  z-0 bg-[#FFFBE6]">
      <Navbar />
      <div className=" py-28 lg:py-36 ms-5 lg:mx-24 ">
        <h2 className="font-extrabold text-3xl lg:text-6xl">
          Adventure awaits <p>are you ready?</p>
        </h2>
        <div className="mt-1 lg:mt-5">
          <p className="lg:text-lg">
            With{" "}
            <span className="underline underline-offset-1">Journetjot</span>,
            every trip
          </p>
          <p className="lg:text-lg">will be more organized and enjoyable.</p>
          <Button_get />
        </div>
      </div>
    </main>
  );
}
