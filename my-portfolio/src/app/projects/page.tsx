"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center text-primary dark:text-primary-light">
            My Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light px-2 py-1 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition"
                      >
                        <CodeBracketIcon className="h-5 w-5 mr-2" />
                        GitHub
                      </Link>
                    )}

                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition"
                      >
                        <LinkIcon className="h-5 w-5 mr-2" />
                        Live Site
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
