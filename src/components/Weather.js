import React, { useState , useEffect } from 'react';
import SideBar from './SideBar';
import RightBar from './RightBar';
import Row from './commoncomponents/Row';

export default function Weather() {


// `https://api.weatherapi.com/v1/forecast.json?key=3e6d2cbe5fa64c18b21173827232701&q=${location}&days=6&aqi=no&alerts=no`
const [weatherData, setWeatherData] = useState([]);
const [location , setLocation] = useState('london');
const [celsius , setCelsius]=useState(true);
const fetchData = () => {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?key=4bf7f3ea42fc436fbe145440230203 &q=${location}&days=5&aqi=no&alerts=no`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
}
useEffect(() => {
  fetchData();
},[location])
const [lat, setLat] = useState(null);
 const [lng, setLng] = useState(null);
 const [status, setStatus] = useState(null);
 const getLocation = () => { 
  if (!navigator.geolocation) {
    setStatus("Geolocation is not supported by your browser"); 
  } else { 
    setStatus("Locating..."); 
    navigator.geolocation.getCurrentPosition( (position) => { setStatus(null); setLat(position.coords.latitude); 
   setLng(position.coords.longitude); }, () => { setStatus("Unable to retrieve your location"); } ); } };
  return (
    <section className=''>
      {/* <button onClick={getLocation}>Get Location</button>  */}
      <p>{status}</p> {lat && <p>Latitude: {lat}</p>} {lng && <p>Longitude: {lng}</p>}
        <Row className='min-h-screen'>
        <SideBar weatherData={weatherData} celsius={celsius} setLocation={setLocation} />
        <RightBar weatherData={weatherData} celsius={celsius} setCelsius={setCelsius}/>
        </Row>
    </section>
  )
}
