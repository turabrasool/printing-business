"use client"

import Image from "next/image"
import { useTheme } from "@/app/theme-provider"

export function Services() {
  const { theme } = useTheme()
  
  const services = [
    {
      name: "Leather Embossing",
      image: "/leather-embossing-printing-equipment-machine.jpg",
    },
    {
      name: "Flexo Printing",
      image: "/flexo-printing-press-machine-industrial.jpg",
    },
    {
      name: "Foil Printing",
      image: "/foil-printing-colorful-ink-buckets-printing-equipm.jpg",
    },
    {
      name: "Screen Printing",
      image: "/screen-printing-textile-fabric-printing-process.jpg",
    },
    {
      name: "Offset Printing",
      image: "/offset-printing-press-machine-industrial-equipment.jpg",
    },
    {
      name: "Thermal Stickers",
      image: "/thermal-sticker-printing-machine-equipment.jpg",
    },
    {
      name: "Rubber Labels",
      image: "/thermal-sticker-printing-machine-equipment.jpg",
    },
  ]

  return (
    <section className="relative flex flex-col lg:flex-row bg-page-primary">
      {/* Left side - Dark text section with page background */}
      <div className="lg:w-[30%] px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center bg-page-secondary">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">Services</h2>
        <p className="text-secondary text-lg leading-relaxed">
          Online and in store, you can find printing services to help you get the job done
        </p>
      </div>

      {/* Right side - Services cards with same page background */}
      <div className="lg:w-[70%] py-16 lg:py-20 relative bg-page-primary">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-8 lg:px-12 pb-4">
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] group cursor-pointer">
                <div className="relative h-[180px] overflow-hidden rounded-lg mb-4 bg-page-tertiary border border-light">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary text-center group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Colorful bottom stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
          <div className="flex-1 bg-gray-400" />
          <div className="flex-1 bg-gray-600" />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}