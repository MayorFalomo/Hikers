import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

export default function Home() {
  return (
    <div className={styles.container} >
      {/* <Navbar /> */}
      <Hero/>
   </div>
  )
}
