import Link from 'next/link'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter 
} from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/yourusername',
      label: 'GitHub' 
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn' 
    }
   
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label={label}
            >
              <Icon 
                size={24}  // Use size prop
                color="currentColor"  // Use color prop instead of className
              />
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mamadou Barry. All rights reserved.
        </p>
      </div>
    </footer>
  )
}