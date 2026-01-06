import HeroService from "./components/HeroService"
import ServicesGeneralesGrid from "./components/ServicesGeneralesGrid"
import ServiceTabContent from "./components/ServiceTabContent"

export default function Service() {
  return (
    <main>
      <HeroService />
      <ServicesGeneralesGrid />
      <ServiceTabContent />
    </main>
  )
}
