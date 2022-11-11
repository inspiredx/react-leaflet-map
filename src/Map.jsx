import React from "react";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './Map.css';
import Basemap from "./Basemap";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {

  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10,
    basemap: 'osm'
  };

  onBmChange = (bm) => {
    console.log(this);
    this.setState({
      basemap: bm
    })
  }

  render() {
    var center = [this.state.lat, this.state.lng];

    const basemapDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
    }

    return (
      <MapContainer zoom={this.state.zoom} center={center}>
        <TileLayer
          // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onBmChange} />
        <Marker position={center}>
      <Popup>
        Выбрана тема {this.state.basemap}
      </Popup>
    </Marker>
      </MapContainer>
    );
  }
}

export default MapComponent;