"use client";

import { ObjectCanvas } from "./object-canvas";
import { RoboticArm } from "./lab-objects";

export default function RobotArmScene() {
  return (
    <ObjectCanvas cameraZ={6.4}>
      <RoboticArm />
    </ObjectCanvas>
  );
}
