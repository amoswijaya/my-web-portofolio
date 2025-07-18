"use client";
import { motion } from "motion/react";
import ExperienceCard from "@/components/ui/expericenCard";

import { CodeIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    role: "Front-End Developer",
    company: "PT Quorum Nusa Prestasi",
    duration: "Oct 2024 - Present",
    location: "Remote",
    responsibilities: [
      "Develop & maintain responsive web apps with React/Next.js & Tailwind",
      "Translate Figma designs into pixel-perfect UI for ERP Dejavu (logistics)",
      "Design workflow & front-end logic for the ERP system",
      "Build internal back-office web to improve data management",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Figma", "TypeScript"],
    icon: <BackpackIcon />,
  },
  {
    role: "Front-End Developer",
    company: "PT Aktif Bangun Citra",
    duration: "Jun 2023 - May 2024",
    location: "Remote",
    responsibilities: [
      "Built sites from scratch based on Figma using Next.js, Ant Design & Tailwind",
      "Developed NextStep Idaho — scholarship-info platform",
      "Created clinic-appointment app for doctor-patient scheduling",
    ],
    techStack: ["Next.js", "React", "Ant Design", "Tailwind CSS", "Figma"],
    icon: <CodeIcon />,
  },
  {
    role: "Front-End Developer",
    company: "Livecom",
    duration: "Oct 2022 - Apr 2023",
    location: "Remote",
    responsibilities: [
      "Developed web & React-Native apps (employee attendance, SIM/birth-certificate online forms)",
      "Followed Agile sprints & daily stand-ups",
    ],
    techStack: ["React", "Next.js", "Ant Design", "React Native"],
    icon: <BackpackIcon />,
  },
  {
    role: "Front-End Developer",
    company: "D-Shore",
    duration: "Apr 2021 - Sep 2022",
    location: "Remote",
    responsibilities: [
      "Built docs sites & Teams templates with React, Fluent UI, Ant Design",
      "Created internal admin dashboard (Next.js)",
      "Developed mobile time-tracking app (React Native) with Cypress tests",
    ],
    techStack: [
      "React",
      "Next.js",
      "Ant Design",
      "Fluent UI",
      "React Native",
      "Cypress",
    ],
    icon: <RocketIcon />,
  },
];

export default function ExperiencePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h1>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.role} {...exp} />
        ))}
      </div>
    </main>
  );
}
