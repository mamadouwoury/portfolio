'use client'

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    
    // Determine initial theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light')
    
    // Set initial theme
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    
    // Mark as mounted to prevent hydration issues
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    
    // Update state
    setTheme(newTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme)
    
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Prevent rendering until theme is set to avoid hydration mismatches
  if (!isMounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}