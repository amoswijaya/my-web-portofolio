/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import { TypingText } from "@/components/ui/typingText";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  CodeIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import FloatingAvatar from "@/components/ui/floatingAvatar";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: any = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: ["easeOut"] },
    },
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-8 lg:py-12"
        >
          <motion.div
            variants={container}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.div
              variants={item}
              className="space-y-3 lg:space-y-4 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hi, I&apos;m Amos Wijaya 👋
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white flex items-center justify-center lg:justify-start">
                <TypingText text="Full Stack Javascript" />
              </h2>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-white leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              Full-stack developer with 4 years front-end depth in React,
              Next.js, TypeScript, Tailwind & Ant Design, complemented by
              hands-on back-end skills in Node.js, Express, PostgreSQL, MongoDB
              and Firebase to design, build and ship complete, scalable web
              solutions end-to-end.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <span className="text-white font-medium">Follow me on:</span>
              <div className="flex space-x-3">
                <motion.a
                  href="https://github.com/amoswijaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:-translate-y-1"
                >
                  <GitHubLogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/amoswijaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:-translate-y-1"
                >
                  <LinkedInLogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-lg bg-gray-800 text-white hover:bg-gray-700 cursor-pointer w-full sm:w-auto"
              >
                <Link href="/project">Explore My Project</Link>
              </motion.button>

              <motion.a
                href="/cv/cv.pdf"
                download="CV-Amos-Wijaya.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white transition cursor-pointer w-full sm:w-auto"
              >
                Download My CV
              </motion.a>
            </motion.div>

            <motion.div variants={item}>
              <h4 className="flex items-center justify-center lg:justify-start gap-2 text-lg font-semibold mb-4 text-white">
                <i className="bx bx-bar-chart-alt text-base" />
                Quick Stats:
              </h4>
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-sm text-white gap-4 lg:gap-6"
              >
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2 bg-gray-800 text-white p-3 rounded-3xl shadow-lg mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-none"
                >
                  <BackpackIcon className="text-xl sm:text-2xl" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">+3 Years</p>
                    <p className="text-xs">Experience</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2 bg-gray-800 text-white p-3 rounded-3xl shadow-lg mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-none"
                >
                  <CodeIcon className="text-xl sm:text-2xl" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">Javascript</p>
                    <p className="text-xs">Language</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="w-full flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
              <FloatingAvatar />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
