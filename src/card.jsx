import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureHigh, faDroplet } from '@fortawesome/free-solid-svg-icons';

function Card({ weatherData }) {
  
  const { temp_c, feelslike_c, wind_kph, humidity, condition } = weatherData;

  return (
    <div className='w-[320px] h-[320px] bg-[#FDB383] mt-4'>
      <div className='flex text-3xl font-bold py-6 mx-4 ml-6'>
        <ul>
          <li>{condition.text}</li> 
          <li>{temp_c}°C</li> 
        </ul>
        
        <figure className='px-1 '>
          <img src={condition.icon} alt={condition.text} />
        </figure>
      </div>
      
      <ul className='ml-6'>
        <li>
          <FontAwesomeIcon icon={faTemperatureHigh} className="icon mr-4" />
          Feels like: {feelslike_c}°C
        </li>
        <li>
          <FontAwesomeIcon icon={faWind} className="icon mr-4" />
          Wind: {wind_kph} km/h
        </li>
        <li>
          <FontAwesomeIcon icon={faDroplet} className="icon mr-4" />
          Humidity: {humidity}%
        </li>
      </ul>
    </div>
  )
}

export default Card
