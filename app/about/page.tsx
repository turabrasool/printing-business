"use client"

import { Footer } from "../components/footer"
import { Header } from "../components/header"


import { 
  Target, Award, Users, Clock, Shield, Star,
  Heart, TrendingUp, Globe, Zap, CheckCircle,
  Printer, Palette, Truck, Headphones
} from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export default function AboutPage() {
  const { theme } = useTheme()

  const milestones = [
    { year: "1996", title: "Company Founded", description: "Started as a small printing shop in Karachi" },
    { year: "2002", title: "First Expansion", description: "Moved to larger facility with modern equipment" },
    { year: "2010", title: "Digital Transformation", description: "Added digital printing and online services" },
    { year: "2015", title: "International Clients", description: "Started serving clients in 5+ countries" },
    { year: "2020", title: "Modern Facility", description: "Opened state-of-the-art printing facility" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top printing service provider" },
  ]

  const values = [
    { icon: Heart, title: "Passion", description: "We love what we do and it shows in every print." },
    { icon: Shield, title: "Integrity", description: "Honest pricing, transparent processes, reliable service." },
    { icon: Star, title: "Excellence", description: "Striving for perfection in every project we undertake." },
    { icon: Users, title: "Collaboration", description: "Working together with clients to achieve their vision." },
    { icon: TrendingUp, title: "Innovation", description: "Embracing new technologies and techniques." },
    { icon: Globe, title: "Sustainability", description: "Eco-friendly practices and materials." },
  ]

  const team = [
    { name: "Ali Khan", role: "Founder & CEO", experience: "28 years", speciality: "Printing Technology" },
    { name: "Sara Ahmed", role: "Creative Director", experience: "15 years", speciality: "Design & Branding" },
    { name: "Mohammad Asif", role: "Production Manager", experience: "20 years", speciality: "Quality Control" },
    { name: "Fatima Zafar", role: "Operations Head", experience: "12 years", speciality: "Client Relations" },
    { name: "Ahmed Raza", role: "Lead Designer", experience: "10 years", speciality: "Digital Design" },
    { name: "Zainab Malik", role: "Print Specialist", experience: "8 years", speciality: "Specialty Printing" },
  ]

  const stats = [
    { icon: Printer, value: "25,000+", label: "Projects Completed" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Industry Awards" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Clock, value: "28", label: "Years Experience" },
    { icon: Zap, value: "99.8%", label: "Satisfaction Rate" },
  ]

  const services = [
    { icon: Palette, title: "Design Services", description: "Professional graphic design and brand identity development" },
    { icon: Printer, title: "Print Production", description: "High-quality printing using latest technology" },
    { icon: Truck, title: "Delivery & Logistics", description: "Nationwide delivery with real-time tracking" },
    { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer support and consultation" },
  ]

  return (
    <>
    <Header />
    <div className="min-h-screen bg-page-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-page-secondary to-page-tertiary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              About Dream Printers
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
              For over 28 years, we've been transforming ideas into tangible realities through 
              exceptional printing services. From humble beginnings to industry leadership, 
              our journey has been defined by passion, innovation, and unwavering commitment to quality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                Our Story
              </button>
              <button className="px-8 py-3 bg-page-primary text-primary font-semibold rounded-full border-2 border-light hover:border-accent transition-all">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Journey</h2>
              <div className="space-y-4 text-secondary">
                <p>
                  Founded in 1996 by Ali Khan, Dream Printers began as a small print shop in Karachi 
                  with just two employees and a single offset press. What started as a passion project 
                  quickly grew into a reputable business known for its attention to detail and 
                  commitment to quality.
                </p>
                <p>
                  Over the years, we've continuously invested in cutting-edge technology and 
                  expanded our service offerings. From traditional offset printing to modern digital 
                  solutions, we've evolved with the industry while maintaining our core values of 
                  craftsmanship and customer satisfaction.
                </p>
                <p>
                  Today, we operate from a state-of-the-art facility spanning 20,000 square feet, 
                  equipped with the latest printing technology and staffed by a team of passionate 
                  professionals. Our journey is a testament to what can be achieved with dedication, 
                  innovation, and an unwavering focus on excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Printer className="w-16 h-16 text-accent" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-page-tertiary flex items-center justify-center">
                    <Palette className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl bg-page-tertiary flex items-center justify-center">
                    <Award className="w-16 h-16 text-primary" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Milestones</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              A timeline of key moments in our journey to becoming a printing industry leader.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-page-secondary rounded-2xl p-6 border border-light">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-secondary">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-accent border-4 border-page-primary"></div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do at Dream Printers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-page-primary rounded-2xl p-6 border border-light hover:border-accent transition-colors">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              The talented individuals behind our success, bringing decades of combined experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-page-secondary rounded-2xl p-6 border border-light hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-2">{member.role}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <Clock className="w-4 h-4" />
                        <span>{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <Target className="w-4 h-4" />
                        <span>Speciality: {member.speciality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Comprehensive printing solutions backed by expertise and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Quality Promise</h2>
            <div className="space-y-6 text-secondary text-lg">
              <p>
                Every project at Dream Printers undergoes rigorous quality checks at multiple stages. 
                From design approval to final delivery, we maintain the highest standards in the industry.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  "100% Satisfaction Guarantee",
                  "Industry-Leading Color Accuracy",
                  "Premium Materials Only"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-page-secondary to-page-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-secondary mb-8">
              Whether you're a small business or a large corporation, we have the expertise and 
              resources to bring your printing projects to life with excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Start Your Project
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 bg-page-primary text-primary font-semibold rounded-full border-2 border-light hover:border-accent transition-all text-lg"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}