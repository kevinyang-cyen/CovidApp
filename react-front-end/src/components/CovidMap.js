import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";

export default function CovidMap() {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      zoom={2}
      center={[56.130367, -106.346771]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        data={healthRegion}
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
