import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { useFBX } from "@react-three/drei";

export default function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  // // // Subscribe this component to the render-loop, rotate the mesh every frame
  // // useFrame((state, delta) => {
  // //   mesh.current.rotation.x += delta;
  // // });
  // const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  // Return view, these are regular three.js elements expressed in JSX
  const fbx = useFBX("SambaDancing.fbx");
  return (
    <>
      <OrbitControls />
      <primitive object={fbx} scale={0.05} />
    </>
  );
}
