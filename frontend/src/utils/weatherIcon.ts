import {
    Sun,
    Cloud,
    CloudSun,
    CloudRain,
    CloudSnow,
    CloudFog,
    CloudLightning,
    Globe2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export function getWeatherIcon(
    weatherCode:number
): LucideIcon {

    if (weatherCode === 0)
        return Sun;

    if ([1,2].includes(weatherCode))
        return CloudSun;

    if (weatherCode === 3)
        return Cloud;

    if ([45,48].includes(weatherCode))
        return CloudFog;

    if (
        [
            51,53,55,
            56,57,
            61,63,65,
            66,67,
            80,81,82,
        ].includes(weatherCode)
    )
        return CloudRain;

    if (
        [
            71,73,75,
            77,
            85,86,
        ].includes(weatherCode)
    )
        return CloudSnow;

    if (
        [
            95,
            96,
            99,
        ].includes(weatherCode)
    )
        return CloudLightning;

    return Globe2;

}