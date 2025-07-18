/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover my journey, passions and the story behind my work.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="relative grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative">
            <Image
              src="/amos.jpg"
              alt="Hizkia"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Who Am I
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a Full-Stack JavaScript graduate of Hacktiv8 Bootcamp, where I
              mastered the MERN stack and modern tooling. I craft responsive,
              interactive and clean UIs, blending design sense with technical
              logic to deliver seamless digital experiences.
            </p>
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Personal Info
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 dark:text-gray-300">
                <InfoRow label="Name" value="Amos Wijaya" />
                <InfoRow label="Date of Birth" value="November 09, 2002" />
                <InfoRow label="Place of Birth" value="Tangerang, Indonesia" />
                <InfoRow label="Email" value="Amoswijaya728@gmail.com" />
                <InfoRow label="Phone" value="+62 813 8260 7228" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      <span className="font-semibold text-gray-900 dark:text-white">
        {label}:
      </span>
      <span className="ml-2">{value}</span>
    </motion.div>
  );
}
