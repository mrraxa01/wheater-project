import { z } from "zod";

// Schema base para a condição climática (usado em current, hourly e daily)
const weatherConditionSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

// Schema do clima atual (current)
const currentSchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  weather: z.array(weatherConditionSchema),
});

// Schema da previsão por minuto (minutely)
const minutelySchema = z.object({
  dt: z.number(),
  precipitation: z.number(),
});

// Schema da previsão por hora (hourly)
const hourlySchema = z.object({
  dt: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  weather: z.array(weatherConditionSchema),
  pop: z.number(),
});

// Schema da previsão diária (daily)
const dailySchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  moonrise: z.number(),
  moonset: z.number(),
  moon_phase: z.number(),
  summary: z.string().optional(),
  temp: z.object({
    day: z.number(),
    min: z.number(),
    max: z.number(),
    night: z.number(),
    eve: z.number(),
    morn: z.number(),
  }),
  feels_like: z.object({
    day: z.number(),
    night: z.number(),
    eve: z.number(),
    morn: z.number(),
  }),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  weather: z.array(weatherConditionSchema),
  clouds: z.number(),
  pop: z.number(),
  rain: z.number().optional(), // Só aparece se chover
  uvi: z.number(),
});

// Schema de alertas (alerts)
const alertSchema = z.object({
  sender_name: z.string(),
  event: z.string(),
  start: z.number(),
  end: z.number(),
  description: z.string(),
  tags: z.array(z.string()),
});

// ==========================================
// SCHEMA PRINCIPAL (O que você vai exportar e usar no .parse())
// ==========================================
export const weatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: currentSchema,
  minutely: z.array(minutelySchema).optional(),
  hourly: z.array(hourlySchema).optional(),
  daily: z.array(dailySchema).optional(),
  alerts: z.array(alertSchema).optional(),
});

// Extrai a tipagem do TypeScript a partir do Schema
export type WeatherSchema = z.infer<typeof weatherSchema>;