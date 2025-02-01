import Link from "next/link"
import Image from "next/image"
import { BRAND_NAME } from "./constants"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-cinnamon-100 to-gold-100">
        <h1 className="text-5xl font-serif font-bold mb-6 text-cinnamon-800">{BRAND_NAME}</h1>
        <p className="text-2xl mb-8 text-cinnamon-700">Indulge in the world's finest cinnamon</p>
        <Link
          href="/products"
          className="bg-gold-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-600 transition-colors"
        >
          Explore Our Collection
        </Link>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-cinnamon-800">Our Signature Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Ceylon Cinnamon", "Cassia Cinnamon", "Saigon Cinnamon"].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={product}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cinnamon-700">{product}</h3>
                <p className="text-cinnamon-600 mb-4">
                  Experience the rich, aromatic flavor of our premium {product.toLowerCase()}.
                </p>
                <Link
                  href={`/products/${index + 1}`}
                  className="text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cinnamon-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-cinnamon-800">Why Choose {BRAND_NAME}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", description: "We source only the finest cinnamon from around the world." },
              {
                title: "Rich Flavor",
                description: "Our cinnamon delivers an unparalleled depth of flavor to your dishes.",
              },
              {
                title: "Ethically Sourced",
                description: "We ensure fair practices and sustainability in our sourcing.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-cinnamon-700">{item.title}</h3>
                <p className="text-cinnamon-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

