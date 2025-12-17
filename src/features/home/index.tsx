import HeroHome from "./components/HeroHome"
import InfoHome from "./components/InfoHome"
import ServicesGrid from "./components/ServicesGrid"
import ProductsHome from "./components/ProductsHome"
import CallToAction from "./components/CallToAction"

export default function Home() {
  return (
    <main>
      <HeroHome />
      <InfoHome />
      <ServicesGrid />
      <ProductsHome />
      <CallToAction />
    </main>
  )
}
