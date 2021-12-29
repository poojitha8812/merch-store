import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <ul>
      <Link to="/authentication"><li className={styles.head_header}>login/signup</li></Link>
        <Link to="/"><li className={styles.head_header}>AcS_sToRe</li></Link>
        <Link to="/cart"><li className={styles.head_header}>cart</li></Link>
       
      </ul>
    </header>
  );
}

export default Header;
