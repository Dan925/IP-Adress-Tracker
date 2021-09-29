import React from 'react'
import {useContext, useState } from 'react';
import axios from 'axios'
import {ReactComponent as ArrowIcon} from '../assets/icon-arrow.svg'
import LocationContext from './LocationContext';
const Header = ({handleIPChange}) => {
    const locationContext = useContext(LocationContext);
    const [ip,setIP] = useState(locationContext.ip)
    const handleClick = ()=>{
        console.log("Searching the web for: "+locationContext.ip);
        handleIPChange(ip);
        
        
    }

    return (
        <div className="header-container">
            <h1>IP Address Tracker</h1>
            <div className="header-input">
                <div className="input-control">
                    <input type="text" name="IP" id="IP" placeholder="Search for any IP address" value={ip} onChange={(e)=>setIP(e.target.value)}/>
                    <span onClick={handleClick} className="btn">
                    <ArrowIcon className="btn-svg"/>
                    </span>
                </div>
                

            </div>
        </div>
    )
}

export default Header