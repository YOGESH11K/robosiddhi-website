"use client";

import { ObjectCanvas } from "./object-canvas";
import { StemOrbit } from "./lab-objects";

export default function StemScene() {
  return (
    <ObjectCanvas cameraZ={5.6}>
      <StemOrbit />
    </ObjectCanvas>
  );
}
