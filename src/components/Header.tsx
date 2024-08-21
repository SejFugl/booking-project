import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.rsrv}>Rsrv</div>
        <div className={styles.navigationItems}>
          <div className={styles.navItem}>Funktioner</div>
          <div className={styles.navItem1}>Priser</div>
          <div className={styles.navItem1}>Brancher</div>
          <div className={styles.navItem1}>Om</div>
          <div className={styles.navItem1}>Mere</div>
          <div className={styles.registerButton}>
            <div className={styles.label}>Kom i gang</div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalRule} />
    </div>
  );
};

export default Header;
