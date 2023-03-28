import React from 'react'
import { LocationSvg } from './Svg/Svg'
export default function Location({weatherData}) {
  return (
    <div className='text-[#A09FB1] items-center flex justify-center'> <LocationSvg className="w-5 h-5 fill-[#A09FB1]"/>
     <p className='ml-1 mb-0'>{weatherData?.location?.name}, {weatherData?.location?.region}   , {weatherData?.location?.country} </p></div>
  )
}
