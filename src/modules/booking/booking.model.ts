// Booking Schema
import mongoose, { Schema } from "mongoose";
import { TBooking } from "./booking.interface";
import { TCar } from "../car/car.interface";

const BookingSchema: Schema = new Schema<TBooking>(
  {
    date: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    startTime: { type: String }, // "HH:mm" format
    endTime: { type: String, default: null }, // "HH:mm" format
    totalCost: { type: Number, default: 0 }, // Calculated field, can be updated later
  },
  { timestamps: true },
);

export const Booking = mongoose.model<TBooking & mongoose.Document>(
  "Booking",
  BookingSchema,
);
