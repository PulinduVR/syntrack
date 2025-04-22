import express from 'express';
import db from '../firebase.js';

export const getBusLocations = async (req, res) => {
    try{
        const snapshot = await db.collection("bus").get();

        const busLocations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({success: true, data:busLocations});
    } catch (error) {
        console.error("Error fetching bus locations:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const addBusLocation = async (req, res) => {
    const { id, lat, lng, title, speed } = req.body;
    try {
        const locationData = {
            id,
            lat,
            lng,
            title,
            speed
        };
        await db.collection("bus").doc(id).set(locationData);
        res.status(201).json({ success: true, message: "Bus location added successfully" });
    } catch (error) {
        console.error("Error adding bus location:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}