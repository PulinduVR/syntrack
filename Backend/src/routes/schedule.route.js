import express from 'express';
import { getBusSchedules } from '../controllers/schedule.controller.js';

const router = express.Router();

router.get('/', getBusSchedules);

export default router;