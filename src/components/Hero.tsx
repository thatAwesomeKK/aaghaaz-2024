import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tilt = Merriweather({ subsets: ['latin'], weight: ["900"] })

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-evenly items-center w-screen my-16">
      <div className="relative h-52 w-52">
        <Image src="/assets/birdlogo.png" alt="birdlogo" fill />
      </div>
      <div>
        <h1
          className={`${tilt.className} text-center text-7xl font-bold text-black tracking-wide pt-10`}
        >
          AAGHAAZ 2K24
        </h1>
        <div className="flex items-center justify-center h-16 relative">
          <p
            className={`${tilt.className} absolute font-bold text-3xl bg-[#2864b8] z-10 px-2 text-black text-center`}
          >
            Mega Fest Fusion
          </p>
          <hr className="absolute w-[90vw] md:w-[50vw] lg:w-[30vw] bg-gray-200" />
        </div>
        <p className="-mt-4 text-lg font-bold text-white text-center">
          {" "}
          By Department of MBA & MCA
        </p>
        <Link
          className="flex justify-center animate-pulse font-extrabold text-2xl text-yellow-400 mt-3"
          href="https://forms.gle/EgS5JkfpdJMKUP6q6"
          target="_blank"
        >
          Register Here!
        </Link>
      </div>
      <div className="relative lg:mt-0 mt-3 h-28 w-28 lg:h-52 lg:w-52">
        <Image
          className="object-cover"
          src="/assets/AaghaazQR.png"
          alt="logo"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
