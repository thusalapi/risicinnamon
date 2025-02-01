export interface Product {
  id: number
  name: string
  price: number
  origin: string
  category: string
  description: string
  rating: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ceylon Cinnamon",
    price: 14.99,
    origin: "Sri Lanka",
    category: "Premium",
    description: 'Known as "true cinnamon," Ceylon cinnamon is prized for its delicate, sweet flavor with subtle notes of citrus. It\'s perfect for desserts and beverages.',
    rating: 4.8,
    image: "/products/ceylon-cinnamon.jpg"
  },
  {
    id: 2,
    name: "Cassia Cinnamon",
    price: 9.99,
    origin: "China",
    category: "Classic",
    description: "Cassia cinnamon has a strong, spicy flavor that's ideal for savory dishes and baking. It's the most common type of cinnamon found in kitchens worldwide.",
    rating: 4.5,
    image: "/products/cassia-cinnamon.jpg"
  },
  {
    id: 3,
    name: "Saigon Cinnamon",
    price: 12.99,
    origin: "Vietnam",
    category: "Premium",
    description: "Saigon cinnamon is known for its bold, complex flavor with sweet and spicy notes. It's excellent for baking and adds depth to savory dishes.",
    rating: 4.7,
    image: "/products/saigon-cinnamon.jpg"
  },
  {
    id: 4,
    name: "Korintje Cinnamon",
    price: 11.99,
    origin: "Indonesia",
    category: "Classic",
    description: "Korintje cinnamon offers a balanced, warm flavor that's versatile in both sweet and savory applications. It's a favorite among professional bakers.",
    rating: 4.6,
    image: "/products/korintje-cinnamon.jpg"
  },
  {
    id: 5,
    name: "Royal Cinnamon",
    price: 19.99,
    origin: "Vietnam",
    category: "Premium",
    description: "Our premium Royal Cinnamon is hand-harvested from ancient cinnamon trees. It boasts an intense, complex flavor with notes of honey and citrus.",
    rating: 4.9,
    image: "/products/royal-cinnamon.jpg"
  },
]