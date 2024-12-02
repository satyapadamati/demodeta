import React from 'react';
import { Search } from 'lucide-react';

interface RoomFilterProps {
  onFilterChange: (filters: { search: string; type: string }) => void;
}

export function RoomFilter({ onFilterChange }: RoomFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="search"
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search rooms..."
              onChange={(e) => onFilterChange({ search: e.target.value, type: '' })}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Room Type
          </label>
          <select
            id="type"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange({ search: '', type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="deluxe">Deluxe</option>
            <option value="executive">Executive</option>
            <option value="presidential">Presidential</option>
          </select>
        </div>
      </div>
    </div>
  );
}