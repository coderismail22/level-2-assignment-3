import express from "express";
import { BookingControllers } from "./booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidations } from "./booking.validation";
const router = express.Router();

// Get booking by query parameters (Admin only)
router.get("/", BookingControllers.getAllBookings);

// Book a car (User only)
router.post(
  "/",
  validateRequest(BookingValidations.bookACarValidationSchema),
  BookingControllers.bookACar,
);

// Get user bookings (User only)
router.get("/", BookingControllers.getUserBookings);

export const BookingRoutes = router;
