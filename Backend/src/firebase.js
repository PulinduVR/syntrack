import admin from 'firebase-admin';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import serviceAccount from './firebase-service-account.json' with { type: "json" };
import express from 'express';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

(async () => {
    try {
      await db.collection("test").limit(1).get();
      console.log("✅ Firebase connected successfully!");
    } catch (error) {
      console.error("❌ Firebase connection failed:", error);
    }
  })();

  
export default db;