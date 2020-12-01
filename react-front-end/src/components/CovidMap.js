import { MapContainer, TileLayer, GeoJSON, Popup, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import axios from "axios";

// sets icon for markers
const covidIcon = new Icon({
  iconUrl: '/covid-extra.svg',
  iconSize: [25, 25]
});

export default function CovidMap() {
  const [position, setPosition] = useState(null);
  const [markerCases, setMarkerCases] = useState([{
    created_date: "1606263172332",
    id: 1,
    latitude: 56.130367,
    longitude: -106.346771,
    user_id: 1
  }]);

  // function to zoom in to your area when you click outside of boundary on the map
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
    return null;
  }

  useEffect(() => {
    const runCall = async () => {
      const markerCasesValue = await fetchReportCases();
      setMarkerCases(markerCasesValue.data);
    };

    // function to fetch marker coordinates from database
    const fetchReportCases = async () => {
      try {
        const res = await axios.get('/api/map');
        return res;
      } catch (err) {
        console.log(err)
        return null;
      }
    };

    runCall();
  }, []);

  // generating a marker for each returned case from the database
  let popups = markerCases.map((report, index) =>
    <Marker position={[report.latitude, report.longitude]} key={index} icon={covidIcon}>
      <Popup>Reported at {new Date(+report.created_date).toISOString().replace(/T.*/, '').split('-').reverse().join('-')}</Popup>
    </Marker>
  )

  return (
    <MapContainer
      style={{ height: "88vh", width: "97vw", margin: "auto", border: "0.5em solid", borderRadius: "1em" }}
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
          key={index}
          data={feature}
          style={() => (
            {
              color: "#4a83ec",
              weight: 3,
              fillColor: feature.properties.CaseCount / feature.properties.TotalPop2019 > 0.0025 ? (feature.properties.CaseCount / feature.properties.TotalPop2019 > 0.005 ? "red" : "orange") : "green"
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
      {popups}
    </MapContainer>
  );
}
