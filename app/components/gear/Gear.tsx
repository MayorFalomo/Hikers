import React, { useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styles from './Gear.module.css'
import Picture from './gear.png'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform, MotionValue, useInView} from "framer-motion";

type Props = {}

const Gear = (props: Props) => {

   function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -50);

    const body = useRef(null)

  const isInView = useInView(body, {once: true,  margin: "-10%" })

  const animate = {
    initial: { y: "150%" },
    open: {
      y: "0%",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] }
    }
  }

    return (
      <section ref={body} className={styles.section} >
        {/* <img src='./gear.png' alt="img" /> */}
         <div ref={ref} className={styles.imageContainer} >
          <Image className={styles.image} src={Picture} fill alt='img' placeholder='blur' />
        </div>
           <div className={styles.container} >
          <motion.p variants={animate} initial="initial" animate={isInView ? "open" : "" } className={styles.started} ><span> </span> HIKING ESSENTIALS </motion.p>
          <motion.h2 variants={animate} initial="initial" animate={isInView ? "open" : "" } >Picking the right Hiking Gear! </motion.h2>
              <motion.p variants={animate} initial="initial" animate={isInView ? "open" : "" } >The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                  Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </motion.p>
          <p className={styles.readMore} style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />}</p>
          <motion.span style={{y}} className={styles.number} >02 </motion.span>
          </div>
            </section>
  )
}

export default Gear