
import React from 'react'

import { WiThermometer, WiHumidity, WiStrongWind} from 'react-icons/wi'

const WeatherDisplay = ({data})=>{
  return(
    
    <div className=' rounded-3xl  w</div></div>-full'>
      
      <h2 className='flex pl-7 text-4xl font-serif items-center font-extrabold m-2 text-gra'>{data.name}, {data.sys.country}
        
        <img className='flex flex-col justify-end m-1' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />

        <p className='flex text-5xl pl-4 font-extrabold  m-1 text-white'>{Math.round(data.main.temp)}°C</p>

         <p className='pl-5 pr-5 m-2 hidden sm:block text-white font-extralight'>{data.weather[0].description}</p>
         <div >
          <WiThermometer className='hidden sm:block' />
         </div>
         <div className='m-1 pb-2 pr-6 hidden sm:block'>
          <span className='text-2xl m-2  '>Feels like {Math.round(data.main.feels_like)}°c</span>
        </div>
        <div className='m-1 hidden sm:block'>
          <WiHumidity />
        </div>
        <div className='m-1 text-2xl pr-6 hidden sm:block'>
          <span className=''>Humidity {data.main.humidity}%</span>
        </div>

        <div className='m-1 hidden sm:block' ><WiStrongWind/></div>
        <div className='text-2xl m-2 hidden sm:block'>
          
          <span>Wind {data.wind.speed}</span>
        </div>
      </h2>
      
    </div>
  )
}

export default WeatherDisplay;