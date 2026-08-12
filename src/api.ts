// 1. Removido o "type" da importação. 
// (Dica: O nome do arquivo parece ter um erro de digitação "wheater", talvez seja melhor renomear para "weatherSchema")
import { weatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  // 2. Removidas as quebras de linha/espaços extras de dentro da URL
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`
  );

  // 3. Melhoria: Verificar se a requisição na API deu certo antes de tentar ler o JSON
  if (!res.ok) {
    throw new Error(`Erro na API OpenWeather: ${res.status}${res.statusText}`);
  }

  // 4. Adicionado o "await" essencial aqui
  const data = await res.json(); 
  
  return weatherSchema.parse(data);
}

    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br
    //https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br
    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}
    //https://api.openweathermap.org/data/4.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`)