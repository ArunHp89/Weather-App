import React from "react";

export default function Image(props) {
  return (
    <figure>
      <img
        src={props.src}
        alt={props.alt}
        className={`${props.className} max-w-full`}
      />
    </figure>
  );
}
