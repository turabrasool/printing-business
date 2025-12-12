"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-tertiary transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      )}
    </button>
  )
}