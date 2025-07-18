"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export type ExperienceProps = {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
  icon?: ReactNode;
};

export default function ExperienceCard({
  role,
  company,
  duration,
  location,
  responsibilities,
  techStack,
  icon,
}: ExperienceProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4"
    >
      <div className="flex items-start gap-4">
        {icon && <div className="text-blue-500 text-3xl">{icon}</div>}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {role}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{company}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {duration} · {location}
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
          Responsibilities
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
