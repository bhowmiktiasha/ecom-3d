import { products } from "./data/products";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";
import "./App.css"; 

export default function App() {
  return (
//     <>
//       <div>
//         <h2 style={{ textAlign: "center" }}>
//           3D Graphics with Three.js and React Three Fiber(R3F)
//         </h2>
//       </div>
//       <div style={{ display: "flex", gap: "24px", padding: "20px" }}>
//         <div
//           style={{
//             flex: 2,
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr 1fr",
//             gap: 20,
//           }}
//         >
//           {products.map((p) => (
//             <ProductCart key={p.id} product={p} />
//           ))}
//         </div>
//         <div style={{ flex: 1, borderLeft: "1px solid #ddd" }}>
//           <Cart />
//         </div>
//       </div>
//     </>
//   );
// }


<>
<div>
  <h2 className="textsize">
    3D Graphics with Three.js and React Three Fiber (R3F)
  </h2>
</div>

<div className="layout">
  {/* Products Grid */}
  <div className="products">
    {products.map((p) => (
      <ProductCart key={p.id} product={p} />
    ))}
  </div>

  {/* Cart */}
  <div className="cart">
    <Cart />
  </div>
</div>
</>
);
}

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// function App() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="hotpink" />
//       </mesh>
//       <OrbitControls />
//     </Canvas>
//   );
// }

// export default App;
