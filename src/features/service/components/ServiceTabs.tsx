type TabKey = 'compra' | 'negocios';

interface ServiceTabProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function ServiceTabs({ activeTab, onTabChange }: ServiceTabProps) {
  return (
    <div className="flex items-center justify-center gap-10 max-w-7xl mx-auto py-10 text-center text-white text-base md:text-lg">
      <button
        onClick={() => onTabChange("compra")}
        className={`text-xl font-bold uppercase transition-colors duration-300 cursor-pointer ${
          activeTab === "compra" ? "text-secondary" : "hover:text-secondary"
        }`}
      >
        Servicios de Compra
      </button>

      <hr className="w-px h-12 border-l border-white" />

      <button
        onClick={() => onTabChange("negocios")}
        className={`text-xl font-bold uppercase transition-colors duration-300 cursor-pointer ${
          activeTab === "negocios" ? "text-secondary" : "hover:text-secondary"
        }`}
      >
        Desarrollo de Negocios
      </button>
    </div>
  )
}
