import React, { useState, useMemo } from 'react';
import { RoomCard } from '../components/rooms/RoomCard';
import { RoomFilter } from '../components/rooms/RoomFilter';
import { rooms } from '../data/rooms';

export function RoomList() {
  const [filters, setFilters] = useState({ search: '', type: '' });

  const filteredRooms = useMemo(() => {
    return rooms.filter(room => {
      const matchesSearch = room.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          room.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesType = !filters.type || room.type === filters.type;
      return matchesSearch && matchesType;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Rooms</h1>
      
      <div className="mb-8">
        <RoomFilter onFilterChange={setFilters} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}