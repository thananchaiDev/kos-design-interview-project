"use client";

import { IconStickyLoop } from "@/assets";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const StickyLoop = () => {
  const controls = useAnimation();

  useEffect(() => {
    const rotate = async () => {
      const controlOptions = {
        transition: {
          duration: 1,
          type: "spring",
          damping: 18,
          stiffness: 700,
        },
      };

      while (true) {
        await controls.start({ rotate: 45, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 90, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 135, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 180, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 225, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 270, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 315, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 360, ...controlOptions });
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    };

    rotate();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <IconStickyLoop />
    </motion.div>
  );
};

export default StickyLoop;
