"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Liquid from "src/_components/Liquid";

import styles from "./index.module.css";

const CanvasBackground = () => {
  return (
    <div className={styles.canvas}>
      <Canvas
        className="cursor-pointer"
        frameloop="always"
        camera={{ position: [-5, 0, 0], fov: 45, near: 0.1, far: 200 }}
      >
        <Liquid />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
