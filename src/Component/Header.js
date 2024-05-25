import React from "react";
import styles from "./Header.module.css";
import { TfiSearch } from "react-icons/tfi";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://storage.googleapis.com/crio-content-container-assets/ME_QTIFY_MODULE_ME_QTIFY_MODULE_NAVBAR_1699468663_image_4.png"
          alt="Logo"
        />
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search a album of your choice" />
        <TfiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.feedback}>Giv feedback</div>
    </nav>
  );
};

export default Header;
