import { useState } from "react";
import HeroService from "./components/HeroService"
import ServiceTabContent from "./components/ServiceTabContent"

type TabKey = 'compra' | 'negocios';

export default function Service() {
  const [activeTab, setActiveTab] = useState<TabKey>("compra");
  return (
    <main>
      <HeroService activeTab={activeTab} onTabChange={setActiveTab} />
      <ServiceTabContent activeTab={activeTab} />
    </main>
  )
}
