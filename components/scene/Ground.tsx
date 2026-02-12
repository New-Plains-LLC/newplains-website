"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function Ground() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.1, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 200]} />
      <shaderMaterial
        uniforms={{
          uColor1: { value: new THREE.Color("#C4A265") },
          uColor2: { value: new THREE.Color("#7A8B5C") },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec2 vUv;
          void main() {
            float dist = length(vUv - 0.5);
            float t = smoothstep(0.0, 0.5, dist);
            gl_FragColor = vec4(mix(uColor1, uColor2, t * 0.3), 1.0);
          }
        `}
      />
    </mesh>
  );
}
