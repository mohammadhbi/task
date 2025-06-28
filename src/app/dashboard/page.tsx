"use client";
import React from "react";
import styles from "../components/styles/dashboardpage.module.scss";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
export default function page() {
  const { user } = useUser();
  if (!user) return <p>loading...</p>;
  // const username = localStorage.getItem("username");
  return (
    <main className={styles.main}>
      hello this is dashboard page
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* <Image width={100} alt={user.name} height={100} src={user.picture}/> */}
      {user.picture ? (
        <Image width={100} height={100} alt={user.name} src={user.picture} />
      ) : (
        <p>No profile image</p>
      )}
    </main>
  );
}
