import type { WeatherSchema } from "../schemas/weatherSchema";
import Card from "./Card"
import WeatherIcon from "./WeatherIcon";

type Props = {
  daily: WeatherSchema["daily"];
}

const DailyForecast = ({daily}: Props) => {
  return (
      <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
           {daily?.map(day => (
            <div key={day.dt} className="flex justify-between">
                <p className="w-1">
                    {new Date(day.dt * 1000).toLocaleDateString( undefined,{
                    weekday: "short" 
                })}</p>
            <WeatherIcon src={day.weather[0].icon}/>
            <p>{Math.round(day.temp.day)}°</p>
            <p className="text-gray-500/75">{Math.round(day.temp.day)}°</p>
            <p className="text-gray-500/75">{Math.round(day.temp.day)}°</p>
            
            </div>
           ))} 

      </Card>
  )
}

export default DailyForecast



//https://openweathermap.org/api/weather-conditions#Weather-Condition-Codes-2