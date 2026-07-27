export type MapMarker = {
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    color:
        | "blue"
        | "orange"
        | "red"
        | "green"
        | "purple";
};