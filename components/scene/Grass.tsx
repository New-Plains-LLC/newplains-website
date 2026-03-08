"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GrassProps {
  count?: number;
  spread?: number;
}

export default function Grass({ count = 60000, spread = 40 }: GrassProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { geometry, offsets, scales, angles } = useMemo(() => {
    // Narrow triangle blade
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -0.04, 0, 0,
       0.04, 0, 0,
      -0.02, 0.6, 0,
       0.02, 0.6, 0,
       0.0,  1.0, 0,
    ]);
    const indices = [0, 1, 2, 1, 3, 2, 2, 3, 4];
    const uvs = new Float32Array([
      0, 0,
      1, 0,
      0.25, 0.6,
      0.75, 0.6,
      0.5, 1.0,
    ]);

    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const offs = new Float32Array(count);
    const scls = new Float32Array(count);
    const angs = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      offs[i] = Math.random();
      scls[i] = 0.5 + Math.random() * 0.8;
      angs[i] = Math.random() * Math.PI * 2;
    }

    return { geometry: geo, offsets: offs, scales: scls, angles: angs };
  }, [count]);

  // Set up instance matrices
  useMemo(() => {
    const dummy = new THREE.Object3D();
    const matrix = new THREE.Matrix4();

    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread * 2;
      const z = (Math.random() - 0.5) * spread * 2;

      dummy.position.set(x, 0, z);
      dummy.rotation.set(0, angles[i], 0);
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count, spread, angles, scales]);

  const shaderUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWindStrength: { value: 0.15 },
      uBaseColor: { value: new THREE.Color("#7A8B5C") },
      uTipColor: { value: new THREE.Color("#D4B87A") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }

    // Initialize instance matrices on first frame if needed
    if (meshRef.current && !meshRef.current.userData.initialized) {
      const dummy = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * spread * 2;
        const z = (Math.random() - 0.5) * spread * 2;
        dummy.position.set(x, 0, z);
        dummy.rotation.set(0, angles[i], 0);
        dummy.scale.setScalar(scales[i]);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.userData.initialized = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]} frustumCulled={false}>
      <shaderMaterial
        ref={materialRef}
        uniforms={shaderUniforms}
        vertexShader={`
          uniform float uTime;
          uniform float uWindStrength;

          varying vec2 vUv;
          varying float vHeight;

          float hash(float n) {
            return fract(sin(n) * 43758.5453123);
          }

          float noise(float x) {
            float i = floor(x);
            float f = fract(x);
            float a = hash(i);
            float b = hash(i + 1.0);
            return mix(a, b, f * f * (3.0 - 2.0 * f));
          }

          void main() {
            vUv = uv;
            vHeight = position.y;

            vec3 pos = position;

            // Wind — stronger at tips
            float instanceId = float(gl_InstanceID);
            float windPhase = uTime * 1.5 + instanceId * 0.1;
            float windNoise = noise(instanceId * 0.1 + uTime * 0.5);
            float windAmount = pos.y * pos.y * uWindStrength;

            pos.x += sin(windPhase) * windAmount * (0.5 + windNoise * 0.5);
            pos.z += cos(windPhase * 0.7) * windAmount * 0.3;

            vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 uBaseColor;
          uniform vec3 uTipColor;
          uniform float uTime;

          varying vec2 vUv;
          varying float vHeight;

          void main() {
            float t = smoothstep(0.0, 1.0, vHeight);
            vec3 color = mix(uBaseColor, uTipColor, t);
            float variation = sin(vUv.x * 20.0 + uTime * 0.2) * 0.03;
            color += variation;
            gl_FragColor = vec4(color, 1.0);
          }
        `}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}
