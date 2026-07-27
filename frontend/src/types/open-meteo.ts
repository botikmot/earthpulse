export interface WeatherResponse {
    latitude: number;
    longitude: number;
    current: WeatherCurrent;
}

export interface WeatherCurrent {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
}