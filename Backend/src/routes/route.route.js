import express from 'express';
import { getAllRoutes, getRouteById } from '../controllers/route.cotroller.js';

const router = express.Router();

router.get('/', getAllRoutes);
router.get('/:id', getRouteById);

export default router;