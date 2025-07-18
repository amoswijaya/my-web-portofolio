"use client";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export function TypingText({
  text = "Full Stack Javascript",
}: {
  text?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => text.slice(0, v));

  useEffect(() => {
    const ctrl = animate(count, text.length, {
      type: "tween",
      duration: text.length * 0.1,
      ease: "easeInOut",
    });
    return ctrl.stop;
  }, [count, text]);

  return (
    <span className="inline-flex items-center">
      <motion.span>{display}</motion.span>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-5 w-0.5 bg-current"
      />
    </span>
  );
}
