import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Users, Check, ArrowLeft } from 'lucide-react';
import { rooms } from '../data/rooms';

export function RoomDetail() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === id);

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Room not found</h1>
        <Link to="/rooms" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/rooms" className="text-blue-600 hover:underline flex items-center gap-2 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to rooms
      </Link>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
          <p className="text-gray-600 mb-6">{room.description}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{room.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Up to {room.capacity} guests</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-600">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
            <div>
              <p className="text-sm text-gray-600">Price per night</p>
              <p className="text-3xl font-bold text-blue-600">${room.price}</p>
            </div>
            <Link
              to={`/booking?roomId=${room.id}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}