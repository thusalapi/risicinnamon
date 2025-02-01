import { BRAND_NAME } from "../constants"

const features = [
  {
    title: "Premium Quality",
    description: "We source only the finest cinnamon from ancient groves in Sri Lanka.",
    icon: "🌟"
  },
  {
    title: "Rich Heritage",
    description: "Traditional harvesting methods passed down through generations.",
    icon: "🌿"
  },
  {
    title: "Sustainable Future",
    description: "Committed to ethical sourcing and environmental stewardship.",
    icon: "🌍"
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-cinnamon-50 py-12 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8 sm:mb-16 text-center text-cinnamon-800">
          Why Choose {BRAND_NAME}?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((item, index) => (
            <div key={index} className="text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-cinnamon-800">{item.title}</h3>
              <p className="text-sm sm:text-base text-cinnamon-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}