import React from 'react';
import Card from './commoncomponents/Card';
import Col1, { Col2, Col5, ColAuto } from './commoncomponents/Cols';
import Image from './commoncomponents/Image';
import Row from './commoncomponents/Row';
import Sleet from '../assests/Sleet.png'
import { DownSvg, UpSvg } from './Svg/Svg';
export default function RightBar({weatherData , setCelsius , celsius}) {
  return (
    <div className='lg:w-4/6 bg-[#100E1D] sm:px-[46px] p-7 w-full  sm:pt-11'>
      <Col1 className="max-w-4xl mx-auto flex flex-wrap">
      <Row className="justify-end w-full">
        <div onClick={()=>{setCelsius(true)}} 
        className={`${celsius===true?'bg-[#585676] text-white':'bg-[#E7E7EB] text-[#110E3C]'} transition-all w-10 cursor-pointer h-10 rounded-full  flex justify-center
         items-center text-lg font-bold `}>
        ℃
        </div>
        <div onClick={()=>{setCelsius(false)}} 
        className={`${celsius===false?'bg-[#585676] text-white':'bg-[#E7E7EB] text-[#110E3C]'} transition-all ml-2 cursor-pointer w-10 h-10 rounded-full 
         flex justify-center items-center text-lg font-bold `}>
        ℉
        </div>

      </Row>
      <Row className='sm:mt-16 mt-7 w-[calc(100%+16px)] -m-2 justify-center'>
        {weatherData?.forecast?.forecastday?.map((item , index)=>{
          return(
            <Col5 key={index} className="w-full mb-4">
            <Card className='py-5 px-2 text-center'>
              <p className='text-white'>{item.date}</p>
              <Image className='w-16 mx-auto mt-2 mb-6' src={item?.day?.condition?.icon}/>
              <Row className="justify-between">
                <ColAuto className='text-[#E7E7EB] text-base flex items-center'><DownSvg className="fill-[#E7E7EB] w-6 h-6 rotate-180"/>
                 {celsius?<span>{Math.floor(item?.day?.maxtemp_c)}°C</span>:<span>{Math.floor(item?.day?.maxtemp_f)}°F</span>}</ColAuto>
                <ColAuto className="text-[#A09FB1] text-base flex items-center"><DownSvg className="fill-[#A09FB1] w-6 h-6"/>
                 {celsius?<span>{Math.floor(item?.day?.mintemp_c)}°C</span>:<span>{Math.floor(item?.day?.mintemp_f)}°F</span>} </ColAuto>
              </Row>
            </Card>
            </Col5>
          )
        })}
      </Row>
      <Row className="-mx-6 w-[calc(100%+48px)] text-white sm:pt-16 pt-7">
        <Col1 className="px-6  text-2xl font-bold">Today’s Hightlights </Col1>
        <Col2 className='px-6 sm:py-6 pt-3 flex w-full'>
        <Card className="text-center p-5">
          <p className='text-[#E7E7EB] text-base'>Wind status</p>
          <h3 className='text-6xl font-bold mb-4'>{Math.floor(weatherData?.current?.wind_mph)} <span className='font-light text-5xl'>mph</span></h3>
          <span>WSW</span>
        </Card>
        </Col2>
        <Col2 className='px-6 sm:py-6 pt-3 flex w-full'>
        <Card className="text-center p-5">
          <p className='text-[#E7E7EB] text-base'>Humidity</p>
          <h3 className='text-6xl font-bold mb-4'>{Math.floor(weatherData?.current?.humidity)}<span className='font-light text-5xl'>%</span></h3>
          <div className='w-full rounded-3xl bg-[#A09FB1] relative mt-10 mb-8'>
            <span className='absolute -top-6 left-0 text-[#A09FB1] -translate-x-1/2'>0</span>
             <span className='absolute -top-6 left-1/2 text-[#A09FB1]  -translate-x-1/2'>50</span> 
            <span className='absolute -top-6 right-0 text-[#A09FB1]  -translate-x-1/2'>100</span>
            <span className='absolute -bottom-5 right-0 text-[#A09FB1]  -translate-x-1/2'>%</span>
          <div className='h-3 rounded-3xl bg-[#FFEC65]' style={{width:`${weatherData?.current?.humidity}%`}}>
          </div>
         </div>
        </Card>
        </Col2>
        <Col2 className='px-6 sm:py-6 pt-3 flex w-full'>
        <Card className="text-center p-5">
          <p className='text-[#E7E7EB] text-base'>Visibility</p>
          <h3 className='text-6xl font-bold mb-4'>{Math.floor(weatherData?.current?.vis_miles)} <span className='font-light text-5xl'>miles</span></h3>
          
        </Card>
        </Col2>
        <Col2 className='px-6 sm:py-6 pt-3 flex w-full'>
        <Card className="text-center p-5">
          <p className='text-[#E7E7EB] text-base'>Air Pressure</p>
          <h3 className='text-6xl font-bold mb-4'>{Math.floor(weatherData?.current?.pressure_mb)} <span className='font-light text-5xl'>mb</span></h3>
        </Card>
        </Col2>
      </Row>
      </Col1>
    </div>
  )
}
