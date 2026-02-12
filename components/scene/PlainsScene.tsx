"use client";

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sky from "./Sky";
import Ground from "./Ground";
import Grass from "./Grass";
import Windmill from "./Windmill";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("webgl2")
    );
  } catch {
    return false;
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  const grassCount = isMobile ? 8000 : 25000;

  return (
    <>
      <Sky />
      <Ground />
      <Grass count={grassCount} spread={isMobile ? 25 : 40} />
      <Windmill position={[-14, 0, -10]} scale={1.1} rotationSpeed={0.6} />
      <Windmill position={[15, 0, -12]} scale={1} rotationSpeed={0.9} />
      <Windmill position={[-20, 0, -22]} scale={0.7} rotationSpeed={0.7} />
      <Windmill position={[22, 0, -18]} scale={0.6} rotationSpeed={0.5} />
    </>
  );
}

export default function PlainsScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setHasWebGL(detectWebGL());
  }, []);

  if (!hasWebGL) {
    return (
      <div className="css-fallback">
        <div className="css-fallback-grass" />
      </div>
    );
  }

  return (
    <div className="scene-container">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60, near: 0.1, far: 200 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#FAF8F5", 20, 80]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 15, 5]}
          intensity={1.2}
          color="#D4B87A"
        />
        <directionalLight
          position={[-5, 8, -3]}
          intensity={0.4}
          color="#9CAF88"
        />
        <Suspense fallback={null}>
          <SceneContent isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
