import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Map } from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function MapRoute() {
  return (
    // higher zoom # = more zoomed in 
    <Map center={[58.112709, -103.153648]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}