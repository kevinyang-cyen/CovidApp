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

      // adding a map of Canada
      L.tileLayer("https://api.mapbox.com/styles/v1/thejellyroxx123/ckhzl5i3t0gmp19mzaxq83ikx/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhlamVsbHlyb3h4MTIzIiwiYSI6ImNraHpsOXB4eDBvcHYycXIwYzlwOXJvbGwifQ.uRfe-Gg7jqOeVJoQF333pg", {
        attribution:
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
      }).addTo(map);

      // adding to heatLayer to each coordinate with cases on the map
      const points = heatmapCoords
        ? heatmapCoords.map((p) => {
          return [p[0], p[1]];
        })
        : [];

      L.heatLayer(points, { radius: 35 }).addTo(map);
    }

    // fetching heatmap coordinates from the API
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

  return <div id="map" style={{ height: "88vh", width: "97vw", margin: "auto", border: "0.5em solid", borderRadius: "1em" }}></div>;
}