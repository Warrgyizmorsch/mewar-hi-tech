"use client";

import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useExperience } from "./ExperienceManager";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

const CameraControls = () => {
  const { activeHotspot } = useExperience();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  const targetPosition = useRef(new THREE.Vector3());
  const cameraTarget = useRef(new THREE.Vector3(10, 5, 10));

  useEffect(() => {
    if (activeHotspot) {
      targetPosition.current.set(...activeHotspot.position);
      cameraTarget.current.set(...activeHotspot.cameraTarget);
    } else {
      targetPosition.current.set(0, 10, 0); // Default center focus (higher up due to scale)
      cameraTarget.current.set(30, 20, 40); // Default camera view (much further back)
    }
  }, [activeHotspot]);

  useFrame(() => {
    if (controlsRef.current) {
      // Smoothly move the focus point (target)
      controlsRef.current.target.lerp(targetPosition.current, 0.05);
      controlsRef.current.update();
      
      // Smoothly move the camera itself
      camera.position.lerp(cameraTarget.current, 0.05);
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      maxPolarAngle={Math.PI / 2 - 0.05} // Don't go below floor
      minDistance={10}
      maxDistance={150}
      makeDefault
    />
  );
};

export default CameraControls;





