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
      </nav>
    </header>
  );
};

export default Header;
