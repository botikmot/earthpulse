import { useEffect, useRef } from "react";

type UseAutoRefreshOptions = {
    enabled?: boolean;
    interval: number;
    callback: () => void | Promise<void>;
};

export function useAutoRefresh({
    enabled = true,
    interval,
    callback,
}: UseAutoRefreshOptions) {

    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {

        if (!enabled) return;

        const id = window.setInterval(() => {

            void callbackRef.current();

        }, interval);

        return () => clearInterval(id);

    }, [enabled, interval]);

}