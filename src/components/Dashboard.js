import React from 'react'
import { useContext } from 'react'
import LocationContext from './LocationContext'
const Dashboard = () => {
    const locationContext = useContext(LocationContext);

    
    return (
        <div className="dashboard-container">
            <div className="dash-content">
                <h3>IP ADDRESS</h3>
                <h2>{locationContext.ip}</h2>
            </div>
            <div className="vl"></div>
            <div className="dash-content">
                <h3>LOCATION</h3>
                <h2>{locationContext.city}, {locationContext.region}</h2>
            </div>
            <div className="vl"></div>
            <div className="dash-content">
                <h3>TIMEZONE</h3>
                <h2>UTC{locationContext.timez}</h2>
            </div>
            <div className="vl"></div>
            <div className="dash-content">
                <h3>ISP</h3>
                <h2>{locationContext.isp}</h2>
            </div>
        </div>
    )
}

export default Dashboard
