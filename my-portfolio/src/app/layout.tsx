import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css' // Update import path
import Footer from '@/components/Layout/Footer'
import Sidebar from '@/components/Layout/Sidebar'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Professional portfolio showcasing your skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text`}>
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <main className="md:ml-64 flex-grow min-h-screen">
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}