import { AuthServices } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const signUp = catchAsync(async (req, res) => {
  const result = await AuthServices.signUp(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "User registered successfully.",
    data: result,
  });
});

const signIn = catchAsync(async (req, res) => {
  const { userData, token } = await AuthServices.signIn(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User logged in successfully.",
    data: userData,
    token,
  });
});

export const AuthControllers = {
  signUp,
  signIn,
};
