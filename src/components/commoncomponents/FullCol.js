import React from "react";

export default function FullCol(props) {
  return <div className={`${props.className} w-full`}>{props.children}</div>;
}
