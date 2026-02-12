"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WindmillProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}

const metalColor = "#8A8A8A";
const darkMetal = "#5C5C5C";

function ScaffoldLeg({
  start,
  end,
  radius = 0.03,
}: {
  start: [number, number, number];
  end: [number, number, number];
  radius?: number;
}) {
  const mid = useMemo(
    () =>
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2
      ),
    [start, end]
  );
  const dir = useMemo(
    () =>
      new THREE.Vector3(
        end[0] - start[0],
        end[1] - start[1],
        end[2] - start[2]
      ),
    [start, end]
  );
  const length = dir.length();
  const orientation = useMemo(() => {
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    return euler;
  }, [dir]);

  return (
    <mesh position={mid} rotation={orientation}>
      <cylinderGeometry args={[radius, radius, length, 4]} />
      <meshStandardMaterial color={metalColor} metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

function LatticeSection({
  y,
  height,
  bottomWidth,
  topWidth,
}: {
  y: number;
  height: number;
  bottomWidth: number;
  topWidth: number;
}) {
  const bw = bottomWidth / 2;
  const tw = topWidth / 2;
  const yTop = y + height;

  return (
    <group>
      {/* 4 main legs */}
      <ScaffoldLeg start={[-bw, y, -bw]} end={[-tw, yTop, -tw]} />
      <ScaffoldLeg start={[bw, y, -bw]} end={[tw, yTop, -tw]} />
      <ScaffoldLeg start={[-bw, y, bw]} end={[-tw, yTop, tw]} />
      <ScaffoldLeg start={[bw, y, bw]} end={[tw, yTop, tw]} />

      {/* X-braces on each face */}
      {/* Front face */}
      <ScaffoldLeg start={[-bw, y, -bw]} end={[tw, yTop, -tw]} radius={0.02} />
      <ScaffoldLeg start={[bw, y, -bw]} end={[-tw, yTop, -tw]} radius={0.02} />
      {/* Back face */}
      <ScaffoldLeg start={[-bw, y, bw]} end={[tw, yTop, tw]} radius={0.02} />
      <ScaffoldLeg start={[bw, y, bw]} end={[-tw, yTop, tw]} radius={0.02} />
      {/* Left face */}
      <ScaffoldLeg start={[-bw, y, -bw]} end={[-tw, yTop, tw]} radius={0.02} />
      <ScaffoldLeg start={[-bw, y, bw]} end={[-tw, yTop, -tw]} radius={0.02} />
      {/* Right face */}
      <ScaffoldLeg start={[bw, y, -bw]} end={[tw, yTop, tw]} radius={0.02} />
      <ScaffoldLeg start={[bw, y, bw]} end={[tw, yTop, -tw]} radius={0.02} />

      {/* Horizontal rings at top and bottom */}
      <ScaffoldLeg start={[-bw, y, -bw]} end={[bw, y, -bw]} radius={0.02} />
      <ScaffoldLeg start={[-bw, y, bw]} end={[bw, y, bw]} radius={0.02} />
      <ScaffoldLeg start={[-bw, y, -bw]} end={[-bw, y, bw]} radius={0.02} />
      <ScaffoldLeg start={[bw, y, -bw]} end={[bw, y, bw]} radius={0.02} />
    </group>
  );
}

function WindmillFan({ speed }: { speed: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= delta * speed;
    }
  });

  const bladeCount = 18;
  const blades = [];

  for (let i = 0; i < bladeCount; i++) {
    const angle = (i / bladeCount) * Math.PI * 2;
    blades.push(
      <group key={i} rotation={[0, 0, angle]}>
        {/* Thin blade */}
        <mesh position={[0, 0.7, 0.02]}>
          <boxGeometry args={[0.06, 1.0, 0.01]} />
          <meshStandardMaterial color={metalColor} metalness={0.5} roughness={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef} position={[0, 5.3, 0.25]}>
      {blades}
      {/* Center hub */}
      <mesh position={[0, 0, 0.03]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 12]} />
        <meshStandardMaterial color={darkMetal} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Outer ring */}
      <mesh position={[0, 0, 0.02]}>
        <torusGeometry args={[1.2, 0.03, 6, 24]} />
        <meshStandardMaterial color={metalColor} metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Tail() {
  return (
    <group position={[0, 5.2, 0]}>
      {/* Tail boom */}
      <ScaffoldLeg start={[0, 0, 0]} end={[0, 0.3, -1.5]} radius={0.025} />
      {/* Tail fin - triangle shape using two thin boxes */}
      <mesh position={[0, 0.5, -1.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.7, 0.5]} />
        <meshStandardMaterial color={darkMetal} metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function Windmill({
  position = [0, 0, 0],
  scale = 1,
  rotationSpeed = 0.8,
}: WindmillProps) {
  return (
    <group position={position} scale={scale}>
      {/* Lattice tower - 3 sections tapering upward */}
      <LatticeSection y={0} height={2} bottomWidth={1.2} topWidth={0.8} />
      <LatticeSection y={2} height={1.8} bottomWidth={0.8} topWidth={0.5} />
      <LatticeSection y={3.8} height={1.4} bottomWidth={0.5} topWidth={0.25} />

      {/* Platform at top */}
      <mesh position={[0, 5.15, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial color={darkMetal} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Fan wheel */}
      <WindmillFan speed={rotationSpeed} />

      {/* Tail vane */}
      <Tail />
    </group>
  );
}
