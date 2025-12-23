type TabKey = 'compra' | 'negocios';

interface ServiceTabProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function ServiceTabs({ activeTab, onTabChange }: ServiceTabProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto py-10 text-center text-white text-base md:text-lg">
      <button
        onClick={() => onTabChange("compra")}
        className={`text-xl font-bold uppercase transition-colors duration-300 cursor-pointer ${
          activeTab === "compra" ? "text-secondary" : "hover:text-secondary"
        }`}
      >
        Soluciones de Abastecimiento
      </button>

      <hr className="w-px h-12 border-l border-white hidden md:block" />

      <button
        onClick={() => onTabChange("negocios")}
        className={`text-xl font-bold uppercase transition-colors duration-300 cursor-pointer ${
          activeTab === "negocios" ? "text-secondary" : "hover:text-secondary"
        }`}
      >
        Unidades de Negocio
      </button>
    </div>
  )
}
