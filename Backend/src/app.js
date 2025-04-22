import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './firebase.js';
import busRoute from './routes/bus.route.js';

dotenv.config();

const busLocations = [
    { "id": 1, "lat": 7.735914, "lng": 80.669629, "title": "Bus 101", "speed": 44 },
    { "id": 2, "lat": 8.627193, "lng": 80.904688, "title": "Bus 102", "speed": 42 },
    { "id": 3, "lat": 7.187416, "lng": 80.622785, "title": "Bus 103", "speed": 39 },
    { "id": 4, "lat": 7.94082, "lng": 80.509717, "title": "Bus 104", "speed": 30 },
    { "id": 5, "lat": 7.582382, "lng": 81.029285, "title": "Bus 105", "speed": 49 },
    { "id": 6, "lat": 8.247028, "lng": 80.25234, "title": "Bus 106", "speed": 44 },
    { "id": 7, "lat": 8.741297, "lng": 81.78231, "title": "Bus 107", "speed": 57 },
    { "id": 8, "lat": 6.328583, "lng": 80.287281, "title": "Bus 108", "speed": 31 },
    { "id": 9, "lat": 6.119571, "lng": 80.949821, "title": "Bus 109", "speed": 46 },
    { "id": 10, "lat": 8.406774, "lng": 80.578893, "title": "Bus 110", "speed": 53 },
    { "id": 11, "lat": 7.458444, "lng": 80.407555, "title": "Bus 111", "speed": 58 },
    { "id": 12, "lat": 7.097033, "lng": 81.649548, "title": "Bus 112", "speed": 51 },
    { "id": 13, "lat": 8.276066, "lng": 80.771472, "title": "Bus 113", "speed": 31 },
    { "id": 14, "lat": 7.077913, "lng": 81.716696, "title": "Bus 114", "speed": 49 },
    { "id": 15, "lat": 7.263517, "lng": 79.863044, "title": "Bus 115", "speed": 46 },
    { "id": 16, "lat": 9.644294, "lng": 81.068334, "title": "Bus 116", "speed": 52 },
    { "id": 17, "lat": 7.602304, "lng": 80.107532, "title": "Bus 117", "speed": 36 },
    { "id": 18, "lat": 9.846093, "lng": 79.979604, "title": "Bus 118", "speed": 54 },
    { "id": 19, "lat": 8.741027, "lng": 80.084556, "title": "Bus 119", "speed": 34 },
    { "id": 20, "lat": 7.058552, "lng": 79.878806, "title": "Bus 120", "speed": 58 },
    { "id": 21, "lat": 8.61991, "lng": 80.250305, "title": "Bus 121", "speed": 55 },
    { "id": 22, "lat": 7.763721, "lng": 80.208397, "title": "Bus 122", "speed": 33 },
    { "id": 23, "lat": 6.642324, "lng": 80.372061, "title": "Bus 123", "speed": 47 },
    { "id": 24, "lat": 5.983043, "lng": 80.920065, "title": "Bus 124", "speed": 58 },
    { "id": 25, "lat": 6.104863, "lng": 81.660102, "title": "Bus 125", "speed": 55 },
    { "id": 26, "lat": 7.262433, "lng": 81.734342, "title": "Bus 126", "speed": 35 },
    { "id": 27, "lat": 6.849895, "lng": 80.563073, "title": "Bus 127", "speed": 43 },
    { "id": 28, "lat": 6.42098, "lng": 80.389657, "title": "Bus 128", "speed": 45 },
    { "id": 29, "lat": 6.862395, "lng": 81.144775, "title": "Bus 129", "speed": 48 },
    { "id": 30, "lat": 6.265615, "lng": 80.38057, "title": "Bus 130", "speed": 31 },
    { "id": 31, "lat": 6.464415, "lng": 81.528241, "title": "Bus 131", "speed": 42 },
    { "id": 32, "lat": 8.384433, "lng": 81.455092, "title": "Bus 132", "speed": 44 },
    { "id": 33, "lat": 6.377116, "lng": 81.428813, "title": "Bus 133", "speed": 43 },
    { "id": 34, "lat": 7.081198, "lng": 80.538444, "title": "Bus 134", "speed": 42 },
    { "id": 35, "lat": 6.771916, "lng": 80.454235, "title": "Bus 135", "speed": 52 },
    { "id": 36, "lat": 9.059292, "lng": 81.536521, "title": "Bus 136", "speed": 34 },
    { "id": 37, "lat": 6.536164, "lng": 81.815094, "title": "Bus 137", "speed": 35 },
    { "id": 38, "lat": 7.270508, "lng": 79.979557, "title": "Bus 138", "speed": 55 },
    { "id": 39, "lat": 6.324641, "lng": 80.802915, "title": "Bus 139", "speed": 38 },
    { "id": 40, "lat": 8.58552, "lng": 80.764876, "title": "Bus 140", "speed": 49 },
    { "id": 41, "lat": 8.829853, "lng": 81.81499, "title": "Bus 141", "speed": 42 },
    { "id": 42, "lat": 9.504598, "lng": 80.927677, "title": "Bus 142", "speed": 57 },
    { "id": 43, "lat": 6.512381, "lng": 80.524398, "title": "Bus 143", "speed": 58 },
    { "id": 44, "lat": 6.679684, "lng": 80.739725, "title": "Bus 144", "speed": 55 },
    { "id": 45, "lat": 8.259916, "lng": 80.232067, "title": "Bus 145", "speed": 36 },
    { "id": 46, "lat": 6.813735, "lng": 79.687148, "title": "Bus 146", "speed": 34 },
    { "id": 47, "lat": 6.271455, "lng": 80.992432, "title": "Bus 147", "speed": 43 },
    { "id": 48, "lat": 6.591492, "lng": 80.53095, "title": "Bus 148", "speed": 43 },
    { "id": 49, "lat": 7.159836, "lng": 80.796717, "title": "Bus 149", "speed": 45 },
    { "id": 50, "lat": 8.091573, "lng": 81.254147, "title": "Bus 150", "speed": 35 }
  ];
  
  
  

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/bus", busRoute);

app.get("/users", async (req, res) => {
    try {
      const snapshot = await db.collection("users").get();
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
export default app;