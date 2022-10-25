import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.wrapper}>
      Logo
      <nav className={styles.navigation}>
        <Link to="/" className={styles.menuLink}>
          Home
        </Link>
        <Link to="/contact" className={styles.menuLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
