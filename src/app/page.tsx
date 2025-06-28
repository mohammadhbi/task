import React from 'react'
import styles from './components/styles/homepage.module.scss'
import Link from 'next/link'
export default function page() {
  return (
    <div>
   <main className={styles.container}> 
     <h1 className={styles.title}> welcome to the validation App</h1> 
      <Link href="/auth">
        <button className={styles.Button}>Go to the Login Page</button>
      </Link>
   </main> 
    </div>
  )
}
