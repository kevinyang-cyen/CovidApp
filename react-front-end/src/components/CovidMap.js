import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import healthRegion from "../data/health.json";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CovidMap() {
  console.log('rendering')
  return (
    <MapContainer
      style={{ height: "100vh" }}
      zoom={2}
      center={[56.130367, -106.346771]}
    >
      <GeoJSON
        data={healthRegion}
        style={() => ({
          color: "#4a83ec",
          weight: 2,
          fillColor: "transparent",
        })}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
