"use client";

import dynamic from "next/dynamic";

const PlainsScene = dynamic(() => import("./PlainsScene"), {
  ssr: false,
});

export default function SceneLoader() {
  return <PlainsScene />;
}
