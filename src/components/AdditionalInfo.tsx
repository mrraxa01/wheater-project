import type { WeatherSchema } from "../schemas/weatherSchema"
import Card from "./Card"
import Sunrise from "../assets/sunrise.svg?react"
import Sunset from "../assets/sunset.svg?react"
import Cloud from "../assets/cloud.svg?react"
import Uv from "../assets/uv.svg?react"
import Wind from "../assets/wind.svg?react"
import Pressure from "../assets/pressure.svg?react"
import Uparrow from "/src/assets/uparrow.svg?react"

type Props = {
    data?: WeatherSchema
}

export default function AdditionalInfo({ data }: Props) {
    return (
    <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
      {rows.map(({label, value, Icon}) => (
        <div key={value} className="flex justify-between">
          <div className="flex gap-4"><span className="text-gray-500">{label}</span>
          <Icon className="size-8 invert" />
          </div>
          <span>
            <FormatComponent value={value} number={data?.current?.[value]}/>
          </span>

        </div>
      ))}
    </Card>
    )
}

function FormatComponent({value, number}:{value: string, number?: number}){
  if (number == null) return '-'

  if (value === 'sunrise' || value === 'sunset') {
    return new Date(number*1000).toLocaleDateString(
      undefined, {
        hour: "numeric",
        minute: "2-digit",
      })
  }

  if (value === 'wind_deg') return <Uparrow className="size-8 invert" style={{transform: 'rotate(${number})deg'}}/>


  return number
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    Icon: Cloud,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: Uv,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    Icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: Sunset,
  },
] as const