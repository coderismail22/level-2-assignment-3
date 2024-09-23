import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const getAllBookings = async () => {};

const bookACar = catchAsync(async (req, res) => {
  const result = await BookingServices.bookACarIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Car booked successfully.',
    data: result,
  });
});
const getUserBookings = async () => {};

export const BookingControllers = {
  getAllBookings,
  bookACar,
  getUserBookings,
};
