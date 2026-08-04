export function SeismographAnimation() {
    return (
        <div className="flex items-center justify-center">
            <svg
                width="320"
                height="90"
                viewBox="0 0 320 90"
                className="overflow-visible"
            >
                <defs>
                    <linearGradient
                        id="seismicGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>

                <path
                    className="seismograph-line"
                    d="
                        M0 45
                        L45 45
                        L60 45
                        L70 20
                        L80 70
                        L95 45
                        L120 45
                        L145 45
                        L160 30
                        L170 60
                        L180 25
                        L195 45
                        L230 45
                        L250 45
                        L260 15
                        L270 70
                        L285 45
                        L320 45
                    "
                    fill="none"
                    stroke="url(#seismicGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}