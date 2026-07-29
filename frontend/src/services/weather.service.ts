import type { Weather } from "@/types/weather";
import type { WeatherResponse } from "@/types/open-meteo";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

const WEATHER_CODES: Record<number, string> = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Slight Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    95: "Thunderstorm",
};

export function mapWeatherCode(
    code: number
): string {
    return WEATHER_CODES[code] ?? "Unknown Weather";
}

function mapWeatherResponse(
    response: WeatherResponse
): Weather {
    return {
        temperature: response.current.temperature_2m,
        feelsLike: response.current.apparent_temperature,
        humidity: response.current.relative_humidity_2m,
        windSpeed: response.current.wind_speed_10m,
        pressure: response.current.surface_pressure,
        visibility: response.current.visibility,
        condition:
            mapWeatherCode(
                response.current.weather_code
            ),
        latitude: response.latitude,
        longitude: response.longitude,
        sunrise: response.daily.sunrise[0],
        sunset: response.daily.sunset[0],
        forecast: response.daily.time.map((date, index) => ({
            date,
            maxTemperature:
                response.daily.temperature_2m_max[index],
            minTemperature:
                response.daily.temperature_2m_min[index],
            condition:
                mapWeatherCode(
                    response.daily.weather_code[index]
                ),
        })),
        weatherCode: response.current.weather_code,
    };
}

export async function fetchWeather(latitude: number,
    longitude: number): Promise<Weather> {
    try {
        
        const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,surface_pressure,visibility,weather_code&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch weather.");
        }

        const data: WeatherResponse = await response.json();
        
        return mapWeatherResponse(data)

    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch weather.");
    }

}