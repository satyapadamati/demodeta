export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Room {
  id: string;
  type: string;
  name: string;
  price: number;
  description: string;
  capacity: number;
  amenities: string[];
  imageUrl: string;
}

export interface Booking {
  id: string;
  userId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}