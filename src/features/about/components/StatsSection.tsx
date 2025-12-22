
const stats = [
  {
    id: 1,
    title: "+9 años",
    description: "de experiencia en el sector",
  },
  {
    id: 2,
    title: "100% alcance",
    description: "Cobertura Nacional",
  },
  {
    id: 3,
    title: "+5000 productos",
    description: "en nuestro catálogo"
  },
  {
    id: 4,
    title: "3 unidades",
    description: "de negocio: ferretería, construcción y servicios"
  },
]

export default function StatsSection() {
  return (
    <section className="bg-[#f2f2f2] py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

