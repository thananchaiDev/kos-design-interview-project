"use client";

import { ImageBackgroundLoginLight } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Light = () => {
  return (
    <motion.div
      className="absolute z-[4] w-full h-full flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{
        opacity: [0, 1, 0, 1],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 5,
      }}
    >
      <Image
        src={ImageBackgroundLoginLight}
        alt="background-login"
        style={{
          objectFit: "contain",
          width: "220px",
          height: "500px",
          objectPosition: "-20px 13%",
        }}
        quality={100}
      />
    </motion.div>
  );
};

export default Light;
