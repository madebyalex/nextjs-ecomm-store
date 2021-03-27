import { useState, createContext, useContext } from 'react';
import { initiateCheckout } from '../lib/payments.js';
import products from '../products.json';

const defaultCart = {
  products: {},
};

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    };
  });

  const roundTo = function (num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };

  const subTotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      const amount = accumulator + pricePerItem * quantity;
      return roundTo(amount, 2);
    },
    0
  );

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  console.log('subTotal', subTotal);

  function addToCart({ id } = {}) {
    updateCart((prev) => {
      let cartState = { ...prev };
      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1,
        };
      }

      return cartState;
    });
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      }),
    });
  }

  return {
    cart,
    updateCart,
    subTotal,
    totalItems,
    addToCart,
    checkout,
  };
}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
