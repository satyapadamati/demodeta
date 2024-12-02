import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { rooms } from '../data/rooms';
import { bookingSchema } from '../lib/schemas';
import { DatePicker } from '../components/booking/DatePicker';
import { GuestSelect } from '../components/booking/GuestSelect';

type BookingFormData = {
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
};

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roomId = searchParams.get('roomId');
  const room = rooms.find((r) => r.id === roomId);
  const today = format(new Date(), 'yyyy-MM-dd');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkIn: '',
      checkOut: '',
      guests: 1,
      specialRequests: '',
    },
  });

  if (!room) {
    navigate('/rooms');
    return null;
  }

  const checkIn = watch('checkIn');

  const onSubmit = (data: BookingFormData) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { roomId, ...data });
    // For now, we'll just navigate to a success message
    navigate('/booking-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Room Details</h2>
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium">{room.name}</h3>
            <p className="text-gray-600 mb-2">{room.description}</p>
            <p className="text-lg font-semibold text-blue-600">${room.price} per night</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <DatePicker
                  label="Check-in Date"
                  value={checkIn}
                  onChange={(date) => setValue('checkIn', date)}
                  min={today}
                  error={errors.checkIn?.message}
                />
                <DatePicker
                  label="Check-out Date"
                  value={watch('checkOut')}
                  onChange={(date) => setValue('checkOut', date)}
                  min={checkIn || today}
                  error={errors.checkOut?.message}
                />
              </div>

              <GuestSelect
                value={watch('guests')}
                onChange={(guests) => setValue('guests', guests)}
                maxGuests={room.capacity}
                error={errors.guests?.message}
              />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Special Requests
                </label>
                <textarea
                  {...register('specialRequests')}
                  className="rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                  rows={4}
                  placeholder="Any special requests or requirements?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}