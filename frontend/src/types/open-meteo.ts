export interface WeatherResponse {
    latitude: number;
    longitude: number;
    timezone: string;
    current: WeatherCurrent;
    daily: WeatherDaily;
}

export interface WeatherCurrent {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    surface_pressure: number;
    visibility: number;
    weather_code: number;
}

export interface WeatherDaily {
    sunrise: string[];
    sunset: string[];
    
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    time: string[];
}