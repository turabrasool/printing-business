"use client"

import { Footer } from "../components/footer"
import { Header } from "../components/header"


import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Search, Filter, X, ZoomIn, Download, 
  Heart, Share2, Printer, Palette, 
  Award, Users, Clock, Star,
  Grid, List, ChevronLeft, ChevronRight
} from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export default function GalleryPage() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = [
    { id: "all", name: "All Projects", count: 156 },
    { id: "business", name: "Business Cards", count: 28 },
    { id: "packaging", name: "Packaging", count: 42 },
    { id: "labels", name: "Labels & Stickers", count: 35 },
    { id: "brochures", name: "Brochures", count: 24 },
    { id: "banners", name: "Banners", count: 18 },
    { id: "specialty", name: "Specialty Printing", count: 9 },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Premium Leather Business Cards",
      category: "business",
      description: "Embossed leather business cards with gold foil stamping for luxury brand",
      tags: ["Business Cards", "Leather", "Foil Stamping", "Embossing"],
      year: "2024",
      client: "Luxury Watches Inc.",
      image: "/gallery/business-cards-1.jpg"
    },
    {
      id: 2,
      title: "Eco-Friendly Product Packaging",
      category: "packaging",
      description: "Sustainable packaging design with soy-based inks and recycled materials",
      tags: ["Packaging", "Eco-Friendly", "Sustainable", "Recycled"],
      year: "2024",
      client: "Green Beauty Co.",
      image: "/gallery/packaging-1.jpg"
    },
    {
      id: 3,
      title: "Custom Wine Label Collection",
      category: "labels",
      description: "Elegant wine labels with metallic inks and textured paper stock",
      tags: ["Labels", "Wine", "Metallic", "Premium"],
      year: "2023",
      client: "Vineyard Estates",
      image: "/gallery/labels-1.jpg"
    },
    {
      id: 4,
      title: "Corporate Brochure Series",
      category: "brochures",
      description: "Complete corporate identity brochure with gatefold design",
      tags: ["Brochures", "Corporate", "Gatefold", "Branding"],
      year: "2023",
      client: "Tech Innovations Ltd.",
      image: "/gallery/brochures-1.jpg"
    },
    {
      id: 5,
      title: "Large Format Event Banner",
      category: "banners",
      description: "20ft vinyl banner for international trade show exhibition",
      tags: ["Banners", "Large Format", "Vinyl", "Events"],
      year: "2023",
      client: "Global Expo 2023",
      image: "/gallery/banners-1.jpg"
    },
    {
      id: 6,
      title: "Thermal Sticker Collection",
      category: "labels",
      description: "Custom thermal stickers for product labeling and barcoding",
      tags: ["Stickers", "Thermal", "Barcode", "Product Labels"],
      year: "2024",
      client: "Logistics Solutions",
      image: "/gallery/stickers-1.jpg"
    },
    {
      id: 7,
      title: "Luxury Perfume Packaging",
      category: "packaging",
      description: "High-end perfume box with velvet finish and magnetic closure",
      tags: ["Packaging", "Luxury", "Perfume", "Magnetic Closure"],
      year: "2024",
      client: "Scents of Elegance",
      image: "/gallery/packaging-2.jpg"
    },
    {
      id: 8,
      title: "Embossed Letterhead Set",
      category: "specialty",
      description: "Corporate stationery with blind embossing and premium cotton paper",
      tags: ["Letterheads", "Embossing", "Stationery", "Corporate"],
      year: "2023",
      client: "Legal Associates LLP",
      image: "/gallery/letterheads-1.jpg"
    },
    {
      id: 9,
      title: "Retail Shopping Bags",
      category: "packaging",
      description: "Custom retail bags with reinforced handles and vibrant printing",
      tags: ["Packaging", "Retail", "Shopping Bags", "Vibrant Colors"],
      year: "2024",
      client: "Urban Fashion Store",
      image: "/gallery/bags-1.jpg"
    },
    {
      id: 10,
      title: "Interactive Brochure with QR",
      category: "brochures",
      description: "Interactive brochure with QR codes linking to digital content",
      tags: ["Brochures", "Interactive", "QR Code", "Digital Integration"],
      year: "2024",
      client: "Digital Marketing Agency",
      image: "/gallery/brochures-2.jpg"
    },
    {
      id: 11,
      title: "Window Decal Collection",
      category: "banners",
      description: "Perforated window decals for storefront advertising",
      tags: ["Decals", "Window", "Advertising", "Retail"],
      year: "2023",
      client: "Coffee Shop Chain",
      image: "/gallery/decals-1.jpg"
    },
    {
      id: 12,
      title: "Foiled Wedding Invitations",
      category: "specialty",
      description: "Luxury wedding invitations with rose gold foil and laser cut details",
      tags: ["Invitations", "Wedding", "Foil", "Laser Cut"],
      year: "2024",
      client: "Wedding Planners Elite",
      image: "/gallery/invitations-1.jpg"
    },
  ]

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const stats = [
    { icon: Printer, value: "1,500+", label: "Print Projects" },
    { icon: Palette, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "95%", label: "Repeat Business" },
    { icon: Clock, value: "28", label: "Years Experience" },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <>
    <Header />
    <div className="min-h-screen bg-page-primary">
    
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-page-secondary to-page-tertiary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` 
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Our Printing Gallery
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
              Explore our portfolio of exceptional printing projects. From business cards to 
              large format banners, see how we bring ideas to life with precision and creativity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                View Portfolio
              </button>
              <button className="px-8 py-3 bg-page-primary text-primary font-semibold rounded-full border-2 border-light hover:border-accent transition-all">
                Request Samples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-page-primary border-b border-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-page-secondary sticky top-0 z-40 border-b border-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
              <input
                type="text"
                placeholder="Search projects by keyword, client, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-page-primary border border-light text-primary placeholder:text-secondary focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-secondary" />
                </button>
              )}
            </div>

            {/* Categories & View Toggle */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-secondary" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-full bg-page-primary border border-light text-primary focus:outline-none focus:border-accent transition-colors"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-page-primary rounded-full p-1 border border-light">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-accent text-white" : "text-secondary hover:text-primary"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "masonry" ? "bg-accent text-white" : "text-secondary hover:text-primary"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm hover:bg-accent/20 transition-colors"
              >
                {categories.find(c => c.id === selectedCategory)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm hover:bg-accent/20 transition-colors"
              >
                Search: "{searchQuery}"
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-page-primary">
        <div className="container mx-auto px-4">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-secondary">
              Showing <span className="font-semibold text-primary">{filteredItems.length}</span> projects
              {selectedCategory !== "all" && (
                <span> in <span className="font-semibold text-primary">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <span>Sort by:</span>
              <select className="bg-transparent text-primary focus:outline-none">
                <option>Newest First</option>
                <option>Most Popular</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          {/* Gallery Items */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-page-tertiary mb-6">
                <Search className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">No projects found</h3>
              <p className="text-secondary mb-6 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for.
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
            <>
            <Header />
              <div className={`${viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3" : "columns-1 md:columns-2 lg:columns-3"} gap-6`}>
                {paginatedItems.map((item) => (
                  <div key={item.id} className={`${viewMode === "masonry" ? "mb-6 break-inside-avoid" : ""}`}>
                    <div className="group bg-page-secondary rounded-2xl overflow-hidden border border-light hover:border-accent transition-all duration-300 hover:shadow-xl">
                      {/* Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-page-tertiary">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Printer className="w-16 h-16 text-secondary" />
                        </div>
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                        
                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => toggleFavorite(item.id)}
                            className={`p-2 rounded-full backdrop-blur-sm ${favorites.includes(item.id) ? 'bg-red-500/20 text-red-500' : 'bg-black/20 text-white hover:bg-black/30'}`}
                          >
                            <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-red-500' : ''}`} />
                          </button>
                          <button
                            onClick={() => openLightbox(item.id)}
                            className="p-2 rounded-full backdrop-blur-sm bg-black/20 text-white hover:bg-black/30"
                          >
                            <ZoomIn className="w-5 h-5" />
                          </button>
                        </div>

                        {/* View Button */}
                        <button
                          onClick={() => openLightbox(item.id)}
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-accent text-white font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:opacity-90"
                        >
                          View Details
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-2">
                              {categories.find(c => c.id === item.category)?.name}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-secondary mb-1">Year</div>
                            <div className="font-semibold text-primary">{item.year}</div>
                          </div>
                        </div>

                        <p className="text-secondary text-sm mb-4 line-clamp-2">{item.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="px-2 py-1 rounded bg-page-tertiary text-xs text-secondary">
                              {tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="px-2 py-1 rounded bg-page-tertiary text-xs text-secondary">
                              +{item.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Client & Actions */}
                        <div className="flex justify-between items-center pt-4 border-t border-light">
                          <div>
                            <div className="text-xs text-secondary mb-1">Client</div>
                            <div className="font-medium text-primary">{item.client}</div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => toggleFavorite(item.id)}
                              className={`p-2 rounded-full ${favorites.includes(item.id) ? 'text-red-500' : 'text-secondary hover:text-primary'}`}
                            >
                              <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-red-500' : ''}`} />
                            </button>
                            <button className="p-2 rounded-full text-secondary hover:text-primary">
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full border border-light text-secondary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-full font-medium ${
                          currentPage === pageNum
                            ? 'bg-accent text-white'
                            : 'text-secondary hover:text-primary hover:bg-page-tertiary'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full border border-light text-secondary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-page-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              A selection of our most notable and award-winning printing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.slice(0, 3).map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-page-tertiary mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-yellow-500/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-3 bg-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                      View Project
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-page-secondary to-page-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Inspired By Our Work?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Let's create something amazing together. Share your vision with us and 
              let our team of experts bring it to life with exceptional printing quality.
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
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Content */}
            <div className="bg-page-secondary rounded-2xl overflow-hidden">
              <div className="aspect-video bg-page-tertiary flex items-center justify-center">
                <Printer className="w-32 h-32 text-secondary" />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium mb-3">
                      {categories.find(c => c.id === galleryItems.find(i => i.id === selectedImage)?.category)?.name}
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-3">
                      {galleryItems.find(i => i.id === selectedImage)?.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-secondary mb-1">Project Year</div>
                    <div className="text-2xl font-bold text-primary">
                      {galleryItems.find(i => i.id === selectedImage)?.year}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-4">Project Details</h3>
                    <p className="text-secondary mb-6">
                      {galleryItems.find(i => i.id === selectedImage)?.description}
                    </p>
                    
                    <h4 className="font-bold text-primary mb-3">Techniques Used</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {galleryItems.find(i => i.id === selectedImage)?.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-page-tertiary text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-bold text-primary mb-3">Client Testimonial</h4>
                    <div className="bg-page-primary rounded-xl p-6 border border-light">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            {galleryItems.find(i => i.id === selectedImage)?.client}
                          </div>
                          <div className="text-sm text-secondary">Marketing Director</div>
                        </div>
                      </div>
                      <p className="text-secondary italic">
                        "Working with Awais Printers was a fantastic experience. Their attention to detail 
                        and commitment to quality resulted in exceptional printed materials that perfectly 
                        represented our brand."
                      </p>
                      <div className="flex gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Project Specs</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Print Type", value: "Offset Printing" },
                        { label: "Paper Stock", value: "300gsm Premium Matte" },
                        { label: "Finishing", value: "Spot UV & Foil Stamping" },
                        { label: "Quantity", value: "5,000 units" },
                        { label: "Turnaround", value: "10 business days" },
                        { label: "File Format", value: "CMYK PDF, 300DPI" },
                      ].map((spec, index) => (
                        <div key={index} className="pb-4 border-b border-light last:border-0">
                          <div className="text-sm text-secondary mb-1">{spec.label}</div>
                          <div className="font-medium text-primary">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-3">
                      <button className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Spec Sheet
                      </button>
                      <button className="w-full py-3 bg-page-primary text-primary font-semibold rounded-lg border border-light hover:border-accent transition-colors">
                        Request Quote for Similar Project
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-light">
                  <button
                    onClick={() => {
                      const currentIndex = galleryItems.findIndex(i => i.id === selectedImage)
                      const prevIndex = currentIndex > 0 ? galleryItems[currentIndex - 1].id : galleryItems[galleryItems.length - 1].id
                      setSelectedImage(prevIndex)
                    }}
                    className="px-6 py-2 rounded-full border border-light text-secondary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  
                  <div className="text-secondary">
                    Project {galleryItems.findIndex(i => i.id === selectedImage) + 1} of {galleryItems.length}
                  </div>
                  
                  <button
                    onClick={() => {
                      const currentIndex = galleryItems.findIndex(i => i.id === selectedImage)
                      const nextIndex = currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1].id : galleryItems[0].id
                      setSelectedImage(nextIndex)
                    }}
                    className="px-6 py-2 rounded-full border border-light text-secondary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}