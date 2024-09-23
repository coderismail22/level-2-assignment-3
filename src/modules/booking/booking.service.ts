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


// TODO: My bookings
// Get user bookings (User only)
const getUserBookingsFromDB = async () => {
  // first get user role and id from token then do all the stuff...
  const result = await Booking.find({
    // user: id, // from jwt token
  });
};

export const BookingServices = {
  getAllBookingsFromDB,
  bookACarIntoDB,
  getUserBookingsFromDB,
};
