import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@luxstay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Luxury Ave, Paradise City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/rooms" className="hover:text-blue-400">Our Rooms</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} LuxStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}