import { useMap } from "react-leaflet"
const ChangeView = ({center,zoom})=>{
     const map = useMap();
     map.setView(center,zoom=12);
     return null;
}

export default ChangeView;