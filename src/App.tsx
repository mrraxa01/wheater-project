import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api";
import Card from "./components/Card";

function App() {
  const {data, isLoading} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: -19.592078, lon: -46.940552})
    
  });

  if(isLoading){
    return <h1>Load Info ...</h1>
  }

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0,100)}
      </Card>
      <Card title="Hourly Forecast (48 Hours)">
        {JSON.stringify(data?.hourly).slice(0,100)}
      </Card>
      <Card title="Daily Forecast">
        {JSON.stringify(data?.daily).slice(0,100)}
      </Card>
    </div>
  )
}

export default App
