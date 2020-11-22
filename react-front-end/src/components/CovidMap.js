import { MapContainer, TileLayer, GeoJSON, Popup, Marker, Icon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import { useState, useEffect } from "react";
import axios from "axios";
import cors from "cors";

export default function CovidMap() {

  const [testRegionID, setTestRegionID] = useState("canada");
  const [testRegionData, setTestRegionData] = useState("test");
  // console.log('HEY', testRegionData)
  // console.log('meow', testRegionData.summary)


  const GetRegionData = function(HRUID) {
    useEffect(() => {
      console.log(testRegionID);
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.opencovid.ca/summary?loc=${HRUID}&date=11-19-2020`).then((res) => {
        console.log(res.data.summary[0].cases)
        setTestRegionData(res.data.summary[0].cases);
      });
    }, [testRegionID]);
  }

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
          })}
        >
          {GetRegionData(feature.properties.HR_UID)} 
          <Popup>
            <div>{testRegionData}</div>
          </Popup>
        </GeoJSON>
      )}
    </MapContainer>
  );
}
