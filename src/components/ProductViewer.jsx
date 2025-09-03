import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

// import * as THREE from "three";

// function Model({ url , color }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1/1.5} />;
// }

function Model({ url, color, scale }) {
  const { scene } = useGLTF(url);

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={scale} position={[0, -0.5, 0]} />;
}

export default function ProductViewer({ model, colors, scale }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        borderRadius: 8,
      }}
    >
      <Canvas camera={{ position: [0, 1, 3], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model url={model} color={selectedColor} scale={scale} />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>

      {/* Color Selector */}

      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedColor(c)}
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: c,
              border: selectedColor === c ? "2px solid #000" : "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
