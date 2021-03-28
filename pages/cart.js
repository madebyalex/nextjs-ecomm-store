import Head from 'next/head';
import styles from '../styles/Cart.module.css';

import { useCart } from '../hooks/use-cart';

import Table from '../components/Table';
import IconShoppingBag from '../components/IconShoppingBag';
import products from '../products.json';

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
  const { cartItems, checkout } = useCart();

  const data = cartItems.map((item) => {
    const product = products.find(({ id }) => id === item.id);

    return {
      id: item.id,
      title: product.title,
      quantity: item.quantity,
      pricePerUnit: item.pricePerItem,
      total: item.quantity * item.pricePerItem,
    };
  });

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
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
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
