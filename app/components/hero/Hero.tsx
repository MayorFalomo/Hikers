'use client'
import React, {useRef, useEffect} from 'react'
import styles from './Hero.module.css'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'
import { IoLogoInstagram} from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { useInView, motion } from 'framer-motion' 
import Picture from './bgImg.png'
import Image from 'next/image'
import { useScroll, useSpring, useTransform, MotionValue} from "framer-motion";

type Props = {}

const Hero = (props: Props) => {

  // const heroText = [
  //   "A HIKING GUIDE ",
  //   "Be Prepared For The Mountains And Beyond!"
  // ]
  
  const body = useRef(null)

    function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);


  const isInView = useInView(body, {margin: "-10%" })

  const animate = {
    initial: { y: "200%" },
    open: {
      y: "0%",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    }
  }
  
  return (
      <section  ref={body} >
      <div className={styles.sky} style={{backgroundImage: 'url(./bgImg.png)' }} >
        {/* <Image className={styles.image} style={{backgroundAttachment: 'fixed'}} src={Picture} layout='fill' objectFit='cover' alt='img' placeholder='blur' /> */}
          <nav className={styles.nav} >
            <h2>Hikers</h2>
            <ul>
                <li className={styles.hoverUnderlineAnimation } >Equipment </li>
                <li className={styles.hoverUnderlineAnimation } >About us </li>
                <li className={styles.hoverUnderlineAnimation } >Blog </li>
            </ul>
            <p> {<HiOutlineUserCircle fontSize='30px' />} Account </p>
            </nav>
        <div className={styles.overLay} > </div>
          <div ref={ref} className={styles.heroText} >
          <div className={styles.overflow} ><motion.p variants={animate} initial="initial" animate={isInView ? "open" : ""} className={styles.guide} > <span></span> A HIKING GUIDE </motion.p></div>
          <motion.h1  variants={animate} initial="initial" animate={isInView ? "open" : "" } className={styles.h1} >
            Be Prepared For The Mountains And Beyond!
          </motion.h1>
           <div className={styles.overflow} > <motion.p  variants={animate} initial="initial" animate={isInView ? "open" : "" } >Scroll down {<BsArrowDown fontSize='30px' />} </motion.p></div>
          </div>
        <div className={styles.socials} >
          <p>Follow us </p>
          <span> {<IoLogoInstagram fontSize='30px' cursor='pointer' />} </span>
          <span> {<FaXTwitter  fontSize='30px' cursor='pointer' />} </span>
        </div>
        </div>
        
      </section>
  )
}


export default Hero

