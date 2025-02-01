import Link from "next/link"
import Image from "next/image"
import { products } from "../../data/products"


export default function Products() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-36 bg-gradient-to-b from-white to-cinnamon-50">
        <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 rounded-bl-full blur-3xl opacity-50" />
        <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 rounded-tr-full blur-3xl opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 text-cinnamon-900 animate-in fade-in duration-700">
            Our Exquisite Collection
          </h1>
          <p className="text-xl sm:text-2xl text-cinnamon-700 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
            Discover our curated selection of the world's finest cinnamon varieties, each with its unique flavor profile and origin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={`/products/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-cinnamon-800">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-2 text-cinnamon-800 group-hover:text-cinnamon-900 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-cinnamon-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gold-600">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-cinnamon-500">Origin: {product.origin}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}