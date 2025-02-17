// src/components/Home/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-2xl dark:text-white">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Mamadou Barry
        </h1>
        <p className="text-xl mb-8">
          A passionate junior web developer creating innovative digital experiences
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/projects" 
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/60 transition"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}