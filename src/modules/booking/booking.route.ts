import express from 'express';
import { BookingControllers } from './booking.controller';
const router = express.Router();

// Get booking by query parameters (Admin only)
router.get('/', BookingControllers.getAllBookings);

// Book a car (Admin only)
router.post('/', BookingControllers.bookACar);

// Get user bookings (User only)
router.post('/bookings', BookingControllers.getUserBookings);

export const BookingRoutes = router;
