"use client"

import { useState } from "react"
import { BRAND_NAME } from "../constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-center text-cinnamon-800 mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-cinnamon-700 mb-4">Get in Touch</h2>
          <p className="text-cinnamon-600 mb-6">
            We'd love to hear from you. Whether you have a question about our products, need assistance with an order,
            or want to explore partnership opportunities, our team is here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-cinnamon-700">
              <Mail className="text-gold-500" />
              <span>contact@{BRAND_NAME.toLowerCase()}.com</span>
            </div>
            <div className="flex items-center space-x-4 text-cinnamon-700">
              <Phone className="text-gold-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4 text-cinnamon-700">
              <MapPin className="text-gold-500" />
              <span>123 Cinnamon Lane, Spice City, SC 12345</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cinnamon-700 mb-1">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cinnamon-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-cinnamon-700 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full"
              rows={4}
            />
          </div>
          <Button type="submit" className="bg-gold-500 hover:bg-gold-600 text-white">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-serif font-bold text-cinnamon-800 mb-4">Visit Our Showroom</h2>
        <p className="text-cinnamon-700 mb-4">
          Experience the aroma and flavors of our premium cinnamon varieties at our showroom. Schedule an appointment
          for a personalized tasting session.
        </p>
        {/* Here you would typically embed a map */}
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-cinnamon-600">
          Map Placeholder
        </div>
      </div>
    </div>
  )
}

