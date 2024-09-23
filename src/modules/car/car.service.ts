import { TCar } from './car.interface';
import { Car } from './car.model';

// 1. create a car
const createCarIntoDB = async (payload: TCar) => {
  const result = await Car.create(payload);
  return result;
};

// 2. get all cars
const getAllCarsFromDB = async () => {
  const result = await Car.find();
  return result;
};

// 3. get a single car
const getASingleCarFromDB = async (id: string) => {
  const result = await Car.findById(id);
  return result;
};

// TODO: Return a car
// 4.Return a car (Admin only)
const returnACarIntoDB = async () => {
  // logic
};

// TODO: Update non-primitive fields
// 5. update a single car
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
  const result = await Car.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });
  return result;
};

// 6. delete a single car
const deleteCarFromDB = async (id: string) => {
  const result = await Car.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getASingleCarFromDB,
  returnACarIntoDB,
  updateCarIntoDB,
  deleteCarFromDB,
};
