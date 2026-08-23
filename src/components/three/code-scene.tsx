"use client";

import { ObjectCanvas } from "./object-canvas";
import { CodeBlocks } from "./lab-objects";

export default function CodeScene() {
  return (
    <ObjectCanvas cameraZ={6}>
      <CodeBlocks />
    </ObjectCanvas>
  );
}
