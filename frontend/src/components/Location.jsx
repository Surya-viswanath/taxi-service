import React, { useState } from 'react'

function Location() {

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [userAddress, setUserAddress] = useState()

    const [GPSLatitude, setGPSLatitude] = useState()
    const [GPSLongitude, setGPSLongitude] = useState()
    const geo = navigator.geolocation

    geo.getCurrentPosition(userCoords)
    function userCoords(position){
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude
        // console.log("Latitude :", userGPSLatitude);
        // console.log("Longitude :", userGPSLongitude);    
        setLatitude(userLatitude)
        setLongitude(userLongitude)

    }


    const getUserAddress= async () =>{
        let url = `https://api.opencagedata.com/geocode/v1/json?key=8010550f212742ec9c4492e2907e715c&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`
        const loc = await fetch(url)
        const data = await loc.json()
        console.log("User Address:",data);
        setUserAddress(data.results[0].formatted)

    }
    const handleGetUserAdddress=() => {
       getUserAddress()
    }

    const watchID = geo.watchPosition(userGPSCoords)
    function userGPSCoords(position){
        let userGPSLatitude = position.coords.latitude
        let userGPSLongitude = position.coords.longitude

        setGPSLatitude(userGPSLatitude)
        setGPSLongitude(userGPSLongitude)

    }

    const stopGPS = () => {
        geo.clearWatch(watchID)
    }

  return (
    <div>
      <h1>Current Location</h1>
      <h2>latitude -{latitude}</h2>
      <h2>longitude- {longitude}</h2>
      <h2>User Address- {userAddress}</h2>
      <button onClick={handleGetUserAdddress}>Get User Address</button>
      <hr/>
      <h1>GPS Tracking</h1>
      <h2>GPS Latitud:- {GPSLatitude}</h2>
      <h2>GPS Longitude:- {GPSLongitude}</h2>

    </div>
  )
}

export default Location
