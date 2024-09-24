import mongoose from "mongoose";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Car } from "../car/car.model";

// getAllBookings
const getAllBookingsFromDB = async () => {
  // logic
};

// TODO: zod validation (refine for date and  others)
// Book a car and update the car status to unavailable
const bookACarIntoDB = async (payload: Partial<TBooking>) => {
  const { carId, date, startTime } = payload;

  // Start a session for transaction (optional, if you want to ensure both operations happen together)
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1. Create the booking record
    const result = await Booking.create([payload], { session });

    // 2. Update the car's status to unavailable
    const updateCarStatus = await Car.findByIdAndUpdate(
      carId,
      { status: "unavailable" }, // Set the status to unavailable
      { new: true, session }, // Return the updated document and include in the session
    );

    if (!updateCarStatus) {
      throw new Error("Car not found and couldn't update the status");
    }

    // Commit the transaction
    await session.commitTransaction();

    return result; // Return the booking result
  } catch (error) {
    // Abort the transaction if an error occurs
    await session.abortTransaction();
    throw error;
  } finally {
    // End the session
    session.endSession();
  }
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
