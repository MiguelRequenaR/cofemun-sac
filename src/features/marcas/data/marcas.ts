export const marcas = [
  {
    id: 1,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_54.webp",
  },
  {
    id: 2,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_58.webp",
  },
  {
    id: 3,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_59.webp",
  },
  {
    id: 4,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_62.webp",
  },
  {
    id: 5,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_68.webp",
  },
  {
    id: 6,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_71.webp",
  },
  {
    id: 7,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/NATIONAL.jpg",
  },
  {
    id: 8,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/CEMENTEX.jpg",
  },
  {
    id: 9,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/SKIPPER.jpg",
  },
  {
    id: 10,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_81.webp",
  },
  {
    id: 11,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_80.webp",
  },
  {
    id: 12,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_75.webp",
  },
  {
    id: 13,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_54-1.webp",
  },
  {
    id: 14,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_65-1.webp",
  },
  {
    id: 15,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/KESON-1.jpg",
  },
  {
    id: 16,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/WOLF.jpg",
  },
  {
    id: 17,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/DILLON.jpg",
  },
  {
    id: 18,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_64-2.webp",
  },
  {
    id: 19,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/honda.jpg",
  },
  {
    id: 20,
    name: "Bricocee",
    image: "https://efc.com.pe/wp-content/uploads/2024/02/UNITEC.jpg",
  },
]

export const getMarcaById = (id: number) => {
  return marcas.find((marca) => marca.id === id);
}