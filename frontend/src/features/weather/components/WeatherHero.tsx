type WeatherHeroProps = {
    condition: string;
    temperature: number;
};

export function WeatherHero({
    condition,
    temperature,
}: WeatherHeroProps) {

    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div className="mb-3 text-6xl">
                ☀️
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                {condition}
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {temperature.toFixed(1)}°
            </h2>

            <p className="text-sm text-muted-foreground">
                Celsius
            </p>

        </div>

    );

}