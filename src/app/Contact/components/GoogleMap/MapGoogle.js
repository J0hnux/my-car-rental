"use client";

import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function MapGoogle() {
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const center = {
    lat: -3.745,
    lng: 2.145,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyChUMytwjUbLrLsxjqGgQcABpT2fA7xTRI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
