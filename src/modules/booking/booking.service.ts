import mongoose from "mongoose";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Car } from "../car/car.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";

// getAllBookings
const getAllBookingsFromDB = async () => {
  // logic
};

// TODO: zod validation (refine for date and  others)
// Book a car and update the car status to unavailable
const bookACarIntoDB = async (payload: {
  carId: string;
  date: string;
  startTime: string;
}) => {
  const { carId: car, date, startTime } = payload;
  const user = "66f287f2302f6a7d3c928dcd"; // later add from jwt

  // Start a session for transaction (optional, if you want to ensure both operations happen together)
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check if the car is already unavailable
    const carData = await Car.findById(car);
    if (!carData) {
      throw new AppError(httpStatus.NOT_FOUND, "Car not found");
    }

    if (carData.status === "unavailable") {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "This car is currently unavailable for booking",
      );
    }

    // 1. Create the booking record
    const result = await Booking.create([{ car, date, startTime, user }], {
      session,
    });
    console.log(result);

    // 2. Update the car's status to unavailable
    const updateCarStatus = await Car.findByIdAndUpdate(
      car,
      { status: "unavailable" },
      { new: true, session },
    );

    if (!updateCarStatus) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Unable to update car status.",
      );
    }

    // Commit the transaction
    await session.commitTransaction();
    return result[0]; // Return the populated booking result
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
