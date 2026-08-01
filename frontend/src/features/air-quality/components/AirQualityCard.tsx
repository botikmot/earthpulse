import type { AirQuality } from "@/types/air-quality";

import {
    getAQILabel,
    getAQIIcon,
} from "@/utils/air-quality";

type Props = {
    airQuality: AirQuality;
};

export default function AirQualityCard({
    airQuality
}: Props) {

    return (
        <div className="
            rounded-xl
            border
            bg-background
            p-5
            shadow-sm
            space-y-4
        ">

            {/* Header */}

            <div className="
                flex
                items-center
                justify-between
            ">

                <div>


                    <h2 className="
                        text-lg
                        font-semibold
                    ">

                        🌫 {airQuality.city}

                    </h2>


                    <p className="
                        text-sm
                        text-muted-foreground
                    ">

                        {airQuality.country}

                    </p>


                </div>


                <div className="
                    text-3xl
                ">

                    {
                        getAQIIcon(
                            airQuality.category
                        )
                    }

                </div>


            </div>

            {/* AQI */}

            <div className="
                rounded-lg
                bg-muted
                p-4
            ">

                <p className="
                    text-sm
                    text-muted-foreground
                ">
                    Air Quality Index

                </p>

                <div className="
                    flex
                    items-end
                    gap-2
                ">

                    <span className="
                        text-4xl
                        font-bold
                    ">

                        {
                            airQuality.aqi
                        }

                    </span>


                    <span className="
                        mb-1
                        font-medium
                    ">

                        {
                            getAQILabel(
                                airQuality.category
                            )
                        }

                    </span>


                </div>


            </div>





            {/* Pollutants */}

            <div className="
                grid
                grid-cols-2
                gap-3
            ">


                <Pollutant

                    label="PM2.5"

                    value={
                        airQuality.pm25
                    }

                />


                <Pollutant

                    label="PM10"

                    value={
                        airQuality.pm10
                    }

                />


                <Pollutant

                    label="Ozone"

                    value={
                        airQuality.o3
                    }

                />


                <Pollutant

                    label="NO₂"

                    value={
                        airQuality.no2
                    }

                />


                <Pollutant

                    label="SO₂"

                    value={
                        airQuality.so2
                    }

                />


                <Pollutant

                    label="CO"

                    value={
                        airQuality.co
                    }

                />


            </div>





            {/* Footer */}

            <div className="
                text-xs
                text-muted-foreground
            ">

                Updated:

                {" "}

                {
                    new Date(
                        airQuality.updatedAt
                    )
                    .toLocaleString()
                }


            </div>



        </div>

    );

}






function Pollutant({

    label,

    value

}:{

    label:string;

    value:number|null;

}){


    return (

        <div className="
            rounded-lg
            border
            p-3
        ">


            <p className="
                text-xs
                text-muted-foreground
            ">

                {label}

            </p>


            <p className="
                font-semibold
            ">

                {
                    value
                    ??
                    "-"
                }


                {
                    value &&
                    " μg/m³"
                }

            </p>


        </div>

    );

}