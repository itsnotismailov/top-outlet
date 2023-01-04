import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVCrCaVXiWihpNNgv9MthCLY2pr5rSdCI",
  authDomain: "topoutlet-39d34.firebaseapp.com",
  projectId: "topoutlet-39d34",
  storageBucket: "topoutlet-39d34.appspot.com",
  messagingSenderId: "918368521284",
  appId: "1:918368521284:web:d6f19fd368c3bb9d5f8011",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
export const admin = "bekovtursun708@gmail.com";
export const admin1 = "mofpower73@gmail.com";
export const admin2 = "topoutletkg2022@gmail.com";
export const admin3 = "ismailov10800@gmail.com";
export const admin4 = "nurikgentle@gmail.com";

export default app;
