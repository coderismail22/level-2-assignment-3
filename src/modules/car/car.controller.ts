import { CarServices } from './car.service';

// 1. create a car
const createCar = async () => {
  const result = await CarServices.createCarIntoDB;
  //   send response
  //   use catchAsync
};

// 2. create a car
const getAllCars = async () => {
  const result = await CarServices.getAllCarsFromDB;
  //   send response
  //   use catchAsync
};

// 1. create a car
const getASingleCar = async () => {
  const result = await CarServices.getASingleCarFromDB;
  //   send response
  //   use catchAsync
};

// 1. create a car
const returnACar = async () => {
  const result = await CarServices.returnACarIntoDB;
  //   send response
  //   use catchAsync
};

// 1. create a car
const updateACar = async () => {
  const result = await CarServices.updateCarIntoDB;
  //   send response
  //   use catchAsync
};

// 1. create a car
const deleteACar = async () => {
  const result = await CarServices.deleteCarFromDB;
  //   send response
  //   use catchAsync
};

export const CarControllers = {
  createCar,
  getAllCars,
  getASingleCar,
  returnACar,
  updateACar,
  deleteACar,
};
