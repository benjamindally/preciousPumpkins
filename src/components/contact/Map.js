import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: ${props => props.zindex};
`;

export default class Map extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [38.6705834, -121.7592721],
      zoom: 16,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map);

    L.circle([38.671172, -121.758201]).addTo(this.map);
  }

  render() {
    return <Wrapper width="auto" height="500px" zindex="1" id="map" />;
  }
}
