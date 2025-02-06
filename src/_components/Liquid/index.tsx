"use client";

import { useMemo, useRef } from "react";

import * as THREE from "three";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";

// @ts-expect-error "expect error"
import vertexShader from "!!raw-loader!./vertexShader.glsl";
// @ts-expect-error "expect error"
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";

const Liquid = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    // @ts-expect-error "expect error"
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    // @ts-expect-error "expect error"
    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      // @ts-expect-error "expect error"
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.5 : 0.1,
      0.02
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[1, 5]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Liquid;
