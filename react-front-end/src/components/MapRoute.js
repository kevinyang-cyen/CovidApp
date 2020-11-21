import React, { componentDidMount, useState, useEffect } from "react";
import axios from "axios";
import { Map, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import healthData from "./../data/Health_Region_Summaries.json"

export default function MapRoute() {

  return (
    // higher zoom # = more zoomed in 
    <Map center={[58.112709, -103.153648]} zoom={5}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.AddOverlay name="Health units">
          <GeoJSON data={healthData.features} />
        </LayersControl.AddOverlay>
      </LayersControl>
    </Map>
  );
}