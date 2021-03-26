import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments.js';

const defaultCart = {
  products: {},
};

export default function Home() {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Yummy Cupcakes Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Yummy Cupcakes Shop</h1>

        <p className={styles.description}>
          The best cupcakes in the universe! Yay! 🙌
        </p>

        <p className={styles.description}>
          <strong>Items:</strong> 2
          <br />
          <strong>Total Costs:</strong> ${subTotal}
          <br />
          <button className={styles.button_primary} onClick={checkout}>
            Check Out
          </button>
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, description, price, image } = product;

            return (
              <li key={id} className={styles.card}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{description}</p>
                <button
                  className={styles.button_secondary}
                  onClick={() => {
                    addToCart({
                      id,
                    });
                  }}
                >
                  Add To Cart
                </button>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
