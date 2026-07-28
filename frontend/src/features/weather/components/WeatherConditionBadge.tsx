import { Badge } from "@/components/ui/badge";

type Props = {
    condition: string;
};

function getVariant(condition: string) {

    const value = condition.toLowerCase();

    if (value.includes("rain")) {
        return "bg-blue-100 text-blue-700";
    }

    if (value.includes("cloud")) {
        return "bg-slate-100 text-slate-700";
    }

    if (value.includes("snow")) {
        return "bg-cyan-100 text-cyan-700";
    }

    if (value.includes("storm")) {
        return "bg-purple-100 text-purple-700";
    }

    return "bg-yellow-100 text-yellow-700";
}

export function WeatherConditionBadge({
    condition,
}: Props) {

    return (

        <Badge className={getVariant(condition)}>

            {condition}

        </Badge>

    );

}