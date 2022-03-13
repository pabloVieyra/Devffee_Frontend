import { MapContainer, TileLayer, Marker } from "react-leaflet";
import s from "./LeafletMap.module.css";

const LeafletMap = ({ center, markers }) => {
  return (
    <MapContainer center={center} zoom={12} className={s.map_container}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position) => (
        <Marker key={position} position={position}></Marker>
      ))}
    </MapContainer>
  );
};
export default LeafletMap;
