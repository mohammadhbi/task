
import { useState } from "react";
import styles from "../styles/Sidebar.module.scss";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <h2 className={styles.logo}>MyDash</h2>
        <ul className={styles.menu}>
          <li className={styles.active}>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>

      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
    </>
  );
}
