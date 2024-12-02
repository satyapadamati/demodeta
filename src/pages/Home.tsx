import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Shield, Clock } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Experience Luxury Like Never Before</h1>
            <p className="text-xl mb-8">Discover our handpicked selection of luxury accommodations designed for your perfect stay.</p>
            <Link
              to="/rooms"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LuxStay</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure booking process with instant confirmation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Rooms</h3>
              <p className="text-gray-600">Carefully curated selection of luxury accommodations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Your safety and security is our top priority.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Rooms */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Rooms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: '1',
                name: 'Deluxe Ocean View',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
                price: 299
              },
              {
                id: '2',
                name: 'Executive Suite',
                image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
                price: 399
              },
              {
                id: '3',
                name: 'Presidential Suite',
                image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
                price: 599
              }
            ].map(room => (
              <Link to={`/rooms/${room.id}`} key={room.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                    <p className="text-gray-600">Starting from ${room.price}/night</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}