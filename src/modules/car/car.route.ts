import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

// 1.Create a car
router.post('/', CarControllers.createCar);

// 2.Get all cars
router.get('/', CarControllers.createCar);

// 3.Get a single car
router.get('/:id', CarControllers.createCar);

// 4.Return a car (Admin only)
router.get('/return', CarControllers.createCar);

// 5.Update a single car (Admin only)
router.put('/:id', CarControllers.createCar);

// 6.Delete a single car (Admin only)
router.delete('/:id', CarControllers.createCar);

export const CarRoutes = router;
