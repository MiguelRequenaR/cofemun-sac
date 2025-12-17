
const stats = [
  {
    id: 1,
    title: "55 años",
    description: "en el mercado",
  },
  {
    id: 2,
    title: "4 sedes",
    description: "Lima, Huancayo, Arequipa y Cusco",
  },
  {
    id: 3,
    title: "300 colaboradores",
    description: "a tu servicio"
  },
  {
    id: 4,
    title: "1000+ proveedores",
    description: "en nuestro portafolio"
  },
  {
    id: 5,
    title: "8 líneas",
    description: "de abastecimiento Industrial"
  },
  {
    id: 6,
    title: "60 ejecutivos",
    description: "de compras e importaciones"
  }
]

export default function StatsSection() {
  return (
    <section className="bg-[#f2f2f2] py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.id} data-aos="zoom-in">
              <h3 className="text-3xl md:text-5xl font-bold text-primary text-center md:text-left">
                {stat.title.split(" ").map((part, idx) =>
                  idx === 1 ? (
                    <span key={idx} className="text-secondary">{part}</span>
                  ) : (
                    <span key={idx}>{part} </span>
                  )
                )}
              </h3>
              <p className="text-base md:text-lg text-primary text-center md:text-left">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

