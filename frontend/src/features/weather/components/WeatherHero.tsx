type WeatherHeroProps = {
    temperature: number;
    condition: string;
    location?: string;
};

export function WeatherHero({
    temperature,
    condition,
    location,
}: WeatherHeroProps) {

    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div className="mb-3 text-6xl">
                ☀️
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Current Temperature
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {temperature.toFixed(1)}°
            </h2>

            <p className="mt-2 text-lg font-medium">
                {condition}
            </p>

            <p className="text-sm text-muted-foreground">
                {location}
            </p>

        </div>

    );

}