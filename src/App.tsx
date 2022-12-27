import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
export default function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}
