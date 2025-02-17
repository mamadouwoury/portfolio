import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Biography() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light text-center">
        About Me
      </h2>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start space-x-4"
        >
          <AcademicCapIcon className="h-10 w-10 text-primary dark:text-primary-light flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Graduate of the Associate Degree in Programming at{" "}
              <a
                className="text-blue-500 dark:text-primary-light"
                href="https://www.ap.be/campus/campus-spoor-noord-noorderplaats"
                target="_blank"
                rel="noopener noreferrer"
              >
                AP University of Applied Sciences
              </a>
              .
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start space-x-4"
        >
          <CodeBracketIcon className="h-10 w-10 text-primary dark:text-primary-light flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full-stack web developer with a passion for creating innovative,
              scalable solutions. Experienced in developing responsive web
              applications using modern technologies.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start space-x-4"
        >
          <GlobeAltIcon className="h-10 w-10 text-primary dark:text-primary-light flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about studying and exploring new technologies to deepen
              my understanding of software development. Dedicated to leveraging
              technology to seamlessly meet needs while continuously learning
              and pushing the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="italic text-gray-500 dark:text-gray-400">
          "Transforming ideas into elegant, efficient solutions through code."
        </p>
      </motion.div>
    </div>
  );
}
