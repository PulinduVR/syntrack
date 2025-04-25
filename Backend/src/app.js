import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './firebase.js';
import busRoute from './routes/bus.route.js';
import userRoute from './routes/user.route.js';
import routeRoute from './routes/route.route.js';

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/bus", busRoute);
app.use("/user", userRoute);
app.use("/routes", routeRoute);

export default app;

