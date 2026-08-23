"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Camera gently follows the pointer. Shared rig for all object scenes. */
export function PointerRig({ lookAt = [0, 0, 0] as [number, number, number] }) {
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
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * damp;
    camera.position.y += (-mouse.current.y * 0.3 - camera.position.y) * damp;
    camera.lookAt(new THREE.Vector3(...lookAt));
  });

  return null;
}

interface ObjectCanvasProps {
  children: React.ReactNode;
  cameraZ?: number;
  fov?: number;
  className?: string;
}

/**
 * Minimal lighting canvas used by technology pages.
 * Mount behind `useShowCanvas()` — callers handle fallbacks.
 */
export function ObjectCanvas({
  children,
  cameraZ = 6,
  fov = 40,
  className,
}: ObjectCanvasProps) {
  return (
    <div className={className} data-cursor="explore">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, cameraZ], fov }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        aria-hidden
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color="#cfe6ff" />
        <pointLight position={[-4, 1.5, 2]} intensity={20} distance={12} color="#2de2ff" />
        <pointLight position={[4, -1, -2]} intensity={16} distance={12} color="#7c6cff" />
        {children}
        <PointerRig />
      </Canvas>
    </div>
  );
}
