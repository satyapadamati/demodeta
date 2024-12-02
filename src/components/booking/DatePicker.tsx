import React from 'react';

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  min?: string;
  error?: string;
}

export function DatePicker({ label, value = '', onChange, min, error }: DatePickerProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}