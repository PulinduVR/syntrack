import express from 'express';
import {db} from '../firebase.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY
const TOKEN_EXPIRY = "15m";

export const loginUser = async (req, res) => {
    const { username, password, role } = req.body;
    if(!username || !password || !role) {
        return res.status(400).json({ success: false, message: "Missing Credentials" });
    }

    const collectionName = role === "gov-official" ? "gov-official" : "bus_owner";

    try{
        const snapshot = await db.collection(collectionName).where("username", "==", username).where("password", "==", password).get();

        if(snapshot.empty) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }
        const user = snapshot.docs[0].data();
        const token = jwt.sign({ id: user.username, role: collectionName, name: user.name }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });

        return res.status(200).json({ success: true, message: "Login Successful", token });
    } catch(error) {
        console.error("Login Error", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}