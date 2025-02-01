import { notFound } from "next/navigation"
import Image from "next/image"
import { BRAND_NAME } from "../../constants"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Ceylon Cinnamon",
    price: 14.99,
    origin: "Sri Lanka",
    description:
      'Known as "true cinnamon," Ceylon cinnamon is prized for its delicate, sweet flavor with subtle notes of citrus. It\'s perfect for desserts and beverages.',
    rating: 4.8,
    image: "/products/ceylon-cinnamon.jpg"
  },
  {
    id: 2,
    name: "Cassia Cinnamon",
    price: 9.99,
    origin: "China",
    description:
      "Cassia cinnamon has a strong, spicy flavor that's ideal for savory dishes and baking. It's the most common type of cinnamon found in kitchens worldwide.",
    rating: 4.5,
    image: "/products/cassia-cinnamon.jpg"
  },
  {
    id: 3,
    name: "Saigon Cinnamon",
    price: 12.99,
    origin: "Vietnam",
    description:
      "Saigon cinnamon is known for its bold, complex flavor with sweet and spicy notes. It's excellent for baking and adds depth to savory dishes.",
    rating: 4.7,
    image: "/products/saigon-cinnamon.jpg"
  },
  {
    id: 4,
    name: "Korintje Cinnamon",
    price: 11.99,
    origin: "Indonesia",
    description:
      "Korintje cinnamon offers a balanced, warm flavor that's versatile in both sweet and savory applications. It's a favorite among professional bakers.",
    rating: 4.6,
    image: "/products/korintje-cinnamon.jpg"
  },
  {
    id: 5,
    name: "Royal Cinnamon",
    price: 19.99,
    origin: "Vietnam",
    description:
      "Our premium Royal Cinnamon is hand-harvested from ancient cinnamon trees. It boasts an intense, complex flavor with notes of honey and citrus.",
    rating: 4.9,
    image: "/products/royal-cinnamon.jpg"
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-bold text-cinnamon-800">{product.name}</h1>
          <p className="text-xl text-gold-600 font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-cinnamon-700">
            <strong>Origin:</strong> {product.origin}
          </p>
          <div className="flex items-center space-x-1">
            <Star className="text-gold-500 fill-current" />
            <span className="text-cinnamon-700">{product.rating} / 5</span>
          </div>
          <p className="text-cinnamon-600">{product.description}</p>
          <Button className="bg-gold-500 hover:bg-gold-600 text-white">Add to Cart</Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-serif font-bold text-cinnamon-800 mb-4">
          Why Choose {BRAND_NAME} {product.name}?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-cinnamon-700">
          <li>Sourced from the finest cinnamon plantations in {product.origin}</li>
          <li>Carefully harvested and processed to preserve flavor and aroma</li>
          <li>Rich in antioxidants and potential health benefits</li>
          <li>Perfect for both sweet and savory culinary applications</li>
          <li>Packaged in airtight containers to maintain freshness</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-serif font-bold text-cinnamon-800 mb-4">Suggested Uses</h2>
        <ul className="list-disc list-inside space-y-2 text-cinnamon-700">
          <li>Sprinkle on your morning oatmeal or yogurt</li>
          <li>Add to your favorite baked goods for enhanced flavor</li>
          <li>Use in savory rubs for meats and vegetables</li>
          <li>Infuse into teas, coffees, or hot chocolate</li>
          <li>Incorporate into homemade ice cream or desserts</li>
        </ul>
      </div>
    </div>
  )
}