import clsx from "clsx";

type Props = {
    src?: string
    className?: string
}

export default function WeatherIcon({src, className}: Props) {
  if (!src) return null;

  return (
      <img
       className={clsx("size-6", className)}
       src={`https://openweathermap.org/payload/api/media/file/${src}.png`}
       alt="Weather Icon" />
  )
}