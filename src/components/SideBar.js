import React , {useState , useEffect} from 'react'
import Row from './commoncomponents/Row'
import SearchForPlace from './commoncomponents/SearchForPlace';
import Gps from './commoncomponents/Gps';
import FullCol from './commoncomponents/FullCol';
import ShowerImg from '../assests/Shower.png'
import Image from './commoncomponents/Image';
import Location from './Location';
import { ColAuto } from './commoncomponents/Cols';
// import Img from '../assests'
export default function SideBar({weatherData , setLocation , celsius}) {
  const [cityList , setCityList]=useState('');
  const [searchValue , setSearchValue]=useState('india');
  const [showCityList , setShowCityList] = useState(false);
  const fetchData = () => {
    return fetch(`http://api.weatherapi.com/v1/search.json?key=4bf7f3ea42fc436fbe145440230203 &q=${searchValue}`)
          .then((response) => response.json())
          .then((data) => setCityList(data));
  }
    useEffect(() => {
    fetchData();
  }, [searchValue])
  const SearchHandler=(event)=>{
    setSearchValue(event.target.value);
    setShowCityList(true);
}
const locationHandler = (event)=>{
  setLocation(event.target.value);
  setShowCityList(false);
}
var today = new Date();
var month = today.toLocaleString('default', { month: 'long' });
  return (
    <div className='lg:w-1/3 bg-[#1E213A] sm:py-11 sm:px-[46px] p-7'>
      <Row className='h-full'>
        <Row className="text-white justify-between   w-full">
        <ColAuto className="relative">  <SearchForPlace setLocation={setLocation} SearchHandler={SearchHandler}/>
        {showCityList?
        <ul className='absolute top-11 left-0 w-full bg-[#6E707A] '>
        {cityList.length>0 && cityList!=='undefined' ?  Object.keys(cityList)?.map((key,i)=>{
          return( <li key={i}  className='text-white block border-b text-left last:border-b-0 hover:bg-[#100E1D] transition-all border-white p-1'>
            <button onClick={locationHandler} className='text-left block w-full'  value= {cityList[key]?.name}>
            {cityList[key]?.name}
            </button>
          </li>)
        }):null}
      </ul>:null}
        </ColAuto>
        <ColAuto>
         <Gps/>
         </ColAuto>
         </Row>
          <FullCol className="pt-8 text-center">
            <Image 
            src={weatherData?.current?.condition?.icon}
            className="mx-auto w-32"
            />
          </FullCol>
          <FullCol className="pt-8">
            <h3 className='text-white font-medium text-center text-8xl sm:text-[161px]'>
             {celsius===true? <span>
              {Math.floor(weatherData?.current?.temp_c)}<sub className='text-5xl text-[#A09FB1]'>℃</sub></span>:<span>{Math.floor(weatherData?.current?.temp_f)}<sub className='text-5xl text-[#A09FB1]'>°F</sub></span>}
              </h3>
          </FullCol>
          <FullCol className="text-5xl pt-8 text-[#A09FB1] text-center"><h5>{weatherData?.current?.condition?.text}</h5></FullCol>
          <FullCol>
          <FullCol className="pt-10 ">
            <p className='text-[#A09FB1] text-base text-center'>{ new Date().getDate()<10? (<> 0{new Date().getDate()}</> ): new Date().getDate()}/{month}/{new Date().getFullYear()} </p>
          </FullCol>
          <FullCol className="pt-8">
         <Location weatherData={weatherData}/> 
          </FullCol>
          </FullCol>
          </Row>
    </div>
  )
}
