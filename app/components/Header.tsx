import Link from 'next/link'
import { BRAND_NAME } from '../constants'
import { ShoppingCart } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className="bg-cinnamon-50 dark:bg-cinnamon-900 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif font-bold text-cinnamon-800 dark:text-cinnamon-100">
          {BRAND_NAME}
        </Link>
        <ul className="flex space-x-6 items-center">
          <li><Link href="/" className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Home</Link></li>
          <li><Link href="/products" className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Products</Link></li>
          <li><Link href="/about" className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">About</Link></li>
          <li><Link href="/contact" className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Contact</Link></li>
          <li>
            <Link href="/cart" className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
