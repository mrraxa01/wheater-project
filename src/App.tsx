import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const {data, isLoading} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: -19.592078, lon: -46.940552})
    
  });

  if(isLoading){
    return <h1>Load Info ...</h1>
  }

  const timezone = data?.timezone ?? "UTC";

  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather current={data?.current} timeZone={timezone} />
      <HourlyForecast hourly={data?.hourly}/>
      <DailyForecast daily={data?.daily}/>
    </div>
  )
}

export default App
