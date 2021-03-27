import styles from '../styles/Home.module.css';
import IconShoppingBag from '../components/IconShoppingBag.js';
import { useCart } from '../hooks/use-cart.js';

export default function Nav() {
  const { subTotal, checkout } = useCart();

  return (
    <header className={styles.topnav}>
      <div className={styles.topnav__wrap}>
        <button className={styles.cart__details} onClick={checkout}>
          <IconShoppingBag />
          &nbsp;&nbsp;${subTotal}
        </button>
      </div>
    </header>
  );
}
