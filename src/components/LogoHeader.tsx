"use client";

import { IconLanguage, IconLogo, IconTM } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoHeader = () => {
  return (
    <div className="absolute top-5 left-5 z-[99] flex flex-row items-center">
      <motion.div
        initial={{
          width: 150
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{
          width: 220,
        }}
        className="bg-primaryRed w-[150px] h-[30px] flex flex-row items-center pl-1 rounded-lg relative group"
      >
        <div className="absolute right-[-20px] top-0">
          <IconTM />
        </div>
        <div className="bg-natural08 px-[10px] h-[26px] flex justify-center items-center rounded-lg">
          <IconLogo />
        </div>
        <div className="font-bold text-[14px] ml-2">NAKAMOTO<span className="opacity-0 group-hover:opacity-100 transition">.GAMES</span></div>
      </motion.div>
      <div className="border h-[10px] w-0 right-0 ml-10 border-natural07" />
      <div className="ml-5">
        <Image src={IconLanguage} alt="icon-language" priority quality={100} />
      </div>
    </div>
  );
};
