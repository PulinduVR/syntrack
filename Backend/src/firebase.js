import admin from 'firebase-admin';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import serviceAccount from './firebase-service-account.json' with { type: "json" };
import express from 'express';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://syntrack-f43e1-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export const db = admin.firestore();
export const realtimedb = admin.database();

(async () => {
  try {
    // Try reading from the Realtime Database
    const snapshot = await realtimedb.ref('somePath').once('value');
    if (snapshot.exists()) {
      console.log("✅ Realtime Database connected successfully!");
    } else {
      console.log("⚠️ Realtime Database connection successful, but no data found at 'somePath'.");
    }
  } catch (error) {
    console.error("❌ Realtime Database connection failed:", error);
  }
})();

(async () => {
  try {
    await db.collection("test").limit(1).get();
    console.log("✅ Firestore connected successfully!");
  } catch (error) {
    console.error("❌ Firestore connection failed:", error);
  }
})();


  
