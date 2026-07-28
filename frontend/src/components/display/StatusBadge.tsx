import { Badge } from "@/components/ui/badge";

type Props = {
    magnitude: number;
};

export function StatusBadge({
    magnitude,
}: Props) {

    const text =
        magnitude >= 7
            ? "Major"
            : magnitude >= 6
                ? "Strong"
                : magnitude >= 5
                    ? "Moderate"
                    : "Light";

    return (

        <Badge>
            {text}
        </Badge>

    );

}