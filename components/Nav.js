import styles from '../styles/Home.module.css';
import IconShoppingBag from '../components/IconShoppingBag.js';
import { useCart } from '../hooks/use-cart.js';

export default function Nav() {
  const { subTotal, totalItems } = useCart();

  return (
    <header className={styles.topnav}>
      <div className={styles.topnav__wrap}>
        <span className={styles.cart__details}>
          <IconShoppingBag />
          &nbsp;&nbsp;${subTotal}
        </span>
      </div>
    </header>
  );
}
