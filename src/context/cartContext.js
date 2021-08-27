import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (id, nombre, Precio, qty) => {
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      cart[existingIndex] = {
        ...cart[existingIndex],
        qty: cart[existingIndex].qty,
      };
    } else {
      setCart([
        ...cart,
        {
          id: id,
          nombre: nombre,
          precio: Precio,
          qty: qty,
        },
      ]);
    }
  };
  //  prueba

  const actualizarCart = (newCart) => {
    const sortedItems = newCart.sort((a, b) =>
      a.item.id > b.item.id ? 1 : -1
    );
    setCart(sortedItems);
    sessionStorage.setItem("Carrito", JSON.stringify(sortedItems));
  };

  const eliminarItem = (id) => {
    const filterItems = cart.filter((item) => item.id !== id);
    actualizarCart(filterItems);
  };

  const calcularTotal = () =>
    cart.reduce((current, item) => current + item.precio * item.qty, 0);

  const contadorItems = () => cart.length;
  return (
    <CartContext.Provider
      value={{
        addProduct,
        cart,
        setCart,
        actualizarCart,
        eliminarItem,
        calcularTotal,
        contadorItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
