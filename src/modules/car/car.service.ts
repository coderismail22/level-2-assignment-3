import { TCar } from './car.interface';

// 1. create a car
const createCarIntoDB = async (payload: TCar) => {
  // logic
};

// 2. get all cars
const getAllCarsFromDB = async () => {
  // logic
};

// 3. get a single car
const getASingleCarFromDB = async () => {
  // logic
};

// 4.Return a car (Admin only)
const returnACarIntoDB = async () => {
  // logic
};

// 5. update a single car
const updateCarIntoDB = async (payload: Partial<TCar>) => {
  // logic
};

// 6. delete a single car
const deleteCarFromDB = async (payload: Partial<TCar>) => {
  // logic
};

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getASingleCarFromDB,
  returnACarIntoDB,
  updateCarIntoDB,
  deleteCarFromDB,
};
