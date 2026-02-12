"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function Sky() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[100, 32, 32]} />
      <shaderMaterial
        side={THREE.BackSide}
        depthWrite={false}
        uniforms={{
          uTopColor: { value: new THREE.Color("#9CAF88") },
          uBottomColor: { value: new THREE.Color("#FAF8F5") },
        }}
        vertexShader={`
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uTopColor;
          uniform vec3 uBottomColor;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition).y;
            float t = smoothstep(-0.1, 0.6, h);
            gl_FragColor = vec4(mix(uBottomColor, uTopColor, t), 1.0);
          }
        `}
      />
    </mesh>
  );
}
