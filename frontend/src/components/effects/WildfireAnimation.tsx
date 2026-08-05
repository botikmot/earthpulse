"use client";

import Image from "next/image";

export function WildfireAnimation() {
    return (
        <div className="relative flex h-25 w-full items-end justify-center overflow-hidden">

            {/* Smoke */}
            <div className="absolute bottom-16 left-1/2 h-20 w-20 -translate-x-1/2">
                <span className="absolute left-2 h-10 w-10 animate-smoke rounded-full bg-slate-300/30 blur-xl" />
                <span
                    className="absolute left-8 top-4 h-8 w-8 animate-smoke rounded-full bg-slate-400/20 blur-lg"
                    style={{ animationDelay: "1s" }}
                />
                <span
                    className="absolute left-0 top-8 h-12 w-12 animate-smoke rounded-full bg-slate-300/20 blur-2xl"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            {/* Glow */}
            <div className="absolute bottom-5 h-20 w-20 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />

            {/* Main Flame */}
            <Image 
                src="/images/animation/fire-flame.gif"
                alt="Fire"
                className="absolute right-5 -bottom-2 text-slate-300"
                width={50}
                height={34}
            />

            <Image 
                src="/images/animation/fire-flame.gif"
                alt="Fire"
                className="absolute right-0 -bottom-2 text-slate-300"
                width={50}
                height={34}
            />
            

            <Image 
                src="/images/animation/fire-flame.gif"
                alt="Fire"
                className="absolute left-0 -bottom-2 text-slate-300"
                width={50}
                height={34}
            />

             <Image 
                src="/images/animation/fire-flame.gif"
                alt="Cloud"
                className="absolute left-20 -bottom-2 text-slate-300"
                width={60}
                height={34}
            />
            
            
            {/* Embers */}
            {Array.from({ length: 10 }).map((_, i) => (
                <span
                    key={i}
                    className="absolute bottom-8 h-1.5 w-1.5 rounded-full bg-amber-300 animate-ember"
                    style={{
                        left: `${20 + i * 6}%`,
                        animationDelay: `${i * 0.35}s`,
                    }}
                />
            ))}
        </div>
    );
}