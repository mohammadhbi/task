import React from 'react'
import styles from './components/styles/homepage.module.scss'
import Link from 'next/link'
export default function page() {
  return (
    <div>
   <main className={styles.container}> 
     <h1 className={styles.title}>به سیستم احراز هویت خوش آمدید</h1> 
      <Link href="/auth">
        <button className={styles.Button}>برو به صفحه ورود</button>
      </Link>
   </main> 
    </div>
  )
}
