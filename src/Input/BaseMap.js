import React from 'react';
import { Map, View } from 'ol';
import XYZ from 'ol/source/XYZ'
import TileLayer from 'ol/layer/Tile';
import '../styles/BaseMap.css'

const BaseMap = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 4
      })
    });

    //map.setSize([window.innerWidth, window.innerHeight]);
    //map.updateSize();
  }, []);

  return (
    <div ref={mapRef} className="map" />
  );
};

export default BaseMap;