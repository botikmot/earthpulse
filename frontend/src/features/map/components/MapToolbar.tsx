import { LiveMapLegend } from "./LiveMapLegend";
import { MapStyleSwitcher } from "./MapStyleSwitcher";

export function MapToolbar() {

    return (

        <div
            className="
                pointer-events-none
                absolute
                left-3
                right-3
                top-3
                z-[900]

                flex
                flex-col
                gap-2

                sm:left-4
                sm:right-4
                sm:top-4
                sm:gap-3

                lg:flex-row
                lg:items-start
                lg:justify-between
                lg:gap-4
            "
        >

            <div className="pointer-events-auto min-w-0">

                <LiveMapLegend />

            </div>

            <div
                className="
                    pointer-events-auto
                    self-end
                    lg:self-auto
                "
            >

                <MapStyleSwitcher />

            </div>

        </div>

    );

}