import React, { useState, useEffect } from "react";
// import db from "./firebase_setup/firebase";
import { initializeApp } from "firebase/app";

// import firebase from 'firebase/app';
import 'firebase/database';
import {  ref, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// import car from './car.png';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";


// initializing
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





const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function Trackpath() {
  const db = getAnalytics();
  // const db= database();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: "AIzaSyAVMuu88ouP8quv0U2L2W1X41lY01eifAQ",
  });

  const [currentLocation,setCurrentLocation] = useState([]);

  const fetchdata = async () => {
    const starCountRef = ref(db, "location/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCurrentLocation(data);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
    //   loadGoogleMap(isloaded);

    //   // Subsequent call with consistent options
    //   const consistentOptions = {
    //     version: "weekly",
    //     apiKey: "AIzaSyAVMuu88ouP8quv0U2L2W1X41lY01eifAQ",
    //     // ... other options
    //   };
      
    //   loadGoogleMap(consistentOptions);


 
  return isLoaded ?(
    <div>
       <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={currentLocation}>
        </Marker>
      </GoogleMap>
    </div>
     ) : (
        <></>
  )
}

export default Trackpath
