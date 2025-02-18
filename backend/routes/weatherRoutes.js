

const express = require('express')

const router = express.Router()

const { getCurrentWeather,
        getWeatherForecast,
        getSearchHistory
 } = require('../endpoints/weatherEndpoint');

//  Api endpoits

router.get('/current',getCurrentWeather);
router.get('/forecast',getWeatherForecast)
router.get('/history',getSearchHistory);

module.exports = router;