export interface WeatherForecast {
    date: string;
    maxTemperature: number;
    minTemperature: number;
    condition: string;
}

export interface Weather {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    pressure: number;
    visibility: number;
    condition: string;
    latitude: number;
    longitude: number;
    sunrise: string;
    sunset: string;
    forecast: WeatherForecast[];
    weatherCode: number;
}