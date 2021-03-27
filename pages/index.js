// import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import products from '../products.json';
import { useCart } from '../hooks/use-cart.js';

export default function Home() {
  const { subTotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Yummy Cupcakes Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fresh & Yummy</h1>

        <p className={styles.description}>
          The best cupcakes in the universe! Yay! 🙌
        </p>

        <div className={styles.section__cart}>
          <p>
            <strong>Items:</strong>{' '}
            <span className={styles.cart__qty}>{totalItems}</span>
          </p>
          <p>
            <strong>Total Costs:</strong>{' '}
            <span className={styles.cart__value}>${subTotal}</span>
          </p>
          <p>
            <button className={styles.button_primary} onClick={checkout}>
              Check Out
            </button>
          </p>
        </div>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, description, price, image } = product;

            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <div className={styles.image__wrap}>
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>{description}</p>
                  </a>
                </Link>
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
