import Link from "next/link"
import { BRAND_NAME } from "../constants"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-cinnamon-900 overflow-hidden px-4 sm:px-6">
      {/* Decorative elements */}
      <div className="absolute inset-0 border-[1px] border-cinnamon-200 dark:border-cinnamon-800 m-4 sm:m-8 rounded-3xl" />
      <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-cinnamon-50 dark:bg-cinnamon-800/20 rounded-bl-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-50 dark:bg-gold-900/20 rounded-tr-full blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="block text-xs sm:text-sm uppercase tracking-[0.2em] text-cinnamon-600 dark:text-cinnamon-300 mb-4 animate-in fade-in duration-700">
          Luxury Spice Collection
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-4 sm:mb-6 text-cinnamon-900 dark:text-white [text-wrap:balance] animate-in fade-in duration-1000 whitespace-pre-line">
          {BRAND_NAME.split(' ').join('\n')}
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl mb-8 sm:mb-12 text-cinnamon-700 dark:text-cinnamon-200 font-light tracking-wide animate-in slide-in-from-bottom duration-1000 delay-300 mx-auto max-w-[90%] sm:max-w-full">
          Premium Ceylon Cinnamon 
          <br className="sm:hidden" />
          for Connoisseurs
        </p>
        <div className="animate-in slide-in-from-bottom duration-1000 delay-500">
          <Link
            href="/products"
            className="group relative inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-cinnamon-900 dark:bg-white text-white dark:text-cinnamon-900 font-medium text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_0_1px_rgba(230,168,0,0.2)] hover:shadow-[0_0_0_2px_rgba(230,168,0,0.4)]"
          >
            Explore Collection
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}