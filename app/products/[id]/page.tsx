import { notFound } from "next/navigation"
import Image from "next/image"
import { BRAND_NAME } from "../../constants"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { products } from "../../../data/products"


export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="relative space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-white">
        <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 rounded-bl-full blur-3xl opacity-50" />
        <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 rounded-tr-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl animate-in fade-in duration-700">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8 animate-in slide-in-from-right duration-700">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-cinnamon-900">
                  {product.name}
                </h1>
                <p className="text-2xl sm:text-3xl text-gold-600 font-semibold">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-cinnamon-700">({product.rating})</span>
                </div>
                <p className="text-lg text-cinnamon-700">
                  <strong>Origin:</strong> {product.origin}
                </p>
              </div>
              <p className="text-lg text-cinnamon-600 leading-relaxed">{product.description}</p>
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gold-500 hover:bg-gold-600 text-white transition-all duration-300 hover:scale-105">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <h2 className="text-3xl font-serif font-bold text-cinnamon-800">
              Why Choose {BRAND_NAME} {product.name}?
            </h2>
            <ul className="space-y-4 text-cinnamon-700">
              {[
                `Sourced from the finest cinnamon plantations in ${product.origin}`,
                'Carefully harvested and processed to preserve flavor and aroma',
                'Rich in antioxidants and potential health benefits',
                'Perfect for both sweet and savory culinary applications',
                'Packaged in airtight containers to maintain freshness'
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gold-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 animate-in slide-in-from-right duration-700">
            <h2 className="text-3xl font-serif font-bold text-cinnamon-800">
              Suggested Uses
            </h2>
            <ul className="space-y-4 text-cinnamon-700">
              {[
                'Sprinkle on your morning oatmeal or yogurt',
                'Add to your favorite baked goods for enhanced flavor',
                'Use in savory rubs for meats and vegetables',
                'Infuse into teas, coffees, or hot chocolate',
                'Incorporate into homemade ice cream or desserts'
              ].map((use, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gold-500">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}