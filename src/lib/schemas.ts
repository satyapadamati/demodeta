import { z } from 'zod';

export const bookingSchema = z.object({
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
  guests: z.number().min(1, 'At least one guest is required'),
  specialRequests: z.string().optional(),
});