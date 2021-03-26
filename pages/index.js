import Head from 'next/head';
import styles from '../styles/Home.module.css';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments.js';

export default function Home() {
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
                  className={styles.button_primary}
                  onClick={() =>
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1,
                        },
                      ],
                    })
                  }
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
