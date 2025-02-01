"use client";
import Link from 'next/link'
import { BRAND_NAME } from '../constants'
import { ShoppingCart, Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-cinnamon-900/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-serif font-bold text-cinnamon-800 dark:text-cinnamon-100 hover:text-gold-600 transition-colors"
          >
            {BRAND_NAME}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-cinnamon-800 dark:text-cinnamon-100" />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all hover:scale-105"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all hover:scale-105"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all hover:scale-105"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/cart" 
                className="p-2 rounded-full hover:bg-cinnamon-100 dark:hover:bg-cinnamon-800 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-cinnamon-700 dark:text-cinnamon-200" />
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                href="/" 
                className="block text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className="block text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block text-cinnamon-700 dark:text-cinnamon-200 hover:text-gold-600 dark:hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}