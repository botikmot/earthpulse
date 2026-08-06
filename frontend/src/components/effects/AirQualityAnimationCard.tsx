"use client";

export function AirQualityAnimationCard() {
    return (

        <div className="relative h-25 w-full overflow-hidden">

            {/* Soft Glow */}
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />

            {/* Wind Lines */}
            <span className="wind-line wind-1" />
            <span className="wind-line wind-2" />
            <span className="wind-line wind-3" />
            <span className="wind-line wind-4" />

            <div className="absolute inset-0 flex items-center justify-center">

                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 420 180"
                    fill="none"
                >

                    <path
                        d="M-120 45
                           C -40 45, -20 20, 40 20
                           S 120 70, 190 45
                           S 280 20, 360 40
                           S 460 70, 560 45"
                        className="wind-path wind-path-1"
                    />

                    <path
                        d="M-160 90
                           C -80 90, -20 60, 60 80
                           S 180 120, 260 90
                           S 340 60, 430 90
                           S 520 120, 620 80"
                        className="wind-path wind-path-2"
                    />

                    <path
                        d="M-120 135
                           C -20 135, 20 100, 120 120
                           S 240 160, 330 130
                           S 420 100, 520 130"
                        className="wind-path wind-path-3"
                    />

                </svg>

            </div>

        </div>

    );

}