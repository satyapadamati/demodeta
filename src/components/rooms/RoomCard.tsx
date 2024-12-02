import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, Check } from 'lucide-react';
import { Room } from '../../types';

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          ${room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">{room.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {room.amenities.slice(0, 4).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1">
              <Check className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">{amenity}</span>
            </div>
          ))}
        </div>

        <Link
          to={`/rooms/${room.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}