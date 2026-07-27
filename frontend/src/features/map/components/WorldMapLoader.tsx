"use client";

import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/Loading";
import type { Earthquake } from "@/types/earthquake";

type WorldMapLoaderProps = {
    markers: Earthquake[];
    className?: string;
};

const WorldMap = dynamic(
  () => import("./WorldMap"),
  {
    ssr: false,
    loading: () => (
        <Loading text="Loading interactive map..." />
    )
  }
);

export default function WorldMapLoader({
  markers,
  className
}: WorldMapLoaderProps) {
  return <WorldMap markers={markers} className={className} />;
}