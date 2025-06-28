"use client";
import React from "react";
import styles from "../components/styles/dashboardpage.module.scss";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import Sidebar from "../components/UI/Sidebar";
export default function page() {
  const { user } = useUser();
  if (!user) return <p>loading...</p>;
  return (
    <main className={styles.main}>
      <Sidebar/> 
      <div className={styles.card}>
      {user.picture ? (
        <Image
          className={styles.avatar}
          src={user.picture}
          alt={user.name}
          width={120}
          height={120}
          priority
        />
      ) : (
        <div className={styles.noAvatar}>No Image</div>
      )}
      <h1 className={styles.name}>{user.name}</h1>
      <p className={styles.email}>{user.email}</p>
    </div>

    </main>
  );
}
