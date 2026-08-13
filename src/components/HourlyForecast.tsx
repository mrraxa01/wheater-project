import type { WeatherSchema } from "../schemas/weatherSchema";
import Card from "./Card"
import WeatherIcon from "./WeatherIcon";

type Props = {
      hourly: WeatherSchema["hourly"];
}

const HourlyForecast = ({hourly}: Props) => {
  return (
    <Card title="Hourly Forecast (48Hrs)" childrenClassName="flex flex-row gap-6 overflow-x-scroll">
        {hourly?.map((hour) => (
            <div className="flex flex-col gap-2">
                <p>{new Date(hour.dt * 1000).toLocaleTimeString([], 
                    { hour: '2-digit', minute: '2-digit' })}</p>
                <WeatherIcon src={hour.weather[0].icon}/>
                <p>{Math.round(hour.temp)}°</p>
            </div>
        ))}
    </Card>
  )
}

export default HourlyForecast
