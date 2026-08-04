"use client";

import { useEffect, useRef } from "react";

export function SeismographCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        //canvas.width = 300;
        canvas.height = 100;

        let x = 0;
        let spikeFrames = 0;

        const draw = () => {

            /* ctx.fillStyle = "#071014";
            ctx.fillRect(0, 0, canvas.width, canvas.height); */
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // subtle grid
            //ctx.strokeStyle = "rgba(255,255,255,.04)";
            ctx.strokeStyle = "rgba(100,116,139,.08)";
            ctx.lineWidth = 1;

            for (let i = 0; i < canvas.width; i += 20) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }

            for (let i = 0; i < canvas.height; i += 20) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }

            ctx.strokeStyle = "#34d399";
            ctx.lineWidth = 1.5;
            ctx.beginPath();

            let lastY = canvas.height / 2;

            for (let i = 0; i < canvas.width; i++) {

                let y = canvas.height / 2;

                // small vibration
                y += Math.sin((i + x) * 0.35) * 1.2;

                if (spikeFrames > 0) {
                    const p = (i + x) % 70;

                    if (p < 6)
                        y -= p * 10;

                    else if (p < 12)
                        y += (p - 6) * 10;

                    else if (p < 18)
                        y -= (18 - p) * 6;
                }

                if (i === 0)
                    ctx.moveTo(i, y);

                else
                    ctx.lineTo(i, y);

                lastY = y;
            }

            ctx.stroke();

            // glowing scan line
            const scanX = (x * 2) % canvas.width;

            ctx.fillStyle = "rgba(52,211,153,.18)";
            ctx.fillRect(scanX, 0, 4, canvas.height);

            x++;

            if (Math.random() < 0.004 && spikeFrames === 0) {
                spikeFrames = 80;
            }

            if (spikeFrames > 0)
                spikeFrames--;

            requestAnimationFrame(draw);
        };

        draw();

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className=""
        />
    );
}