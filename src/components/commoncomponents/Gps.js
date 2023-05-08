import React from "react";
import { GpsSvg } from "../Svg/Svg";
export default function Gps() {
  return (
    <div className="rounded-full p-1 bg-[#6E707A] self-center cursor-pointer">
      <GpsSvg className="w-6 h-6 fill-white" />
    </div>
  );
}
