import React from 'react';

interface GuestSelectProps {
  value: number;
  onChange: (guests: number) => void;
  maxGuests: number;
  error?: string;
}

export function GuestSelect({ value, onChange, maxGuests, error }: GuestSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Number of Guests</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500`}
      >
        {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num} {num === 1 ? 'Guest' : 'Guests'}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}