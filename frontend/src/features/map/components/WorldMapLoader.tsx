"use client";

import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/Loading";

const WorldMap = dynamic(
  () => import("./WorldMap"),
  {
    ssr: false,
    loading: () => (
        <Loading text="Loading interactive map..." />
    )
  }
);

export default function WorldMapLoader() {
  return <WorldMap />;
}