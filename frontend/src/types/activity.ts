export interface Activity {
    id: string;
    title: string;
    description: string;
    time: string;
    color:
        | "orange"
        | "blue"
        | "red"
        | "green";
}