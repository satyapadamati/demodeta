import React from 'react';
import { CalendarDays, User, CreditCard, LogOut } from 'lucide-react';
import { format } from 'date-fns';
import { rooms } from '../data/rooms';

// Mock user data - in a real app, this would come from your auth system
const mockUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

// Mock bookings data - in a real app, this would come from your API
const mockBookings = [
  {
    id: '1',
    roomId: '1',
    checkIn: new Date('2024-03-20'),
    checkOut: new Date('2024-03-25'),
    guests: 2,
    status: 'confirmed',
    totalPrice: 1495,
  },
  {
    id: '2',
    roomId: '2',
    checkIn: new Date('2024-04-15'),
    checkOut: new Date('2024-04-18'),
    guests: 3,
    status: 'pending',
    totalPrice: 1197,
  },
];

export function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <img
                src={mockUser.avatar}
                alt={`${mockUser.firstName} ${mockUser.lastName}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">
                {mockUser.firstName} {mockUser.lastName}
              </h2>
              <p className="text-gray-600">{mockUser.email}</p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md hover:bg-gray-50">
                <User className="h-5 w-5 text-gray-500" />
                <span>Personal Information</span>
              </button>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md hover:bg-gray-50">
                <CalendarDays className="h-5 w-5 text-gray-500" />
                <span>My Bookings</span>
              </button>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md hover:bg-gray-50">
                <CreditCard className="h-5 w-5 text-gray-500" />
                <span>Payment Methods</span>
              </button>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md text-red-600 hover:bg-red-50">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Personal Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={mockUser.firstName}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={mockUser.lastName}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={mockUser.email}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={mockUser.phone}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">My Bookings</h3>
            <div className="space-y-6">
              {mockBookings.map((booking) => {
                const room = rooms.find((r) => r.id === booking.roomId);
                if (!room) return null;

                return (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex gap-4">
                        <img
                          src={room.imageUrl}
                          alt={room.name}
                          className="w-24 h-24 object-cover rounded-md"
                        />
                        <div>
                          <h4 className="font-semibold">{room.name}</h4>
                          <p className="text-sm text-gray-600">
                            {format(booking.checkIn, 'MMM dd, yyyy')} -{' '}
                            {format(booking.checkOut, 'MMM dd, yyyy')}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <div className="text-right">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-sm ${
                              booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                          <p className="mt-2 font-semibold">${booking.totalPrice}</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}