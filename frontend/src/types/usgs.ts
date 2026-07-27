export interface USGSFeature {
    id: string;
    properties: USGSProperties
    geometry: USGSGeometry
}

export interface USGSResponse {
    features: USGSFeature[]
}

export interface USGSProperties {
    mag: number;
    place: string;
    time: number;
}

export interface USGSGeometry {
    coordinates: [number, number, number];
}