// src/components/Home/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Hi, I'm Mamadou Barry
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A passionate web developer creating innovative digital experiences
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/projects" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}