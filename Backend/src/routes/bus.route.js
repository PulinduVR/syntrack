import express from 'express';
import { getBusLocations, addBusLocation } from '../controllers/bus.controller.js';


const router = express.Router();

router.get('/bus-locations', getBusLocations);
router.post('/bus-locations', addBusLocation); 

export default router;