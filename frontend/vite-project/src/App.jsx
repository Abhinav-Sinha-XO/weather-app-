import React, {useState,useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import History from './components/History';
import './App.css';


function App() {
  
  const [weatherData,setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchHistory =async () =>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/history`)
      setSearchHistory(response.data);
    }catch(error){
      console.log('Error Fetching history',error)

    }
  }


  const handleSearch = async (city) =>{
    try {
      
      const [currentRes,forecastRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/current?city=${city}`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/forecast?city=${city}`)

      ]);

      setWeatherData(currentRes.data)
      setForecastData(forecastRes.data)

      fetchHistory();
    } catch (error) {
      alert('Failed to fetch weather data, Please try again')
      
    }
  }

  useEffect(()=>{
    fetchHistory();
  },[])

  return(
    <div className='bg-blue-300 min-h-screen w-full'>
      <div >
      <h1 className='flex justify-center text-7xl p-5 font-extrabold text-amber-200 font-mono '>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {weatherData && (
        <WeatherDisplay data={weatherData}></WeatherDisplay>
      )}

      {forecastData && (
        <Forecast data={forecastData} />
      )}

      <History items={searchHistory} onSelect={handleSearch} />
    </div>
    </div>
  )

}

export default App
