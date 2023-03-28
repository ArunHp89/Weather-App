import React, { Children } from 'react'

export default function Row(props) {
  return (
    <div className={` flex flex-wrap  ${props?.className}`}>
        {props.children}
    </div>
  )
}
