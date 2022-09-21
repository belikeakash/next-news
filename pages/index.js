import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>

      <Navbar/>
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Here You find every news </h3>
      </div>
    </div>
  )
}
