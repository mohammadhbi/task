"use client"
import { useState } from "react";
import styles from "../styles/Sidebar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
const { logout } = useUser();
const router = useRouter();
const handleLogout = ()=>{
  logout();
  toast.success("Logged out successfully");
  router.push("/auth");
}
  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <h2 className={styles.logo}>MyDash</h2>
        <ul className={styles.menu}>
          <li className={styles.active}>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li><button onClick={handleLogout}>
            Logout</button></li>
            
        </ul>
      </nav>

      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
    </>
  );
}
