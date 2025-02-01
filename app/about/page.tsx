import Image from "next/image"
import { BRAND_NAME } from "../constants"

export default function About() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Cinnamon plantation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 text-white animate-in fade-in duration-700">
            About {BRAND_NAME}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
            Discover the rich history and unparalleled quality that defines {BRAND_NAME}, your premier source for the
            world's finest cinnamon.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative w-full flex items-center justify-center bg-white overflow-hidden py-16 sm:py-24">
        <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 rounded-bl-full blur-3xl opacity-50" />
        <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 rounded-tr-full blur-3xl opacity-50" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8 text-cinnamon-900">
                Our Story
              </h2>
              <div className="space-y-6 text-lg sm:text-xl">
                <p className="text-cinnamon-700">
                  Founded in 2010, {BRAND_NAME} was born from a passion for exceptional flavors and a commitment to quality.
                  Our journey began in the lush cinnamon plantations of Sri Lanka, where we discovered the true potential of
                  this ancient spice.
                </p>
                <p className="text-cinnamon-600">
                  Today, we source the finest cinnamon varieties from around the world, bringing their unique flavors and
                  aromas to discerning customers globally.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden animate-in slide-in-from-right duration-1000">
              <Image
                src="/story-image.jpg"
                alt="Our cinnamon story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative w-full flex items-center justify-center bg-gradient-to-b from-white to-cinnamon-50 overflow-hidden py-16 sm:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-16 text-center text-cinnamon-900 animate-in fade-in duration-700">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 animate-in slide-in-from-bottom duration-1000 delay-300">
            {[
              {
                title: "Quality",
                description: "We meticulously select and test each batch of cinnamon to ensure unparalleled quality.",
                icon: "🌟"
              },
              {
                title: "Sustainability",
                description: "Our partnerships with local farmers promote sustainable and ethical cultivation practices.",
                icon: "🌿"
              },
              {
                title: "Innovation",
                description: "We continuously explore new ways to bring the magic of cinnamon into your culinary experiences.",
                icon: "✨"
              },
            ].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 p-12">
                <div className="text-4xl sm:text-5xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-cinnamon-800">{item.title}</h3>
                <p className="text-base sm:text-lg text-cinnamon-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}