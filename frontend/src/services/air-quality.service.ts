import type { AirQuality } from "@/types/air-quality";

type OpenWeatherAirResponse = {
    coord: {
        lon: number;
        lat: number;
    };
    list: {
        main: {
            aqi: number;
        };
        components: {
            co: number;
            no: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
        };
        dt: number;
    }[];
};

function getAQICategory(
    aqi:number
):AirQuality["category"] {
    switch(aqi){
        case 1:
            return "GOOD";
        case 2:
            return "MODERATE";
        case 3:
            return "UNHEALTHY_SENSITIVE";
        case 4:
            return "UNHEALTHY";
        case 5:
            return "VERY_UNHEALTHY";
        default:
            return "HAZARDOUS";
    }
}

function mapAirQuality(
    response:OpenWeatherAirResponse,
    city:string,
    country:string
):AirQuality {

    const latest = response.list[0];

    return {
        id:`${city}-${country}`,
        city,
        country,
        latitude: response.coord.lat,
        longitude: response.coord.lon,
        aqi: latest.main.aqi,
        category: getAQICategory(
            latest.main.aqi
        ),
        pm25: latest.components.pm2_5,
        pm10: latest.components.pm10,
        o3: latest.components.o3,
        no2: latest.components.no2,
        so2: latest.components.so2,
        co: latest.components.co,
        updatedAt: new Date(
            latest.dt * 1000
        ).toISOString(),
        source: "OpenWeather",
        sourceUrl: "https://openweathermap.org/"
    };
}

export async function fetchAirQuality(
    lat:number,
    lon:number,
    city:string,
    country:string
):Promise<AirQuality>{

    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

    if(!API_KEY){
        throw new Error(
            "Missing OpenWeather API Key"
        );
    }

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(url);

    if(!response.ok){
        throw new Error(
            "Failed fetching air quality"
        );
    }

    const data: OpenWeatherAirResponse = await response.json();
    console.log('air-quality:', data)

    return mapAirQuality(
        data,
        city,
        country
    );

}