import { NextFunction, Request, Response } from 'express';
import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const signUp = catchAsync(async (req, res) => {
  const result = await AuthServices.signUp(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Signed up successfully !',
    data: result,
  });
});

const signIn = catchAsync(async (req, res) => {
  const result = await AuthServices.signIn(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Signed in successfully !',
    data: result,
  });
});

export const AuthControllers = {
  signUp,
  signIn,
};
