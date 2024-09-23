import { CarServices } from './car.service';

const createCar = async () => {
  const result = await CarServices.createCarIntoDB;
  //   send response
  //   use catchAsync
};

export const CarControllers = {
  createCar,
};
