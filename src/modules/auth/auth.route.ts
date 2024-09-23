import express from 'express';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post('/signup', AuthControllers.signUp);
router.post('/login', AuthControllers.signIn);

export const Auth = router;
