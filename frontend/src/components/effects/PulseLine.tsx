"use client";

type PulseLineProps = {
    className?: string;
};


export function PulseLine({
    className = "",
}: PulseLineProps) {

    return (
        <svg
            viewBox="0 0 500 100"
            className={className}
            fill="none"
        >

            <path
                d="
                M0 50
                H80
                L100 50
                L120 20
                L145 80
                L170 50
                H250
                L270 50
                L290 35
                L310 65
                L330 50
                H500
                "
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                    animate-dash
                "
            />

        </svg>
    );
}