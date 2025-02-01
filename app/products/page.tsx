import Link from "next/link"
import Image from "next/image"

const products = [
  { id: 1, name: "Ceylon Cinnamon", price: 14.99, origin: "Sri Lanka" },
  { id: 2, name: "Cassia Cinnamon", price: 9.99, origin: "China" },
  { id: 3, name: "Saigon Cinnamon", price: 12.99, origin: "Vietnam" },
  { id: 4, name: "Korintje Cinnamon", price: 11.99, origin: "Indonesia" },
  { id: 5, name: "Royal Cinnamon", price: 19.99, origin: "Vietnam" },
  { id: 6, name: "Organic Ground Cinnamon", price: 16.99, origin: "Mixed" },
]

export default function Products() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-serif font-bold text-center text-cinnamon-800">Our Exquisite Collection</h1>
      <p className="text-xl text-center text-cinnamon-600 max-w-2xl mx-auto">
        Discover our curated selection of the world's finest cinnamon varieties, each with its unique flavor profile and
        origin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <Image
              src={`/placeholder.svg?height=300&width=400`}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-cinnamon-800">{product.name}</h2>
              <p className="text-cinnamon-600 mb-4">Origin: {product.origin}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gold-500">${product.price.toFixed(2)}</span>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-cinnamon-600 text-white px-4 py-2 rounded-full hover:bg-cinnamon-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

