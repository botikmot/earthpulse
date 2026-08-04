import { LiveMapLegend } from "./LiveMapLegend";
import { MapStyleSwitcher } from "./MapStyleSwitcher";

export function MapToolbar() {

    return (

        <div
            className="
                absolute
                top-4
                left-4
                right-4
                z-[900]
                flex
                items-start
                justify-between
                gap-4
                pointer-events-none
            "
        >

            <div className="pointer-events-auto">

                <LiveMapLegend />

            </div>

            <div className="pointer-events-auto">

                <MapStyleSwitcher />

            </div>

        </div>

    );

}