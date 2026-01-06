import { marcas } from "../data/marcas"

export default function MarcasGrid() {
  return (
    <section
    className="max-w-7xl mx-auto py-20">
      <div
      className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {marcas.map((marca) => (
          <div key={marca.id} className="flex items-center justify-center">
            <img src={marca.image} alt={marca.name} />
          </div>
        ))}
      </div>
    </section>
  )
}
