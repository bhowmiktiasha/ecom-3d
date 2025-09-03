import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div style={{ padding: 16 }}>
      <h2>🛒 Cart</h2>
      {cart.length === 0 && <p>No items yet</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "8px", margin: "8px 0" , alignItems:"center" }}>
          <span>{item.name}</span><span>${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}
