import type { WeatherSchema } from "../schemas/weatherSchema";
import Card from "./Card";
import WeatherIcon from "./WeatherIcon";

type Props = {
    current?: WeatherSchema["current"],
    timeZone: string
}

export default function CurrentWeather({current, timeZone}: Props) {
  return (
      <Card title="Current Weather" childrenClassName="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
            <h2 className="text-6xl font-semibold text-center">
            {Math.round(current?.temp ?? 0)}°C
            </h2>
                <WeatherIcon src={current?.weather?.[0]?.icon} className="size-16" />
            <h3 className="capitalize text-xl">
                {current?.weather?.[0]?.description}
            </h3>
        </div>
        <div className="flex flex-col gap-2">
            <p className="flex flex-col gap-2">Local Time:</p>
            <h3 className="text-4xl font-semibold">
                {new Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: timeZone
                }).format(new Date((current?.dt ?? 0) * 1000))}
            </h3>
        </div>
        <div className="flex justify-between w-full">
            <div className="flex flex-col items-center gap-2">
                <p>Feels Like</p>
                <p>
                    {Math.round(current?.feels_like ?? 0)}°C
                </p>
            </div>
                        <div className="flex flex-col items-center gap-2">
                <p>Humidity</p>
                <p>
                    {Math.round(current?.humidity ?? 0)}%
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p>Wind</p>
                <p>
                    {Math.round(current?.wind_speed ?? 0)} mph
                </p>
            </div>

        </div>
      </Card>
  )
}