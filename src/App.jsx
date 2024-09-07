import { useState } from 'react'
import './App.css'
import Card from './Card' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WiDaySunny, WiCloud, WiRain, WiStrongWind } from 'react-icons/wi';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); 

  const submitting = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
     
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b3e5d8f1be0740199d1124854240709&q=${city}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const finalData = await response.json(); 
      console.log(finalData);

      
      setWeatherData(finalData.current);
    } catch (error) {
      console.error("Error fetching the data:", error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className='bg-[#541F8B] w-screen h-[100vh] flex flex-col justify-center items-center py-6 '>
      <h1 className='text-3xl text-white font-bold mt-4'>Weather App</h1> 
      <div className='w-[400px] flex bg-white mt-4 pt-2 items-center h-10 rounded-lg shadow-md'>
        <input 
          type="text" 
          placeholder="Search City..." 
          className='w-[90%] py-1 h-[100%] border-none pl-2 outline-none' 
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              submitting();
            }
          }}
        />
        <FontAwesomeIcon 
          icon={faSearch} 
          className='cursor-pointer h-[100%] mr-2' 
          onClick={submitting}
        />
      </div>

     
      {weatherData && <Card weatherData={weatherData} />}

      <div className='w-[500px] flex justify-evenly py-1 mt-4'>
        <WiDaySunny size={64} className='text-yellow-400'/>
        <WiCloud size={64} className='text-white'/>
        <WiRain size={64} className='text-blue-600'/>
        <WiStrongWind size={64}/>
      </div>
    </div>
  )
}

export default App
