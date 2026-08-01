import type { AirQuality } from "@/types/air-quality";

export function getAQILabel(
    category: AirQuality["category"]
) {

    switch(category){
        case "GOOD":
            return "Good";

        case "MODERATE":
            return "Moderate";

        case "UNHEALTHY_SENSITIVE":
            return "Unhealthy for Sensitive Groups";

        case "UNHEALTHY":
            return "Unhealthy";

        case "VERY_UNHEALTHY":
            return "Very Unhealthy";

        case "HAZARDOUS":
            return "Hazardous";

        default:
            return "Unknown";

    }

}


export function getAQIColor(
    category: AirQuality["category"]
) {

    switch(category){

        case "GOOD":
            return "green";

        case "MODERATE":
            return "yellow";

        case "UNHEALTHY_SENSITIVE":
            return "orange";

        case "UNHEALTHY":
            return "red";

        case "VERY_UNHEALTHY":
            return "purple";

        case "HAZARDOUS":
            return "maroon";

        default:
            return "gray";

    }

}

export function getAQIIcon(
    category: AirQuality["category"]
){

    switch(category){

        case "GOOD":
            return "😊";

        case "MODERATE":
            return "🙂";

        case "UNHEALTHY_SENSITIVE":
            return "😷";

        case "UNHEALTHY":
            return "⚠️";

        case "VERY_UNHEALTHY":
            return "☠️";

        case "HAZARDOUS":
            return "☢️";

        default:
            return "❓";

    }

}

export function getAQILevel(
    aqi:number
){

    if(aqi <= 50)
        return "GOOD";

    if(aqi <= 100)
        return "MODERATE";

    if(aqi <= 150)
        return "UNHEALTHY_SENSITIVE";

    if(aqi <= 200)
        return "UNHEALTHY";

    if(aqi <= 300)
        return "VERY_UNHEALTHY";

    return "HAZARDOUS";

}