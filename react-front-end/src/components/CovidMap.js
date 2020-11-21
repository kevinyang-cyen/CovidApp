import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CovidMap() {
  const [testRegion, setTestRegion] = useState(healthRegion);
  console.log(testRegion)
  // useEffect(() => {
  //   axios.get("http://localhost:8080/map").then((res) => {
  //     console.log(res.data);
  //     setTestRegion(res.data);
  //   });
  // }, []);
  // console.log(testRegion)
  return (
    <MapContainer
      style={{ height: "100vh" }}
      zoom={2}
      center={[56.130367, -106.346771]}
    >
      {console.log(testRegion)}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={testRegion}
        style={() => ({
          color: "#4a83ec",
          weight: 0.3,
          fillColor: "#1a1d62",
          fillOpacity: 0.3,
        })}
      />
    </MapContainer>
  );
}
