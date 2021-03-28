import Head from 'next/head';
import styles from '../styles/Cart.module.css';

import Table from '../components/Table';
import IconShoppingBag from '../components/IconShoppingBag';
import { useCart } from '../hooks/use-cart';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name',
  },
  {
    columnId: 'quantity',
    Header: 'Quantity',
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item',
  },
  {
    columnId: 'total',
    Header: 'Item Total',
  },
];

export default function Cart() {
  const data = [
    {
      id: 'my-product',
      title: 'My Cool Product',
      quantity: 1,
      pricePerUnit: 10.0,
      total: 10.0,
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Bag – Yummy Cupcakes Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <IconShoppingBag size='48' />
          Shopping Bag
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          <button className={styles.button}>Check Out</button>
        </p>
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
