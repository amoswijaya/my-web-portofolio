"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CodeIcon, BackpackIcon } from "@radix-ui/react-icons";

const floatIcon = (
  Icon: React.ElementType,
  className: string,
  delay: number
) => (
  <motion.div
    className={`absolute text-4xl ${className} bg-white rounded-full p-6 shadow-lg text-black`}
    initial={{ y: 0 }}
    animate={{ y: [-6, 6, -6] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    <Icon />
  </motion.div>
);

export default function FloatingAvatar() {
  return (
    <div className="relative w-max mx-auto">
      <Image
        src="/amos.jpg"
        alt="Profile"
        width={500}
        height={500}
        className="aspect-square w-[250px] sm:w-[300px] lg:w-[400px] xl:w-[500px] rounded-full shadow-lg object-cover object-top transition-transform hover:scale-105 hover:shadow-xl"
      />

      <div className="hidden lg:block">
        {floatIcon(CodeIcon, "top-0 left-0 -translate-x-12 -translate-y-12", 0)}
        {floatIcon(
          BackpackIcon,
          "top-0 right-0 translate-x-12 -translate-y-12",
          0.4
        )}
        {floatIcon(
          CodeIcon,
          "bottom-0 left-0 -translate-x-12 translate-y-12",
          0.8
        )}
        {floatIcon(
          BackpackIcon,
          "bottom-0 right-0 translate-x-12 translate-y-12",
          1.2
        )}
      </div>
    </div>
  );
}
