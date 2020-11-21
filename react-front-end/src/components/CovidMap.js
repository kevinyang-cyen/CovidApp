import { MapContainer, TileLayer, GeoJSON, Popup, Marker, Icon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import markerIcon from "../data/imgs/marker.png"

export default function CovidMap() {
  return (
    <MapContainer
      style={{ height: "50vh", width: "50vw" }}
      zoom={5}
      center={[56.130367, -106.346771]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {healthRegion.features.map((feature) => 
        <GeoJSON 
          data={feature} 
            style={() => ({
            color: "#4a83ec",
            weight: 3,
            fillColor: "transparent",
          })}>
          <Popup>
            <div>{feature.properties.HR_UID}</div>
          </Popup>
        </GeoJSON>
      )}
    </MapContainer>
  );
}
