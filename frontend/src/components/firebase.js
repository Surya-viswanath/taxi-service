
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBU2KCQl9ei6toJ6o54yuuOCpsbKpa9kJ4",
  authDomain: "taxi-service-4926b.firebaseapp.com",
  databaseURL: "https://taxi-service-4926b-default-rtdb.firebaseio.com",
  projectId: "taxi-service-4926b",
  storageBucket: "taxi-service-4926b.appspot.com",
  messagingSenderId: "813855548321",
  appId: "1:813855548321:web:039f7d27f73a2daea721e0",
  measurementId: "G-H2JEVM3JXM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



