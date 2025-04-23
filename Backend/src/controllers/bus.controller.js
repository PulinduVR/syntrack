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
    const busLocations = req.body;
  
    if (!Array.isArray(busLocations)) {
      return res.status(400).json({ success: false, message: "Expected an array of bus location objects" });
    }
  
    try {
      const batch = db.batch();
  
      busLocations.forEach((bus) => {
        const { id, lat, lng, title, speed } = bus;
  
        if (!id || lat === undefined || lng === undefined || !title || speed === undefined) {
          throw new Error(`Missing required fields for bus ID: ${id}`);
        }
  
        const busRef = db.collection("bus").doc(id.toString());
        const locationData = { id, lat, lng, title, speed };
        batch.set(busRef, locationData);
      });
  
      await batch.commit();
  
      res.status(201).json({ success: true, message: "Bus locations added successfully" });
    } catch (error) {
      console.error("Error adding bus locations:", error);
      res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
  };