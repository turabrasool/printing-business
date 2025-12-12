"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (systemPrefersDark) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    
    // Set CSS variables for background colors
    const root = document.documentElement
    if (theme === "dark") {
      root.style.setProperty('--page-bg-primary', '#121212')
      root.style.setProperty('--page-bg-secondary', '#1a1a1a')
      root.style.setProperty('--page-bg-tertiary', '#2d2d2d')
      document.body.style.backgroundColor = '#121212'
      document.documentElement.classList.add("dark")
    } else {
      root.style.setProperty('--page-bg-primary', '#ffffff')
      root.style.setProperty('--page-bg-secondary', '#f8f9fa')
      root.style.setProperty('--page-bg-tertiary', '#f1f3f5')
      document.body.style.backgroundColor = '#ffffff'
      document.documentElement.classList.remove("dark")
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  const value = {
    theme,
    toggleTheme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-screen transition-colors duration-300 bg-page-primary">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}