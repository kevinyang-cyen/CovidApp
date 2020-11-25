import { MapContainer, TileLayer, GeoJSON, Popup, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CovidMap() {
    const [position, setPosition] = useState(null);
    const [markerCases, setMarkerCases] = useState({});
    function MyComponent() {
      const map = useMapEvents({
        click: () => {
          map.locate()
        },
        locationfound: (location) => {
          setPosition(location.latlng)
          map.flyTo(location.latlng, map.getZoom())
        },
      })
      return position === null ? null : (
        <Marker position={position}>
          <Popup>Your are here</Popup>
        </Marker>
      )
    }
  console.log(healthRegion);

  useEffect(() => {
    const runCall = async () => {
      const markerCasesValue = await fetchReportCases();
      console.log("markerCasesValue: ", markerCasesValue)
    };

    const fetchReportCases = async () => {
      try {
        const res = await axios.get('/map');
        console.log(res);
        return res;
      } catch (err) {
        console.log(err)
        return null;
      }
    };

    runCall();
  }, []);

  return (
    <MapContainer
      style={{ height: "80vh", width: "100vw" }}
      zoom={5}
      center={[56.130367, -106.346771]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent></MyComponent>

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
