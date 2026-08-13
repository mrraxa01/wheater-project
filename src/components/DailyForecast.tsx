import type { WeatherSchema } from "../schemas/weatherSchema";
import Card from "./Card"

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
                <img
                    className="size-6"
                    src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`}
                    alt="Weather Icon" />
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