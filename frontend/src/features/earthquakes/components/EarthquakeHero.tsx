type EarthquakeHeroProps = {
    magnitude: number;
};

export function EarthquakeHero({
    magnitude,
}: EarthquakeHeroProps) {

    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div className="mb-3 text-6xl">
                🌍
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Magnitude
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {magnitude.toFixed(1)}
            </h2>

            <p className="text-sm text-muted-foreground">
                Latest Recorded Event
            </p>

        </div>

    );

}