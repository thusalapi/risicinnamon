import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BRAND_NAME } from "./constants"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata = {
  title: `${BRAND_NAME} - Premium Cinnamon for International Customers`,
  description:
    "Experience the finest quality cinnamon from our global selection. Perfect for culinary enthusiasts and businesses worldwide.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="max-container w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}