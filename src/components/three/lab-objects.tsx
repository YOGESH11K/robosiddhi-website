"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CYAN = "#2de2ff";
const VIOLET = "#7c6cff";
const AMBER = "#ffb547";

function useBob(speed = 1, amp = 0.08) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * speed) * amp;
  });
  return ref;
}

/* ── Robotic arm ──────────────────────────────────────────────── */

export function RoboticArm() {
  const base = useBob(0.8);
  const shoulder = useRef<THREE.Group>(null);
  const elbow = useRef<THREE.Group>(null);
  const wrist = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (shoulder.current) shoulder.current.rotation.z = Math.sin(t * 0.7) * 0.35 + 0.15;
    if (elbow.current) elbow.current.rotation.z = -Math.sin(t * 0.7 + 0.9) * 0.55;
    if (wrist.current) wrist.current.rotation.y = t * 1.4;
  });

  return (
    <group ref={base} position={[0, -1.2, 0]}>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.85, 1.05, 0.3, 32]} />
        <meshStandardMaterial color="#101a30" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* shoulder joint */}
      <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.5, 24]} />
        <meshStandardMaterial color="#22314f" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* upper arm */}
      <group ref={shoulder} position={[0, 0.55, 0]}>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.34, 1.6, 0.3]} />
          <meshStandardMaterial color="#16233d" metalness={0.65} roughness={0.3} />
        </mesh>
        {/* elbow */}
        <group ref={elbow} position={[0, 1.55, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.36, 20]} />
            <meshStandardMaterial color="#22314f" metalness={0.7} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[0.26, 1.25, 0.24]} />
            <meshStandardMaterial color="#131f38" metalness={0.65} roughness={0.3} />
          </mesh>
          {/* gripper */}
          <group position={[0, 1.3, 0]}>
            <mesh position={[0, 0.12, 0]}>
              <boxGeometry args={[0.42, 0.16, 0.3]} />
              <meshStandardMaterial color="#22314f" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh ref={wrist} position={[0, 0.3, 0]}>
              <torusGeometry args={[0.14, 0.05, 12, 32]} />
              <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.4} toneMapped={false} />
            </mesh>
            {[-1, 1].map((s) => (
              <mesh key={s} position={[s * 0.17, -0.06, 0]} rotation={[0, 0, s * -0.35]}>
                <boxGeometry args={[0.07, 0.3, 0.18]} />
                <meshStandardMaterial color="#2b3c60" metalness={0.7} roughness={0.3} />
              </mesh>
            ))}
          </group>
        </group>
      </group>
      {/* status LED */}
      <mesh position={[0.55, 0.32, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={3} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ── Quadcopter drone ─────────────────────────────────────────── */

export function DroneObject() {
  const group = useRef<THREE.Group>(null);
  const rotors = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 1.1) * 0.18;
      group.current.rotation.z = Math.sin(t * 0.8) * 0.06;
      group.current.rotation.x = Math.cos(t * 0.7) * 0.05;
      group.current.rotation.y += delta * 0.25;
    }
    if (rotors.current) rotors.current.rotation.y += delta * 14;
  });

  const arms: [number, number][] = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

  return (
    <group ref={group}>
      {/* body */}
      <mesh>
        <boxGeometry args={[1.1, 0.26, 1.1]} />
        <meshStandardMaterial color="#101a30" metalness={0.65} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.2, -0.2]}>
        <boxGeometry args={[0.5, 0.24, 0.6]} />
        <meshStandardMaterial color="#16233d" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* camera eye */}
      <mesh position={[0, 0.18, 0.14]}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={2.6} toneMapped={false} />
      </mesh>
      {/* arms + rotor rings */}
      {arms.map(([x, z], i) => (
        <group key={i} position={[x * 0.85, 0, z * 0.85]}>
          <mesh rotation={[0, Math.PI / 4 * x * z, 0]}>
            <boxGeometry args={[1.0, 0.08, 0.12]} />
            <meshStandardMaterial color="#22314f" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[x * 0.35, 0.02, z * 0.35]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.34, 0.03, 10, 40]} />
            <meshBasicMaterial color={i % 2 ? VIOLET : CYAN} transparent opacity={0.55} />
          </mesh>
        </group>
      ))}
      {/* spinning blades (single rotating group per pair is fine visually) */}
      <group ref={rotors}>
        {arms.map(([x, z], i) => (
          <mesh key={i} position={[x * 1.2, 0.1, z * 1.2]} scale={[1, 0.12, 1]}>
            <boxGeometry args={[0.62, 0.04, 0.07]} />
            <meshStandardMaterial color="#8fa3c8" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ── Floating code blocks ─────────────────────────────────────── */

interface CodeChip {
  pos: [number, number, number];
  size: [number, number, number];
  color: string;
  speed: number;
  offset: number;
}

export function CodeBlocks() {
  const chips = useMemo<CodeChip[]>(
    () => [
      { pos: [-1.6, 0.9, 0], size: [1.7, 0.42, 0.16], color: CYAN, speed: 1.1, offset: 0 },
      { pos: [1.3, 0.35, -0.4], size: [1.3, 0.38, 0.16], color: VIOLET, speed: 0.9, offset: 1.4 },
      { pos: [-0.9, -0.5, 0.5], size: [1.1, 0.36, 0.16], color: AMBER, speed: 1.25, offset: 2.8 },
      { pos: [1.7, -1.1, 0.2], size: [0.9, 0.32, 0.16], color: CYAN, speed: 0.8, offset: 4.1 },
      { pos: [0.2, 1.4, -0.8], size: [0.8, 0.3, 0.16], color: VIOLET, speed: 1.0, offset: 5.2 },
    ],
    [],
  );
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current?.children.forEach((child, i) => {
      const chip = chips[i];
      child.position.y = chip.pos[1] + Math.sin(t * chip.speed + chip.offset) * 0.14;
      child.rotation.y = Math.sin(t * 0.4 + chip.offset) * 0.22;
    });
    if (group.current) group.current.rotation.y = Math.sin(t * 0.18) * 0.12;
  });

  return (
    <group ref={group}>
      {chips.map((chip, i) => (
        <group key={i} position={chip.pos}>
          <mesh>
            <boxGeometry args={chip.size} />
            <meshStandardMaterial
              color="#0b1226"
              metalness={0.5}
              roughness={0.4}
              emissive={chip.color}
              emissiveIntensity={0.08}
            />
          </mesh>
          {/* glowing edge bar like a code line */}
          <mesh position={[chip.size[0] / 2 - chip.size[0] * 0.22, 0, chip.size[2] / 2 + 0.005]}>
            <boxGeometry args={[chip.size[0] * 0.4, 0.06, 0.01]} />
            <meshStandardMaterial color={chip.color} emissive={chip.color} emissiveIntensity={1.8} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ── STEM orbit: four element spheres around a core ───────────── */

const STEM_COLORS = [CYAN, AMBER, VIOLET, "#35e39b"];

export function StemOrbit() {
  const orbit = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (orbit.current) orbit.current.rotation.y += delta * 0.5;
    if (core.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.08;
      core.current.scale.setScalar(s);
    }
  });

  const nodes = useMemo(
    () =>
      [0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return {
          position: [Math.cos(angle) * 1.7, Math.sin(angle * 2) * 0.35, Math.sin(angle) * 1.7] as [number, number, number],
          color: STEM_COLORS[i],
        };
      }),
    [],
  );

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color="#101a30" metalness={0.7} roughness={0.25} flatShading />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.7, 0.012, 8, 80]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.35} />
      </mesh>
      <group ref={orbit}>
        {nodes.map((node, i) => (
          <group key={i} position={node.position}>
            <mesh>
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={1.1}
                toneMapped={false}
                flatShading
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/* ── AI/IoT network pulse: core + orbiting data packets ───────── */

export function NetworkPulse() {
  const packets = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    if (packets.current) packets.current.rotation.y = t * 0.8;
    if (core.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.1;
      core.current.scale.setScalar(s);
    }
    if (ring.current) ring.current.rotation.z = t * 0.4;
  });

  const packetData = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        angle: (i / 6) * Math.PI * 2,
        radius: 1.6 + (i % 3) * 0.35,
        height: ((i % 3) - 1) * 0.5,
      })),
    [],
  );

  return (
    <group>
      <mesh ref={core}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#101a30" metalness={0.6} roughness={0.3} emissive={VIOLET} emissiveIntensity={0.25} />
      </mesh>
      <mesh ref={ring} rotation={[1.1, 0.4, 0]}>
        <torusGeometry args={[1.05, 0.02, 8, 64]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.5} />
      </mesh>
      {[2.1, 2.6].map((r, i) => (
        <mesh key={r} rotation={[i ? -0.9 : 1.3, i ? 0.5 : -0.3, 0]}>
          <torusGeometry args={[r, 0.01, 8, 72]} />
          <meshBasicMaterial color={CYAN} transparent opacity={0.28} />
        </mesh>
      ))}
      <group ref={packets}>
        {packetData.map((p, i) => (
          <mesh key={i} position={[Math.cos(p.angle) * p.radius, p.height, Math.sin(p.angle) * p.radius]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color={i % 2 ? CYAN : "#35e39b"}
              emissive={i % 2 ? CYAN : "#35e39b"}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
