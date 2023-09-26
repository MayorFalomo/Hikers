'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Level from './components/level/Level'
import Gear from './components/gear/Gear'
import Timing from './components/timing/Timing'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.container} >
      {/* <Navbar /> */}
      <Hero />
      <Level />
      <Gear />
      <Timing />
      <Footer/>
      </div>
  )
}
