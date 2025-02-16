// src/components/Home/FeaturedProjects.tsx
import Link from 'next/link'
import Image from 'next/image'
import projects from '@/data/projects'

export default function FeaturedProjects() {
  // Filter featured projects or take the first few
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    GitHub
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}