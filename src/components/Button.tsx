"use client";

import { IconLogin } from "@/assets";
import { motion } from "framer-motion";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const LoginButton: React.FC<ButtonProps> = () => {
  const animatedText = {
    hover: {
      x: -40,
    },
  };

  const animatedIcon = {
    hover: {
      x: 40,
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className="hover:bg-gradient-to-r hover:bg-gradient-120 hover:from-primaryRed hover:via-primaryPurple hover:to-cyan-500 bg-primaryPurple  flex items-center justify-center rounded-full text-white text-[12px] w-[209px] px-[25px] py-[15px] h-[40px] hover:h-[45px] transition-all duration-150 ease-in-out"
    >
      <motion.div variants={animatedIcon}>
        <IconLogin className="mr-2" />
      </motion.div>
      <motion.div variants={animatedText}>Login</motion.div>
    </motion.button>
  );
};

export const RegisterButton: React.FC<ButtonProps> = () => {
  return (
    <button className="rounded-full border border-natural07 text-natural03 text-[12px] px-[25px] py-[15px] h-[40px] flex justify-center items-center hover:h-[45px] transition-all duration-300 ease-in-out">
      Register
    </button>
  );
};

export const OAuthButton: React.FC<ButtonProps & { icon: React.ReactNode }> = ({
  icon,
}) => {
  const animatedIcon = {
    hover: {
      scale: 1.2,
      rotate: 12,
      transition: { type: "spring", stiffness: 1000, damping: 20 },
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className="flex justify-center items-center w-[75px] h-[40px] rounded-lg bg-natural75 border-natural07 border-[1px] px-[25px] py-[15px] group"
    >
      <motion.div variants={animatedIcon}>{icon}</motion.div>
    </motion.button>
  );
};
