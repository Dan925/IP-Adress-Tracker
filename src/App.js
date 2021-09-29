
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import LocationContext from "./components/LocationContext";
import { useState,useEffect } from "react";
import axios from "axios";



function App() {
  const [ip,setIP] = useState("");
  const [isp,setISP] = useState("");
  const [city, setCity] = useState("");
  const [region,setRegion] = useState("");
  const [coords,setCoords] = useState([]);
  const [timez,setTimez]= useState("");

  const updateLocation = (data) => {
    
    setISP(data.isp);
    setCity(data.location.city);
    setRegion(data.location.region);
    setCoords([data.location.lat,data.location.lng]);
    setTimez(data.location.timezone);
    

  }

  const vals = {
    ip,isp,city,region,coords,timez,setIP,updateLocation
  }

  const handleIPChange = (ip) =>{
    setIP(ip)
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = 'https://geo.ipify.org/api/v1?';
    const url = apiUrl + 'apiKey=' + apiKey + '&ipAddress=' + ip;
    axios.get(url).then(res=>{
        console.log(res.data)
        updateLocation(res.data);
        

    });
  }

  useEffect(()=>{
    axios.get("https://api.ipify.org/?format=json").then(res=>{
        
        handleIPChange(res.data.ip);
       
    })
},[]);


  return (
    <div className="App">
      <div className="main-container">
        <LocationContext.Provider value={vals}>
          <Header handleIPChange={handleIPChange}></Header>
          <Dashboard></Dashboard>
          {coords.length>0 && 
           <Map></Map>
          }
         
        </LocationContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
