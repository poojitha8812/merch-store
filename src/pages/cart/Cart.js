import styles from './styles.module.css';

function Cart() {
    return (
      <div className={styles.cart_body}>
        <div className={styles.login_box }>
        <h1 className={styles.box_header}>Cart</h1>
        <p>
        Cart is Empty
        </p>
        </div>
      </div>
    );
  }
  
  export default Cart;