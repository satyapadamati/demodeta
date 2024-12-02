import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    type: 'deluxe',
    name: 'Deluxe Ocean View',
    price: 299,
    description: 'Spacious room with breathtaking ocean views, featuring a private balcony and luxury amenities.',
    capacity: 2,
    amenities: ['Ocean View', 'King Bed', 'Private Balcony', 'Mini Bar', 'Room Service', 'Free Wi-Fi'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    type: 'executive',
    name: 'Executive Suite',
    price: 399,
    description: 'Elegant suite with separate living area, perfect for business travelers or small families.',
    capacity: 3,
    amenities: ['City View', 'King Bed', 'Living Room', 'Work Desk', 'Premium Wi-Fi', 'Executive Lounge Access'],
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    type: 'presidential',
    name: 'Presidential Suite',
    price: 599,
    description: 'Our finest suite offering unparalleled luxury with panoramic views and premium services.',
    capacity: 4,
    amenities: ['Panoramic View', 'Master Bedroom', 'Dining Room', 'Private Butler', 'Jacuzzi', 'VIP Services'],
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80'
  }
];