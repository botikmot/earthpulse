"use client";

import { useDashboardActivity } from "@/hooks/useDashboardActivity";
import { getRelativeTime } from "@/lib/date";

export function LandingTimeline() {

    const activities = useDashboardActivity();

    return (
        <section
            id="timeline"
            className="
                relative
                overflow-hidden
                bg-[#07101c]
                py-28
                text-white
            "
        >
            <div className="mx-auto max-w-5xl px-5">

                {/* header */}

                <div className="mb-16 text-center">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-4
                            py-1.5
                            text-xs
                            font-medium
                            text-cyan-300
                        "
                    >
                        Mission Timeline
                    </span>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-bold
                        "
                    >
                        Recent Global Activity
                    </h2>

                    <p
                        className="
                            mt-4
                            text-slate-400
                        "
                    >
                        Stay informed with the latest
                        environmental events from around the world.
                    </p>

                </div>

                {/* timeline */}

                <div className="relative">

                    {/* center line */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-6
                            top-0
                            w-px
                            bg-white/10
                        "
                    />

                    <div className="space-y-5">

                        {activities.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        relative
                                        ml-14
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        p-5
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:border-white/20
                                        hover:bg-white/[0.05]
                                    "
                                >

                                    {/* timeline icon */}

                                    <div
                                        className="
                                            absolute
                                            -left-[52px]
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-[#071521]
                                        "
                                    >

                                        <div
                                            className={`
                                                absolute
                                                h-2
                                                w-2
                                                rounded-full
                                                ${item.glow}
                                            `}
                                        />

                                        <Icon
                                            className={`h-4 w-4 ${item.textColor}`}
                                        />

                                    </div>

                                    {/* content */}

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-2

                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                        "
                                    >

                                        <div>

                                            <h3 className="font-medium">
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    text-slate-400
                                                "
                                            >
                                                {item.description}
                                            </p>

                                        </div>

                                        <span
                                            className="
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            {getRelativeTime(item.time)}
                                        </span>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}