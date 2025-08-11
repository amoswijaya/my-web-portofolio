"use client";
import { motion } from "motion/react";
import ProjectCard, { Project } from "@/components/ui/projectCard";

const projects: Project[] = [
  {
    title: "Tmdb Clone",
    type: "Frontend",
    year: "2024",
    status: "Completed",
    features: [
      "Responsive design with Tailwind CSS",
      "Dynamic movie search and filtering",
      "Movie details and reviews",
    ],
    tech: ["React", "NextJs", "Tailwind"],
    live: "https://tmdb-clone-rho-six.vercel.app/",
    code: "https://github.com/amoswijaya/tmdb_clone",
  },
  {
    title: "My Blog",
    type: "Frontend",
    year: "2025",
    status: "Completed",
    features: [
      "Responsive design with Tailwind CSS",
      "Markdown support for blog posts",
      "Dynamic routing for posts",
      "Loading animations with Shadcn UI",
      "Login and registration system",
      "Admin dashboard for managing posts",
    ],
    tech: ["React", "NextJs", "Tailwind", "Shadcn UI"],
    live: "https://my-blog-lime-one-52.vercel.app/login",
    code: "https://github.com/amoswijaya/my-blog",
  },
  {
    title: "Disney+ Clone",
    type: "Frontend",
    year: "2024",
    status: "Completed",
    features: [
      "Responsive design with Tailwind CSS",
      "Styling with Tailwind CSS",
      "Clone of Disney+ UI",
    ],
    tech: ["React", "NextJs", "Tailwind", "Shadcn UI"],
    code: "https://github.com/amoswijaya/disney-clone",
    live: "https://disney-clone-amos.vercel.app/",
  },
  {
    title: "MDRL Store",
    type: "Frontend",
    year: "2024",
    status: "Completed",
    features: [
      "Responsive design with Tailwind CSS",
      "Styling with Tailwind CSS",
      "E-commerce store UI",
    ],
    tech: ["React", "NextJs", "Tailwind", "Redux Toolkit"],
    live: "https://online-store-eight-phi.vercel.app/",
    code: "https://github.com/amoswijaya/e-commerce",
  },
  {
    title: "Movie App",
    type: "Mobile",
    year: "2025",
    status: "Completed",
    features: [
      "Dynamic movie search and filtering",
      "Movie details and reviews",
      "Built with React Native",
    ],
    tech: ["React Native", "Expo", "NativieWind"],
    code: "https://github.com/amoswijaya/movie-app",
  },
  {
    title: "E-commerce App API",
    type: "Backend",
    year: "2025",
    status: "Completed",
    features: [
      "RESTful API for e-commerce app",
      "User authentication and authorization",
      "Product management",
      "Cart and wishlist functionality",
    ],
    tech: ["NodeJS", "ExpressJs", "Prisma", "PostgreSQL", "Docker"],
    code: "https://github.com/amoswijaya/eco-shop-Be",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </motion.div>
    </main>
  );
}
