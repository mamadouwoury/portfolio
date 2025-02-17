import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Html", level: 90 },
  { name: "Css", level: 90 },
  { name: "Javascript", level: 50 },
  { name: "React (& Native)", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Drizzle", level: 50 },
  { name: "C#", level: 75 },
  { name: "Entity Framework", level: 70 },
  { name: "Sql", level: 80 },
  { name: "Fastify", level: 50 },
];

export default function SkillsSection() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-primary-light">
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="bg-[#FACC15]  h-2.5 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
