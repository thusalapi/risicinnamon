import Image from "next/image"
import Link from "next/link"

const products = ["Ceylon Cinnamon", "Cassia Cinnamon", "Saigon Cinnamon"]

export default function ProductCollection() {
  return (
    <section className="relative w-full flex items-center justify-center bg-white overflow-hidden py-16 sm:py-24">
      <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 rounded-bl-full blur-3xl opacity-50" />
      <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 rounded-tr-full blur-3xl opacity-50" />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-8">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-8 sm:mb-16 text-center text-cinnamon-900 animate-in fade-in duration-700">
          Our Signature Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 animate-in slide-in-from-bottom duration-1000 delay-300">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src={`/products/${product.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={product}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative p-12">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-cinnamon-800">{product}</h3>
                <p className="text-base sm:text-lg text-cinnamon-600 mb-10 line-clamp-2">
                  Experience the rich, aromatic flavor of our premium {product.toLowerCase()}.
                </p>
                <Link
                  href={`/products/${index + 1}`}
                  className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition-colors text-base sm:text-lg"
                >
                  Discover More
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}