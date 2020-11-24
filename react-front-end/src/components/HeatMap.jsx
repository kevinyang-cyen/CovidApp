import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import axios from "axios";
import sortHeatmapData from "../helpers/sortHeatmapData.js";

export default function Map() {
  useEffect(() => {

    const runCall = async () => {
      let apiValue = await fetchData();
      let heatmapCoords = sortHeatmapData(apiValue);

      var map = L.map("map").setView([56.130367, -106.346771], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      const points = heatmapCoords
        ? heatmapCoords.map((p) => {
            return [p[0], p[1]];
          })
        : [];
  
      L.heatLayer(points,{radius: 35}).addTo(map);
    }

   
    const fetchData = async () => {
      try {
        const response = await axios.get("/heatmap");
        return response;
      } catch (err) {
        console.log(err)
        return null;
      }
    } 
    

 

    runCall();
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
}
