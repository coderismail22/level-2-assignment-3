import mongoose from "mongoose";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Car } from "../car/car.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";

// TODO: set auth("user") and replace the static user id here
const bookACarIntoDB = async (payload: {
  carId: string;
  date: string;
  startTime: string;
}) => {
  const { carId: car, date, startTime } = payload;
  const user = "66f2bda37e60c8df1cff8f03"; // later add from jwt

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
    const newBooking = await Booking.create([{ car, date, startTime, user }], {
      session,
    });

    if (!newBooking) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Could not create a new booking",
      );
    }
    // Extract the booking id
    const newBookingId = (newBooking?.[0]._id as Object).toString();

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

    // 3. Find the latest booking record
    const result = await Booking.findById(newBookingId).populate("user car");
    console.log("result", result);
    return result; // Return the populated booking result
  } catch (error) {
    // Abort the transaction if an error occurs
    await session.abortTransaction();
    throw error;
  } finally {
    // End the session
    session.endSession();
  }
};

// getAllBookings
// TODO: set auth("admin")
// TODO: add query builder
const getAllBookingsFromDB = async (filters: {
  carId?: string;
  date?: string;
}) => {
  const query: any = {};

  // Apply filters if they are present in the request
  if (filters.carId) {
    query.car = filters.carId;
  }

  if (filters.date) {
    query.date = filters.date;
  }

  // Fetch bookings based on query filters
  const result = await Booking.find(query).populate("car user");
  return result;
};


const getUserBookingsFromDB = async () => {
  // first get user role and id from token then do all the stuff...
  // const result = await Booking.find({
  // user: id, // from jwt token
  // });
  const result = 10;
  return result;
};

export const BookingServices = {
  getAllBookingsFromDB,
  bookACarIntoDB,
  getUserBookingsFromDB,
};
