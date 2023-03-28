import React from 'react'

export default function Gps() {
  return (
    <div>
      
    </div>
  )
}
export function GpsSvg(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`${props.className}`}>
    <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
    </svg>
  );
}
export function LocationSvg(props){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`${props.className}`}>
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
    </svg>
  )
}

export function DownSvg(props){
  return(

    <svg className={`${props.className}`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
    <g>
      <path d="M50.5,19.881c-1.104,0-2,0.896-2,2V72.17L33.193,56.609c-0.781-0.781-1.922-0.781-2.703,0
c-0.781,0.78-0.719,2.047,0.062,2.828l18.883,18.857c0.375,0.375,0.899,0.586,1.43,0.586s1.047-0.211,1.422-0.586l18.857-18.857
c0.781-0.781,0.783-2.048,0.002-2.828c-0.781-0.781-2.296-0.781-3.077,0L52.5,71.933V21.881C52.5,20.776,51.604,19.881,50.5,19.881
z" />
    </g>
  </svg>
  )
}
export function UpSvg(props){
  return(

    <svg  className={`${props.className}`} height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.027 512.027" xmlSpace="preserve">
    <g>
      <g>
        <path d="M476.881,216.453L263.547,3.12c-4.16-4.16-10.88-4.16-15.04,0L35.174,216.453c-4.053,4.267-3.947,10.987,0.213,15.04
  c4.16,3.947,10.667,3.947,14.827,0L245.307,36.4v464.96c0,5.867,4.8,10.667,10.667,10.667c5.867,0,10.667-4.8,10.667-10.667V36.4
  l195.093,195.093c4.267,4.053,10.987,3.947,15.04-0.213C480.827,227.12,480.827,220.613,476.881,216.453z" />
      </g>
    </g>
  </svg>
  )
}