import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api";

function App() {
  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: -19.592078, lon: -46.940552})
    
  });
  console.log(data?.dt)
  console.log(data?.rain)
  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
