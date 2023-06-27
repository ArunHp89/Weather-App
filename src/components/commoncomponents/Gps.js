import React from "react";
import { useState } from "react";
import { GpsSvg } from "../Svg/Svg";
import { useGeolocated } from "react-geolocated";
export default function Gps({ setLocation }) {
  const [city, setCity] = useState("");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const handleCurrentLocation = () => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      setLocation(`${coords.latitude},${coords.longitude}`);
    }
  };
  return (
    <div
      onClick={handleCurrentLocation}
      className="rounded-full p-1 bg-[#6E707A] self-center cursor-pointer"
    >
      <GpsSvg className="w-6 h-6 fill-white" />
    </div>
  );
}
