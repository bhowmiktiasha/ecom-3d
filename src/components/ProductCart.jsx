import { useCartStore } from "../store/cartStore";
import ProductViewer from "./ProductViewer";

export default function ProductCart({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}
    
    >
      <h3>{product.name}</h3>
      <ProductViewer model={product.model} colors={product.colors} scale={product.scale} />
      
      <p style={{paddingTop: "30px" , display: "flex"}}>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
