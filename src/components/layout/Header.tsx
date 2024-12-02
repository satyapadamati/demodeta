import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Hotel className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">LuxStay</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/rooms" className="text-gray-600 hover:text-gray-900">Rooms</Link>
          <Link to="/bookings" className="text-gray-600 hover:text-gray-900">Bookings</Link>
          <Link to="/profile" className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
}