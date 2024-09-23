import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

// getAllBookings
const getAllBookingsFromDB = async () => {
  // logic
};

// TODO: zod validation (refine for date and  others)
// Book a car
const bookACarIntoDB = async (payload: Partial<TBooking>) => {
  console.log(payload);
  const result = await Booking.create(payload);
  return result;
};

// Get user bookings (User only)
const getUserBookings = async () => {
  // logic
};

export const BookingServices = {
  getAllBookingsFromDB,
  bookACarIntoDB,
  getUserBookings,
};
