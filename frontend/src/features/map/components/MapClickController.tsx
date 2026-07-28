import { useMapEvents } from "react-leaflet";

type Props={
    onMapClick:(
        latitude:number,
        longitude:number,
    )=>void;
};

export function MapClickController({
    onMapClick,
}:Props){

    useMapEvents({
        click(e){
            onMapClick(
                e.latlng.lat,
                e.latlng.lng,
            );
        },
    });

    return null;

}