import { BRAND_NAME } from "../constants"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-cinnamon-800 text-cinnamon-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">{BRAND_NAME}</h3>
            <p className="mb-4">Indulge in the world's finest cinnamon</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gold-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Cinnamon Lane</p>
            <p>Spice City, SC 12345</p>
            <p>contact@risicinnamon.com</p>
          </div>
        </div>
        <div className="border-t border-cinnamon-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

