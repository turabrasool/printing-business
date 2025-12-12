import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Hero } from "./components/Hero"
import { Services } from "./components/services"
import { AboutUs } from "./components/about"
import { FAQ } from "./components/faq"

export default function Page() {
  return (
    <div className="min-h-screen bg-page-primary">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  )
}