import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));
