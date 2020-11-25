import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";

export default function CovidMap() {
  console.log(healthRegion);

  return (
    <MapContainer
      style={{ height: "100vh", width: "100vw" }}
      zoom={5}
      center={[56.130367, -106.346771]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {healthRegion.features.map((feature, index) =>

        <GeoJSON
          key= {index}
          data={feature}
          style={() => (
            {
            color: "#4a83ec",
            weight: 3,
            fillColor: feature.properties.CaseCount/feature.properties.TotalPop2019 > 0.0025? (feature.properties.CaseCount/feature.properties.TotalPop2019 > 0.005? "red" : "orange") : "green"
          })}
        >
          <Popup>
            <div>Health Region: {feature.properties.Province} {feature.properties.ENGNAME}</div>
            <div>Case Count: {feature.properties.CaseCount || "Unavailable"}</div>
            <div>Deaths: {feature.properties.Deaths || "Unavailable"}</div>
            <div>Recovered: {feature.properties.Recovered || "Unavailable"}</div>
            <div>Tests: {feature.properties.Tests || "Unavailable"}</div>
          </Popup>
        </GeoJSON>
      )}
    </MapContainer>
  );
}
