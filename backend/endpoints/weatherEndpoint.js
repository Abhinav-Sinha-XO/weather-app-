const axios = require('axios')
const Search = require('../db')


const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

exports.getCurrentWeather = async (req,res)=>{
  try {
    const { city } = req.query
    
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`)

    const newSearch = new Search({city});
    await newSearch.save();
    res.json(response.data)

  } catch (error) {
    console.error('current weather error:',error)
    res.status(500).json({error:'failed to fetch weather data'}); 
  }
}

exports.getWeatherForecast = async (req,res) =>{
  try {
    const { city } = req.query;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`)
    
    res.json(response.data)
  } catch (error) {
    console.error('Forecast error', error)
    res.status(500).json({
      error: 'Faile to fetch forecast data'
    })
    
  }

}

exports.getSearchHistory = async (req,res)=>{
  try {
    const history = await Search.find().sort({timestamp: -1}).limit(10);
    res.json(history)
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
}