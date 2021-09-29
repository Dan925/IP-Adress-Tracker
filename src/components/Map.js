import React,{useContext} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LocationContext from './LocationContext'
import ChangeView from './ChangeView'
import marker from '../assets/icon-location.svg'
import L from 'leaflet'
const Map = () => {
    const locationContext = useContext(LocationContext);

    const markerIcon = new L.Icon({
        iconUrl: marker,
    iconRetinaUrl: marker,
    
    iconSize: [32,45],  
    })
    

    return (
        <div className="map-container">
           <MapContainer 
                 center={locationContext.coords} 
                 zoom={12} 
                 style={{ width: '100%', height: '100%'}}
              >
                  <ChangeView center = {locationContext.coords}/>
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />

               <Marker position={locationContext.coords} icon={markerIcon}>
                    <Popup>
                        {locationContext.city} , {locationContext.region}
                    </Popup>
                </Marker>
             </MapContainer>
        </div>
    )
}

export default Map