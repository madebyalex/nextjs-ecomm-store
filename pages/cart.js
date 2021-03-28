import Head from 'next/head';
import styles from '../styles/Cart.module.css';

import { useCart } from '../hooks/use-cart';

import Table from '../components/Table';
import IconShoppingBag from '../components/IconShoppingBag';
import InputNumber from '../components/InputNumber';
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
  const { cartItems, updateItem, checkout } = useCart();

  // console.log(<InputNumber value='2' />);

  const data = cartItems.map((item) => {
    const product = products.find(({ id }) => id === item.id);

    const Quantity = () => {
      function handleOnSubmit(e) {
        e.preventDefault();

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find((input) => input.name === 'quantity')
          ?.value;

        updateItem({
          id: item.id,
          quantity: quantity && parseInt(quantity),
        });
      }

      return (
        <form className={styles.quantity__form} onSubmit={handleOnSubmit}>
          <InputNumber
            type='number'
            name='quantity'
            className={styles.quantity__input}
            min='0'
            max='10'
            defaultValue={item.quantity}
            value={item.quantity}
          />
          <button>Update</button>
        </form>
      );
    };

    return {
      id: item.id,
      title: product.title,
      quantity: <Quantity />,
      pricePerUnit: item.pricePerItem,
      // total: item.quantity * item.pricePerItem,
      total: Math.round(item.quantity * item.pricePerItem * 100) / 100,
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
