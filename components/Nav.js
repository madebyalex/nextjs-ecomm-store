import Link from 'next/link';
import styles from '../styles/Home.module.css';
import IconShoppingBag from '../components/IconShoppingBag.js';
import { useCart } from '../hooks/use-cart.js';

export default function Nav() {
  const { subTotal, checkout } = useCart();

  return (
    <header className={styles.topnav}>
      <div className={styles.topnav__wrap}>
        <Link href='/'>
          <a className={styles.header__logo}>Yummy Cupcakes Shop</a>
        </Link>
        <Link href='/cart'>
          <a className={styles.cart__details}>
            <IconShoppingBag />
            &nbsp;&nbsp;${subTotal}
          </a>
        </Link>
      </div>
    </header>
  );
}
