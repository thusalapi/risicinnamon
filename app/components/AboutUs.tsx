import { BRAND_NAME } from "../constants"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="relative w-full flex items-center justify-center bg-white overflow-hidden py-16 sm:py-24">
      <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 rounded-bl-full blur-3xl opacity-50" />
      <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 rounded-tr-full blur-3xl opacity-50" />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Story */}
          <div className="animate-in slide-in-from-left duration-1000">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8 text-cinnamon-900">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-cinnamon-700">
                Since 2012, {BRAND_NAME} has been dedicated to bringing the world's finest cinnamon from the ancient groves of Sri Lanka to your kitchen.
              </p>
              <p className="text-lg text-cinnamon-600">
                Our journey began in the misty highlands of Ceylon, where we forged lasting partnerships with local farmers who share our passion for quality and tradition.
              </p>
              <p className="text-lg text-cinnamon-600">
                Today, we continue our commitment to sustainable farming practices and fair trade, ensuring that every stick of cinnamon we deliver meets the highest standards of quality while supporting the communities that make it possible.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden animate-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/about-us.jpg"
              alt="Cinnamon harvesting in Sri Lanka"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}