import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

// 1.Create a car
router.post('/cars', CarControllers.createCar);

// 2.Get all cars
router.get('/cars', CarControllers.createCar);

// 3.Get a single car
router.get('/cars/:id', CarControllers.createCar);

// 4.Update a single car (Admin only)
router.put('/cars/:id', CarControllers.createCar);

// 5.Delete a single car (Admin only)
router.delete('/cars/:id', CarControllers.createCar);

export const CarRoutes = router;
