import React, { useState, useEffect } from "react";

export default function SearchForPlace({ setLocation, SearchHandler }) {
  // http://api.weatherapi.com/v1/search.json?key=4bf7f3ea42fc436fbe145440230203 &q=London

  return (
    <div>
      <input
        onChange={SearchHandler}
        type="search"
        placeholder="Seach for places"
        className="bg-[#6E707A] h-10 w-40 text-white px-3 outline-none placeholder:text-white"
      />
    </div>
  );
}
