"use client"

import Link from "next/link"
import { MapPin, Calendar, Users, Award } from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export function AboutUs() {
  const { theme } = useTheme()

  const stats = [
    { icon: Calendar, value: "25+", label: "Years Experience" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Award, value: "100+", label: "Awards Won" },
  ]

  return (
    <section className="bg-page-primary relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/dream-printers-office-workspace.jpg"
                alt="Dream Printers Office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-page-secondary backdrop-blur-sm rounded-xl p-6 border border-light shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-accent text-sm font-medium mb-4 tracking-wide">ABOUT US</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Dream Printers</h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Founded in February 1996, Dream Printers has been a cornerstone in the textile printing industry for over
              two decades. We specialize in printing high-quality garment accessories, including hang tags, size cards,
              woven labels, care labels, and leather patches.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-secondary">Over 25 years of printing excellence</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-secondary">State-of-the-art printing technology</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-secondary">Professional design and printing services</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#about"
                className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                About Us
              </Link>
              <Link
                href="#location"
                className="px-8 py-3 bg-page-secondary text-primary font-semibold rounded-full border border-light hover:border-accent hover:text-accent transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Find A Location
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Colorful bottom stripe - Consistent with theme */}
      <div className="h-1 bg-gradient-to-r from-accent via-transparent to-accent opacity-50" />
      
      {/* Striped bars at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-gray-400" />
        <div className="flex-1 bg-gray-600" />
        <div className="flex-1 bg-gray-400" />
        <div className="flex-1 bg-gray-600" />
        <div className="flex-1 bg-gray-400" />
        <div className="flex-1 bg-gray-600" />
      </div>
    </section>
  )
}