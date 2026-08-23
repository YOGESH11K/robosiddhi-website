"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CYAN = "#2de2ff";
const VIOLET = "#7c6cff";

function Robot() {
  const group = useRef<THREE.Group>(null);
  const eyeL = useRef<THREE.Mesh>(null);
  const eyeR = useRef<THREE.Mesh>(null);
  const antenna = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);
  const orbit = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += 0.0045;
      group.current.rotation.z = Math.sin(t * 0.6) * 0.035;
      group.current.position.y = Math.sin(t * 0.9) * 0.09;
    }
    const pulse = 1 + Math.sin(t * 2.4) * 0.12;
    eyeL.current?.scale.setScalar(pulse);
    eyeR.current?.scale.setScalar(pulse);
    if (antenna.current) {
      antenna.current.position.y = 2.02 + Math.sin(t * 1.8) * 0.05;
      antenna.current.rotation.y = t * 1.2;
    }
    if (halo.current) halo.current.rotation.z = t * 0.35;
    if (orbit.current) orbit.current.rotation.y = -t * 0.55;
    if (core.current) {
      const s = 1 + Math.sin(t * 3) * 0.15;
      core.current.scale.set(s, s, 1);
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      {/* skull */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[1.7, 1.25, 1.25]} />
        <meshStandardMaterial color="#101a30" metalness={0.65} roughness={0.3} />
      </mesh>
      {/* faceplate */}
      <mesh position={[0, 0.95, 0.64]}>
        <boxGeometry args={[1.42, 0.88, 0.08]} />
        <meshStandardMaterial color="#060b18" metalness={0.4} roughness={0.55} />
      </mesh>
      {/* eyes */}
      <mesh ref={eyeL} position={[-0.36, 1.06, 0.7]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={3} toneMapped={false} />
      </mesh>
      <mesh ref={eyeR} position={[0.36, 1.06, 0.7]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={3} toneMapped={false} />
      </mesh>
      {/* mouth bar */}
      <mesh position={[0, 0.72, 0.7]}>
        <boxGeometry args={[0.52, 0.07, 0.04]} />
        <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={2} toneMapped={false} />
      </mesh>
      {/* ears */}
      <mesh position={[-0.93, 0.95, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.17, 0.17, 0.14, 24]} />
        <meshStandardMaterial color={CYAN} metalness={0.7} roughness={0.25} emissive={CYAN} emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0.93, 0.95, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.17, 0.17, 0.14, 24]} />
        <meshStandardMaterial color={CYAN} metalness={0.7} roughness={0.25} emissive={CYAN} emissiveIntensity={0.35} />
      </mesh>
      {/* antenna */}
      <mesh position={[0.42, 1.78, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.44, 10]} />
        <meshStandardMaterial color="#22314f" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh ref={antenna} position={[0.42, 2.02, 0]}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={3} toneMapped={false} />
      </mesh>
      {/* neck + collar */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.19, 0.24, 0.34, 20]} />
        <meshStandardMaterial color="#16233d" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.62, 0.11, 18, 48]} />
        <meshStandardMaterial color="#131f38" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* chest */}
      <mesh position={[0, -0.78, 0]}>
        <boxGeometry args={[1.55, 0.62, 0.9]} />
        <meshStandardMaterial color="#0d1730" metalness={0.6} roughness={0.32} />
      </mesh>
      <mesh ref={core} position={[0, -0.76, 0.47]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.05, 26]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={2.6} toneMapped={false} />
      </mesh>
      {/* halo ring behind head */}
      <mesh ref={halo} position={[0, 0.95, -0.75]} rotation={[0.45, 0, 0.2]}>
        <torusGeometry args={[1.15, 0.014, 10, 80]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.4} />
      </mesh>
      {/* orbiting satellites */}
      <group ref={orbit}>
        <mesh position={[2.15, 0.4, -0.4]}>
          <boxGeometry args={[0.14, 0.14, 0.14]} />
          <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={1.6} toneMapped={false} />
        </mesh>
        <mesh position={[-2.05, -0.5, 0.5]} rotation={[0.5, 0.3, 0]}>
          <boxGeometry args={[0.11, 0.11, 0.11]} />
          <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.6} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function Particles({ count, spread, color, opacity }: { count: number; spread: [number, number, number]; color: string; opacity: number }) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    // Deterministic PRNG so render stays pure (seeded LCG)
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * spread[0];
      positions[i * 3 + 1] = (rand() - 0.5) * spread[1];
      positions[i * 3 + 2] = (rand() - 0.5) * spread[2] - 1;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count, spread]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.03;
      points.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.04;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Rig() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(({ camera }, delta) => {
    const damp = 1 - Math.pow(0.0015, delta);
    camera.position.x += (mouse.current.x * 0.45 - camera.position.x) * damp;
    camera.position.y += (0.55 - mouse.current.y * 0.3 - camera.position.y) * damp;
    camera.lookAt(0, 0.15, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.55, 6.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#cfe6ff" />
      <pointLight position={[-4, 1.5, 2]} intensity={22} distance={12} color={CYAN} />
      <pointLight position={[4, -1, -2]} intensity={18} distance={12} color={VIOLET} />

      <Robot />
      <Particles count={70} spread={[11, 6.5, 6]} color={CYAN} opacity={0.65} />
      <Particles count={40} spread={[9, 5.5, 5]} color={VIOLET} opacity={0.5} />
      <Rig />
    </Canvas>
  );
}
