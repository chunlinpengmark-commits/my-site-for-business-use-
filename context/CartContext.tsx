"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  increaseQty: (slug: string) => void;
  decreaseQty: (slug: string) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.slug === item.slug);

      if (existing) {
        return prev.map((p) =>
          p.slug === item.slug
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      }

      return [...prev, { ...item, quantity }];
    });

    setIsOpen(true);
  };

  const increaseQty = (slug: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (slug: string) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.slug === slug
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}