import Link from "next/link"
import { BRAND_NAME } from "../constants"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-cinnamon-50 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif font-bold text-cinnamon-800">
          {BRAND_NAME}
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-cinnamon-700 hover:text-gold-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-cinnamon-700 hover:text-gold-600 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-cinnamon-700 hover:text-gold-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-cinnamon-700 hover:text-gold-600 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-cinnamon-700 hover:text-gold-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

