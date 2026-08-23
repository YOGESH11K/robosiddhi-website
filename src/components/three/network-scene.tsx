"use client";

import { ObjectCanvas } from "./object-canvas";
import { NetworkPulse } from "./lab-objects";

export default function NetworkScene() {
  return (
    <ObjectCanvas cameraZ={6}>
      <NetworkPulse />
    </ObjectCanvas>
  );
}
