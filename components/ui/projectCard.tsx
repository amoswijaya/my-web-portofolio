"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export type Project = {
  title: string;
  type: "Frontend" | "Backend" | "Fullstack" | "Mobile";
  year: string;
  status: "Completed" | "In Progress";
  features: string[];
  tech: string[];
  live?: string;
  code?: string;
};

export default function ProjectCard(props: Project) {
  const { title, type, year, status, features, tech, live, code } = props;

  const statusColor =
    status === "Completed"
      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4"
    >
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-sm">
          <span className="text-gray-600 dark:text-gray-300">{type}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-600 dark:text-gray-300">{year}</span>
          <span
            className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium ${statusColor}`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Features */}
      <div>
        <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
          Features
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        {live && (
          <Link
            href={live}
            target="_blank"
            className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Demo
          </Link>
        )}
        {code && (
          <Link
            href={code}
            target="_blank"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:underline"
          >
            <GitHubLogoIcon className="w-4 h-4" />
            Code
          </Link>
        )}
      </div>
    </motion.article>
  );
}
