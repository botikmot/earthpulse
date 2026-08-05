export function getWeatherType(code:number){

    if(code===0){
        return "sunny";
    }

    if([1,2,3].includes(code)){
        return "cloudy";
    }

    if([45,48].includes(code)){
        return "fog";
    }

    if(
        [
            51,53,55,
            56,57,
            61,63,65,
            66,67,
            80,81,82
        ].includes(code)
    ){
        return "rain";
    }

    if(
        [
            71,73,75,
            77,
            85,86
        ].includes(code)
    ){
        return "snow";
    }

    if(
        [
            95,96,99
        ].includes(code)
    ){
        return "storm";
    }

    return "cloudy";

}

export function getHumidityDescription(
    humidity: number,
) {
    if (humidity < 30) return "Dry";
    if (humidity < 60) return "Comfortable";
    if (humidity < 80) return "Humid";

    return "Very Humid";
}

export function getWindDescription(
    wind: number,
) {
    if (wind < 2) return "Calm";
    if (wind < 8) return "Light Breeze";
    if (wind < 20) return "Moderate Breeze";
    if (wind < 35) return "Strong Wind";

    return "High Wind";
}

export function getVisibilityDescription(
    visibility: number,
) {
    const km = visibility / 1000;

    if (km >= 20) return "Excellent";
    if (km >= 10) return "Good";
    if (km >= 5) return "Moderate";

    return "Poor";
}

export function getTemperatureTheme(
    temperature: number,
) {
    if (temperature <= 15) {
        return {
            bg: "bg-sky-100 dark:bg-sky-900/30",
            icon: "text-sky-600",
        };
    }

    if (temperature <= 28) {
        return {
            bg: "bg-blue-100 dark:bg-blue-900/30",
            icon: "text-blue-600",
        };
    }

    return {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        icon: "text-orange-600",
    };
}

export function getHumidityTheme(
    humidity: number,
) {
    if (humidity < 40) {
        return {
            bg: "bg-yellow-100 dark:bg-yellow-900/30",
            icon: "text-yellow-600",
        };
    }

    if (humidity < 75) {
        return {
            bg: "bg-cyan-100 dark:bg-cyan-900/30",
            icon: "text-cyan-600",
        };
    }

    return {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        icon: "text-blue-600",
    };
}

export function getWindTheme(
    wind: number,
) {
    if (wind < 5) {
        return {
            bg: "bg-green-100 dark:bg-green-900/30",
            icon: "text-green-600",
        };
    }

    if (wind < 20) {
        return {
            bg: "bg-sky-100 dark:bg-sky-900/30",
            icon: "text-sky-600",
        };
    }

    return {
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        icon: "text-indigo-600",
    };
}

export function getVisibilityTheme(
    visibility: number,
) {
    const km = visibility / 1000;

    if (km >= 20) {
        return {
            bg: "bg-emerald-100 dark:bg-emerald-900/30",
            icon: "text-emerald-600",
        };
    }

    if (km >= 10) {
        return {
            bg: "bg-yellow-100 dark:bg-yellow-900/30",
            icon: "text-yellow-600",
        };
    }

    return {
        bg: "bg-red-100 dark:bg-red-900/30",
        icon: "text-red-600",
    };
}