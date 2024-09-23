// Booking Schema
import mongoose, { Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema: Schema = new Schema(
  {
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: String, required: true }, // "HH:mm" format
    endTime: { type: String, required: true }, // "HH:mm" format
    totalCost: { type: Number, default: 0 }, // Calculated field, can be updated later
  },
  { timestamps: true },
);

export const Booking = mongoose.model<TBooking & mongoose.Document>(
  'Booking',
  BookingSchema,
);
