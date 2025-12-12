"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { 
  ChevronUp, Mail, Phone, Facebook, Instagram, 
  Linkedin, Send, Twitter, Youtube, MapPin, Clock,
  Printer, Sparkles, Heart, Shield, Truck, Headphones
} from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscriptionSuccess(true)
    setTimeout(() => setSubscriptionSuccess(false), 3000)
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", url: "#" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-700", url: "#" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-600", url: "#" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700", url: "#" },
    { icon: Youtube, label: "YouTube", color: "hover:bg-red-700", url: "#" },
  ]

  const features = [
    { icon: Shield, title: "Quality Guarantee", desc: "100% satisfaction guaranteed" },
    { icon: Truck, title: "Fast Delivery", desc: "Free shipping over ₨5000" },
    { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
  ]

  return (
    
    <footer className="bg-page-secondary relative">
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-secondary mb-8">
            Subscribe to our newsletter for the latest updates and exclusive offers
          </p>

          <form onSubmit={handleSubmit} className="relative">
            {subscriptionSuccess && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
                🎉 Thanks for subscribing!
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full bg-page-primary border border-light text-primary placeholder:text-secondary focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">DreamPrinters</h3>
                <p className="text-sm text-secondary">Where Ideas Become Reality</p>
              </div>
            </div>
            <p className="text-secondary leading-relaxed">
              Professional printing services with precision and creativity since 1996.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className={`w-10 h-10 rounded-full bg-page-tertiary flex items-center justify-center text-secondary hover:text-white transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Services', 'Portfolio', 'Pricing', 'About Us', 'Blog', 'Contact', 'FAQs', 'Careers'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-secondary hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-secondary">123 Print Street, Karachi, Pakistan</span>
              </div>
              <a href="tel:+923224862371" className="flex items-center gap-3 text-secondary hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+92 322 4862371</span>
              </a>
              <a href="mailto:info@dreamprinters.org" className="flex items-center gap-3 text-secondary hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@dreamprinters.org</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Business Hours
            </h3>
            <div className="space-y-3">
              {[
                { days: 'Mon - Fri', hours: '9:00 AM - 7:00 PM' },
                { days: 'Saturday', hours: '10:00 AM - 5:00 PM' },
                { days: 'Sunday', hours: 'Closed' },
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-secondary">{schedule.days}</span>
                  <span className={`font-medium ${schedule.hours === 'Closed' ? 'text-red-400' : 'text-primary'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-secondary">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>Made by DreamPrinters © 2025</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-secondary">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center transition-all duration-500 hover:scale-110 z-50 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
        </div>
    </footer>
  )
}