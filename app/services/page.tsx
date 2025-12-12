"use client"

import { Footer } from "../components/footer"
import { Header } from "../components/header"


import { useState } from "react"
import { 
  Printer, Palette, Truck, Headphones, Shield, Clock,
  CheckCircle, Star, Users, Award, Target, Zap,
  Search, Filter, ChevronRight, Download, MessageSquare,
  FileText, Package, Tag, Layers, Square, Folder,
  BookOpen, FileCheck, Cpu, Smartphone, Monitor,
  PrinterIcon as PrintIcon, Scissors, Thermometer,
  Droplets, Grid, Hash, Type, Image as ImageIcon,
  Bookmark, Share2, Heart, ArrowRight
} from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export default function ServicesPage() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Main Service Categories
  const serviceCategories = [
    { id: "all", name: "All Services", icon: Grid, count: 18, color: "bg-blue-500" },
    { id: "business", name: "Business Printing", icon: FileText, count: 6, color: "bg-green-500" },
    { id: "packaging", name: "Packaging", icon: Package, count: 4, color: "bg-yellow-500" },
    { id: "labels", name: "Labels & Stickers", icon: Tag, count: 3, color: "bg-pink-500" },
    { id: "large-format", name: "Large Format", icon: Square, count: 3, color: "bg-purple-500" },
    { id: "specialty", name: "Specialty Printing", icon: Layers, count: 2, color: "bg-red-500" },
  ]

  // Detailed Services Data
  const detailedServices = [
    {
      id: 1,
      title: "Business Cards",
      category: "business",
      icon: FileText,
      description: "Premium business cards that make a lasting impression",
      features: ["Multiple paper stocks", "Spot UV coating", "Foil stamping", "Die cutting", "Embossing"],
      turnaround: "3-5 business days",
      minQuantity: 100,
      popular: true,
      price: "₨ 2,500+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Brochures & Flyers",
      category: "business",
      icon: BookOpen,
      description: "Effective marketing materials for your business",
      features: ["Full color printing", "Various folds", "Gloss/matte finish", "Multiple sizes", "Bulk discounts"],
      turnaround: "4-7 business days",
      minQuantity: 500,
      popular: true,
      price: "₨ 5,000+",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Letterheads & Envelopes",
      category: "business",
      icon: FileCheck,
      description: "Professional corporate stationery sets",
      features: ["Custom watermarks", "Embossed logos", "Premium paper", "Matching envelopes", "Brand consistency"],
      turnaround: "5-8 business days",
      minQuantity: 500,
      popular: false,
      price: "₨ 8,000+",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Presentation Folders",
      category: "business",
      icon: Folder,
      description: "Custom folders for meetings and presentations",
      features: ["Pocket folders", "Business card slots", "Custom printing", "Various materials", "Logo embossing"],
      turnaround: "7-10 business days",
      minQuantity: 100,
      popular: false,
      price: "₨ 12,000+",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Catalogs & Booklets",
      category: "business",
      icon: BookOpen,
      description: "Professional catalogs for product showcasing",
      features: ["Perfect binding", "Saddle stitching", "High gloss pages", "Custom covers", "Bulk printing"],
      turnaround: "10-14 business days",
      minQuantity: 200,
      popular: false,
      price: "₨ 15,000+",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 6,
      title: "Product Packaging",
      category: "packaging",
      icon: Package,
      description: "Custom packaging solutions for your products",
      features: ["Box printing", "Die-cut windows", "Eco-friendly materials", "Branded packaging", "Protective coating"],
      turnaround: "10-15 business days",
      minQuantity: 500,
      popular: true,
      price: "₨ 20,000+",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      title: "Retail Bags",
      category: "packaging",
      icon: Package,
      description: "Branded shopping bags for retail businesses",
      features: ["Multiple sizes", "Reinforced handles", "Eco-friendly options", "Vibrant printing", "Custom shapes"],
      turnaround: "7-12 business days",
      minQuantity: 1000,
      popular: false,
      price: "₨ 8,000+",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Labels & Stickers",
      category: "labels",
      icon: Tag,
      description: "Custom labels for products and branding",
      features: ["Vinyl stickers", "Waterproof labels", "Die-cut shapes", "Kiss-cutting", "Bulk rolls"],
      turnaround: "3-7 business days",
      minQuantity: 1000,
      popular: true,
      price: "₨ 3,000+",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 9,
      title: "Barcode Labels",
      category: "labels",
      icon: Hash,
      description: "Professional barcode labels for inventory",
      features: ["QR codes", "Barcode printing", "Sequential numbering", "Thermal printing", "Scan-ready"],
      turnaround: "2-5 business days",
      minQuantity: 5000,
      popular: false,
      price: "₨ 5,000+",
      color: "from-gray-500 to-slate-500"
    },
    {
      id: 10,
      title: "Vehicle Wraps",
      category: "large-format",
      icon: Truck,
      description: "Full or partial vehicle wraps for advertising",
      features: ["Full vehicle wraps", "Window graphics", "3M materials", "Professional installation", "Weather resistant"],
      turnaround: "7-14 business days",
      minQuantity: 1,
      popular: true,
      price: "₨ 50,000+",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 11,
      title: "Banners & Signage",
      category: "large-format",
      icon: Square,
      description: "Large format printing for indoor/outdoor use",
      features: ["Vinyl banners", "Fabric banners", "Retractable stands", "Outdoor durability", "Grommet installation"],
      turnaround: "3-7 business days",
      minQuantity: 1,
      popular: true,
      price: "₨ 3,000+",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 12,
      title: "Window Decals",
      category: "large-format",
      icon: Square,
      description: "Custom window graphics for storefronts",
      features: ["Perforated vinyl", "Frosted effects", "Full color printing", "Easy application", "Removable options"],
      turnaround: "4-8 business days",
      minQuantity: 1,
      popular: false,
      price: "₨ 4,000+",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 13,
      title: "Leather Patches",
      category: "specialty",
      icon: Layers,
      description: "Custom leather patches for garments",
      features: ["Genuine leather", "Embossing/debossing", "Foil stamping", "Various colors", "Custom shapes"],
      turnaround: "10-15 business days",
      minQuantity: 100,
      popular: true,
      price: "₨ 15,000+",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 14,
      title: "Foam Board Printing",
      category: "specialty",
      icon: Layers,
      description: "Lightweight display boards for exhibitions",
      features: ["Various thicknesses", "Mounting options", "High gloss finish", "Easy to transport", "Custom sizes"],
      turnaround: "4-8 business days",
      minQuantity: 1,
      popular: false,
      price: "₨ 2,000+",
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 15,
      title: "Digital Printing",
      category: "all",
      icon: Cpu,
      description: "High-quality digital printing for short runs",
      features: ["Quick turnaround", "Variable data", "Photo quality", "Small quantities", "Fast proofs"],
      turnaround: "1-3 business days",
      minQuantity: 1,
      popular: true,
      price: "₨ 1,000+",
      color: "from-sky-500 to-blue-500"
    },
    {
      id: 16,
      title: "Offset Printing",
      category: "all",
      icon: Printer,
      description: "Cost-effective printing for large quantities",
      features: ["Best for bulk", "Color consistency", "Multiple paper types", "Custom inks", "Cost-effective"],
      turnaround: "7-14 business days",
      minQuantity: 1000,
      popular: true,
      price: "₨ 10,000+",
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 17,
      title: "Screen Printing",
      category: "specialty",
      icon: Grid,
      description: "Vibrant printing on various materials",
      features: ["Textile printing", "Plastic printing", "Metal printing", "Vibrant colors", "Durable prints"],
      turnaround: "5-10 business days",
      minQuantity: 50,
      popular: false,
      price: "₨ 8,000+",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 18,
      title: "Foil Stamping",
      category: "specialty",
      icon: Star,
      description: "Luxury metallic finishes for premium products",
      features: ["Gold/Silver foil", "Holographic options", "Custom patterns", "Precision registration", "Luxury finish"],
      turnaround: "5-10 business days",
      minQuantity: 500,
      popular: true,
      price: "₨ 12,000+",
      color: "from-yellow-500 to-amber-500"
    },
  ]

  // Filter services based on category and search
  const filteredServices = detailedServices.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesSearch = searchQuery === "" || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  // Stats
  const stats = [
    { icon: Printer, value: "25,000+", label: "Projects Completed", color: "text-blue-500" },
    { icon: Users, value: "10,000+", label: "Satisfied Clients", color: "text-green-500" },
    { icon: Award, value: "50+", label: "Industry Awards", color: "text-yellow-500" },
    { icon: Clock, value: "28", label: "Years Experience", color: "text-red-500" },
    { icon: Shield, value: "100%", label: "Quality Guarantee", color: "text-purple-500" },
    { icon: Truck, value: "24/7", label: "Delivery Support", color: "text-pink-500" },
  ]

  // Process Steps
  const processSteps = [
    { step: 1, title: "Consultation", description: "Discuss your project requirements", icon: MessageSquare },
    { step: 2, title: "Design", description: "Create or refine your design files", icon: Palette },
    { step: 3, title: "Proofing", description: "Review digital proofs for approval", icon: CheckCircle },
    { step: 4, title: "Printing", description: "Production with quality control", icon: Printer },
    { step: 5, title: "Finishing", description: "Apply coatings and finishing touches", icon: Scissors },
    { step: 6, title: "Delivery", description: "Careful packaging and shipping", icon: Truck },
  ]

  // Printing Technologies
  const technologies = [
    { name: "Digital Printing", icon: Cpu, description: "High-quality prints for short runs and variable data" },
    { name: "Offset Printing", icon: PrintIcon, description: "Cost-effective solution for large quantities" },
    { name: "Large Format", icon: Monitor, description: "Banners, signs, and vehicle wraps up to 10ft wide" },
    { name: "Screen Printing", icon: Grid, description: "Vibrant prints on textiles, plastics, and metals" },
    { name: "Foil Stamping", icon: Star, description: "Luxury metallic finishes for premium products" },
    { name: "Embossing", icon: Type, description: "Raised or recessed designs for tactile appeal" },
    { name: "Die Cutting", icon: Scissors, description: "Custom shapes and intricate cutouts" },
    { name: "UV Coating", icon: Thermometer, description: "Protective glossy or matte finish" },
    { name: "Lamination", icon: Layers, description: "Extra protection and durability" },
    { name: "Variable Data", icon: Hash, description: "Personalized printing for direct mail" },
  ]

  return (
    <>
    <Header />
    <div className="min-h-screen bg-page-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-page-secondary to-page-tertiary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` 
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Professional Printing Services
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
              From business cards to large format banners, we provide comprehensive printing 
              solutions with exceptional quality and service for businesses of all sizes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                Get Instant Quote
              </button>
              <button className="px-8 py-3 bg-page-primary text-primary font-semibold rounded-full border-2 border-light hover:border-accent transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Price List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-page-primary border-b border-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-current/10 mb-3 ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-8 bg-page-secondary sticky top-0 z-40 border-b border-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-page-primary border border-light text-primary placeholder:text-secondary focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-secondary" />
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-accent text-white'
                        : 'bg-page-primary text-secondary hover:text-primary hover:border-accent border border-light'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4" />
                      {cat.name}
                      <span className="text-xs opacity-75">({cat.count})</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-secondary">
              Showing <span className="font-semibold text-primary">{filteredServices.length}</span> services
              {selectedCategory !== "all" && (
                <span> in <span className="font-semibold text-primary">{serviceCategories.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
            </div>
            <div className="text-sm text-secondary">
              Sort by: <select className="bg-transparent text-primary focus:outline-none">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Turnaround Time</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-page-tertiary mb-6">
                <Search className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">No services found</h3>
              <p className="text-secondary mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or select a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
                className="px-6 py-2 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="group">
                  <div className="bg-page-secondary rounded-2xl overflow-hidden border border-light hover:border-accent transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} relative`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          {service.popular && (
                            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-white/80 mb-1">Starting from</div>
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm">{service.description}</p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-secondary">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service Details */}
                      <div className="mt-auto pt-6 border-t border-light">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-secondary mb-1">Turnaround</div>
                            <div className="font-medium text-primary flex items-center gap-2">
                              <Clock className="w-4 h-4 text-accent" />
                              {service.turnaround}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-secondary mb-1">Min. Quantity</div>
                            <div className="font-medium text-primary">{service.minQuantity}+ units</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <button className="py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                            Get Quote
                          </button>
                          <button className="py-2 bg-page-primary text-primary font-semibold rounded-lg border border-light hover:border-accent transition-colors text-sm">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Printing Process</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From concept to delivery, we follow a meticulous 6-step process to ensure 
              exceptional quality and customer satisfaction.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 transform -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-page-primary rounded-2xl p-6 border border-light hover:border-accent transition-colors h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-accent mb-1">Step {step.step}</div>
                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                        <p className="text-secondary">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector for timeline */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 w-8 h-0.5 bg-accent/20">
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-r-0 border-t-[6px] border-b-[6px] border-l-accent/20 border-t-transparent border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Printing Technologies */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Printing Technologies</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We utilize state-of-the-art printing technologies to deliver exceptional 
              results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <tech.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{tech.name}</h3>
                <p className="text-sm text-secondary">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Materials */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Paper & Materials</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Premium Matte", thickness: "300-400gsm", use: "Business Cards" },
                  { name: "Gloss Coated", thickness: "170-350gsm", use: "Brochures" },
                  { name: "Recycled Paper", thickness: "80-250gsm", use: "Eco-friendly" },
                  { name: "Textured Stock", thickness: "250-400gsm", use: "Invitations" },
                  { name: "Vinyl", thickness: "3-5mm", use: "Banners & Stickers" },
                  { name: "Canvas", thickness: "400gsm", use: "Art Prints" },
                  { name: "Synthetic Paper", thickness: "200-300gsm", use: "Waterproof" },
                  { name: "Metallic Paper", thickness: "250-350gsm", use: "Premium" },
                ].map((material, index) => (
                  <div key={index} className="bg-page-primary rounded-xl p-4 border border-light">
                    <div className="font-medium text-primary mb-1">{material.name}</div>
                    <div className="text-sm text-secondary">Thickness: {material.thickness}</div>
                    <div className="text-xs text-accent mt-1">Ideal for: {material.use}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Finishes */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Finishing Options</h2>
              <div className="space-y-4">
                {[
                  { name: "Spot UV Coating", description: "Glossy coating on specific areas for contrast" },
                  { name: "Foil Stamping", description: "Metallic foil applied with heat and pressure" },
                  { name: "Embossing/Debossing", description: "Raised or recessed designs on paper" },
                  { name: "Die Cutting", description: "Custom shapes and intricate cutouts" },
                  { name: "Lamination", description: "Plastic film for protection and durability" },
                  { name: "Perforation", description: "Easy-to-tear sections for coupons and tickets" },
                  { name: "Numbering", description: "Sequential numbers for tickets and documents" },
                  { name: "Round Cornering", description: "Rounded corners for professional look" },
                ].map((finish, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">{finish.name}</div>
                      <div className="text-sm text-secondary">{finish.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Dream Printers?</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We're more than just a printing service - we're your partners in bringing 
              your vision to life with exceptional quality and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "100% satisfaction guaranteed on all our printing services"
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Quick production times without compromising on quality"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced professionals guiding you through every step"
              },
              {
                icon: Target,
                title: "Precision Printing",
                description: "State-of-the-art equipment for perfect results every time"
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Preparation Guide */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">File Preparation Guide</h2>
              <p className="text-secondary">
                Follow these guidelines to ensure your files are print-ready
              </p>
            </div>

            <div className="bg-page-primary rounded-2xl p-8 border border-light">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FileCheck className="w-6 h-6 text-accent" />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Format: PDF (CMYK color mode)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Resolution: 300 DPI minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Bleed: 3mm on all sides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Fonts: Embedded or outlined</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Download className="w-6 h-6 text-accent" />
                    Templates & Resources
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Business Card Template", size: "A4, 3.5x2 inches" },
                      { name: "Brochure Template", size: "A4, tri-fold" },
                      { name: "Letterhead Template", size: "A4, with bleed" },
                      { name: "Banner Template", size: "3x6 feet" },
                    ].map((template, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg border border-light hover:border-accent transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-primary group-hover:text-accent">{template.name}</div>
                          <div className="text-sm text-secondary">{template.size}</div>
                        </div>
                        <Download className="w-5 h-5 text-secondary group-hover:text-accent" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Printing Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote today and experience the Dream Printers difference. 
              Our team is ready to help you create exceptional printed materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-accent font-semibold rounded-full hover:opacity-90 transition-opacity text-lg flex items-center gap-2"
              >
                <MessageSquare className="w-6 h-6" />
                Get Free Quote
              </a>
              <a 
                href="tel:+923224862371" 
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all text-lg flex items-center gap-2"
              >
                <Headphones className="w-6 h-6" />
                Call Now: +92 322 4862371
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              Or upload your files directly through our online portal for instant pricing
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-page-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-secondary">Common questions about our printing services</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What's your typical turnaround time?",
                  a: "Turnaround times vary by service: Digital printing (1-3 days), Offset printing (7-14 days), Large format (3-7 days). Rush services are available for an additional fee."
                },
                {
                  q: "Do you offer design services?",
                  a: "Yes, we have a full-service design team that can create or refine your designs. We offer design packages starting from ₨ 5,000."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept cash, bank transfer, credit/debit cards, and digital payments. 50% deposit is required to start production."
                },
                {
                  q: "Do you offer bulk discounts?",
                  a: "Yes, we offer significant discounts for bulk orders. Contact us with your quantity requirements for a custom quote."
                },
                {
                  q: "Can I see a proof before printing?",
                  a: "Absolutely! We provide digital proofs for all projects. Hard copy proofs are available for an additional fee."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-page-secondary rounded-xl p-6 border border-light">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                  <p className="text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                View all FAQs
                <ArrowRight className="w-5 h-5" />
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