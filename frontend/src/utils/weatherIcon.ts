import {
    Sun,
    CloudSun,
    Cloud,
    CloudFog,
    CloudDrizzle,
    CloudRain,
    CloudSnow,
    CloudLightning,
    Globe2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export function getWeatherIcon(
    weatherCode: number,
): LucideIcon {

    switch (weatherCode) {

        // ☀ Clear Sky
        case 0:
            return Sun;

        // 🌤 Mainly Clear / Partly Cloudy
        case 1:
        case 2:
            return CloudSun;

        // ☁ Overcast
        case 3:
            return Cloud;

        // 🌫 Fog
        case 45:
        case 48:
            return CloudFog;

        // 🌦 Drizzle
        case 51:
        case 53:
        case 55:
            return CloudDrizzle;

        // 🌨 Freezing Drizzle / Freezing Rain
        case 56:
        case 57:
        case 66:
        case 67:
            return CloudSnow;

        // 🌧 Rain
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return CloudRain;

        // ❄ Snow
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return CloudSnow;

        // ⛈ Thunderstorm
        case 95:
        case 96:
        case 99:
            return CloudLightning;

        default:
            return Globe2;

    }

}

export function getWeatherColor(
    code: number,
) {

    switch (code) {

        case 0:
            return "text-yellow-500";

        case 1:
        case 2:
            return "text-amber-500";

        case 3:
            return "text-slate-500";

        case 45:
        case 48:
            return "text-gray-400";

        case 51:
        case 53:
        case 55:
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return "text-blue-500";

        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return "text-sky-400";

        case 95:
        case 96:
        case 99:
            return "text-violet-500";

        default:
            return "text-slate-500";

    }

}