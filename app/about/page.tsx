import Image from "next/image"
import { BRAND_NAME } from "../constants"

export default function About() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-serif font-bold mb-6 text-cinnamon-800">About {BRAND_NAME}</h1>
        <p className="text-xl mb-8 text-cinnamon-700 max-w-3xl mx-auto">
          Discover the rich history and unparalleled quality that defines {BRAND_NAME}, your premier source for the
          world's finest cinnamon.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Cinnamon plantation"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-cinnamon-800">Our Story</h2>
          <p className="text-cinnamon-700 mb-4">
            Founded in 2010, {BRAND_NAME} was born from a passion for exceptional flavors and a commitment to quality.
            Our journey began in the lush cinnamon plantations of Sri Lanka, where we discovered the true potential of
            this ancient spice.
          </p>
          <p className="text-cinnamon-700">
            Today, we source the finest cinnamon varieties from around the world, bringing their unique flavors and
            aromas to discerning customers globally.
          </p>
        </div>
      </section>

      <section className="bg-cinnamon-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-cinnamon-800">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We meticulously select and test each batch of cinnamon to ensure unparalleled quality.",
              },
              {
                title: "Sustainability",
                description:
                  "Our partnerships with local farmers promote sustainable and ethical cultivation practices.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore new ways to bring the magic of cinnamon into your culinary experiences.",
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

