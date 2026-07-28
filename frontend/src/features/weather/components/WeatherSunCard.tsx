import { Sunrise, Sunset } from "lucide-react";
import { BaseCard } from "@/components/ui/BaseCard";

type Props = {
    sunrise: string;
    sunset: string;
};

export function WeatherSunCard({
    sunrise,
    sunset,
}: Props) {

    return (

        <BaseCard
            title="Sun Information"
            className="mt-6"
        >

            <div className="grid gap-6 md:grid-cols-2">

                <div className="text-center">

                    <Sunrise className="mx-auto mb-3 h-10 w-10 text-yellow-500"/>

                    <p className="text-sm text-muted-foreground">

                        Sunrise

                    </p>

                    <h3 className="mt-2 text-2xl font-bold">

                        {new Date(sunrise).toLocaleTimeString([],{
                            hour:"numeric",
                            minute:"2-digit",
                        })}

                    </h3>

                </div>

                <div className="text-center">

                    <Sunset className="mx-auto mb-3 h-10 w-10 text-orange-500"/>

                    <p className="text-sm text-muted-foreground">

                        Sunset

                    </p>

                    <h3 className="mt-2 text-2xl font-bold">

                        {new Date(sunset).toLocaleTimeString([],{
                            hour:"numeric",
                            minute:"2-digit",
                        })}

                    </h3>

                </div>

            </div>

        </BaseCard>

    );

}