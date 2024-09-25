import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  token?: string;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const responseData: any = {
    success: data.success,
    status: data?.statusCode,
    message: data.message,
    data: data.data,
  };

  if (data.token) {
    responseData.token = data.token;
  }

  res.status(data?.statusCode).json(responseData);
};

export default sendResponse;
