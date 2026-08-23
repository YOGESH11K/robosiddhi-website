"use client";

import { ObjectCanvas } from "./object-canvas";
import { DroneObject } from "./lab-objects";

export default function DroneScene() {
  return (
    <ObjectCanvas cameraZ={5.8}>
      <DroneObject />
    </ObjectCanvas>
  );
}
