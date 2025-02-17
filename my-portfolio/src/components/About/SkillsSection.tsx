import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Docker', level: 65 },
];

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4 py-12">
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
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="bg-primary dark:bg-primary-light h-2.5 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}