import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const getAllBookings = catchAsync(async (req, res) => {
  const { carId, date } = req.query; // Get carId and date from query parameters
  const result = await BookingServices.getAllBookingsFromDB({ carId, date });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const bookACar = catchAsync(async (req, res) => {
  const result = await BookingServices.bookACarIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Car booked successfully",
    data: result,
  });
});

const getUserBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getUserBookingsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "My Bookings retrieved successfully",
    data: result,
  });
});

export const BookingControllers = {
  getAllBookings,
  bookACar,
  getUserBookings,
};
