"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is printing services?",
    answer:
      "Dream Printers offers a wide variety of printing and finishing services, including hang tags, leather patches, and care labels.",
  },
  {
    question: "How can I get my print job once it is finished?",
    answer: "You can pick up your print job from our location or we can arrange delivery to your address.",
  },
  {
    question: "Can I get a price quote for my print job?",
    answer: "Yes, contact us with your requirements and we will provide a detailed price quote.",
  },
  {
    question: "Can you design or help me design my print job?",
    answer: "Yes, our design team can help you create the perfect design for your printing needs.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-page-primary py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-4 tracking-wider">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Printing Services Frequently
            <br />
            Asked Questions
          </h2>
        </div>

        {/* Content Grid - Original Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/printing-worker-facility.jpg"
              alt="Printing worker in facility"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-light pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      openIndex === index ? "text-accent" : "text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all ${
                      openIndex === index ? "rotate-180 text-accent" : "text-secondary"
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="mt-4 pr-8">
                    <p className="text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {/* View All Button */}
            <div className="pt-8">
              <button className="bg-accent hover:opacity-90 text-white font-semibold px-12 py-4 rounded-full transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      
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