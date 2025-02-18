import React from 'react';


const Forecast = ({ data }) => {
  /**
   * Process forecast data to group by day and get daily averages
   */
  const processForecastData = (list) => {
    const dailyForecast = {};

    list.forEach(item => {
      const date = item.dt_txt.split(' ')[0].trim();

      // Extract date from timestamp
      if (!dailyForecast[date]) {
        dailyForecast[date] = {
          tempSum: 0,
          count: 0,
          icon: item.weather[0].icon,
          description: item.weather[0].description
        };
      }
      dailyForecast[date].tempSum += item.main.temp;
      dailyForecast[date].count++;
    });

    // Convert to array and calculate average temperature
    return Object.entries(dailyForecast).map(([date, values]) => ({
      date,
      temp: Math.round(values.tempSum / values.count),
      icon: values.icon,
      description: values.description
    }));
  };

  const forecastDays = processForecastData(data.list);

  return (
    <div>
      <div className='p-7'>
        <div className="p-5 bg-blue-400 rounded-b-full shadow-amber-300 shadow-2xl">
          <h3 className='flex justify-center p-5 text-white font-sanss text-5xl pb-15'>5-Days Forecast</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"> {/* Added responsive flex direction */}
            {forecastDays.slice(0, 5).map((day) => {
              const formattedDate = new Date(day.date + "T00:00:00Z");
              
              return (
                <div key={day.date} className="flex flex-col items-center">
                  <h4 className='text-2xl text-white mb-2'>
                    {formattedDate.toLocaleDateString('en-US', { weekday: 'long' })}
                  </h4>
                  <img
                    src={`https://openweathermap.org/img/w/${day.icon}.png`}
                    alt={day.description}
                    className="w-16 h-16"
                  />
                  <div className='text-white text-xl'>
                    <p className='text-center'>{day.temp}°C</p>
                    <p className="forecast-description text-center">{day.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Forecast;