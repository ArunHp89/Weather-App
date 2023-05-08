import React from "react";
export default function Col1(props) {
  return <div className={`${props.className} w-full `}>{props.children}</div>;
}
export function Col5(props) {
  return (
    <div className={`${props.className} sm:w-1/5 px-2`}>{props.children}</div>
  );
}
export function Col2(props) {
  return <div className={`${props.className} sm:w-1/2 `}>{props.children}</div>;
}
export function ColAuto(props) {
  return <div className={`${props.className} w-auto `}>{props.children}</div>;
}
