import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styles from './timing.module.css'
import Watch from './watch.png'
import Image from 'next/image'
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useInView} from "framer-motion";

type Props = {}

const Timing = (props: Props) => {

  
  function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

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
        <section className={styles.section} >
                <div className={styles.container} >
          <motion.p variants={animate} initial="initial" animate={isInView ? "open" : "" } className={styles.started}><span> </span> WHERE YOU GO IS THE KEY </motion.p>
          <motion.h2 variants={animate} initial="initial" animate={isInView ? "open" : "" } >Understanding Your Map & Timing </motion.h2>
          <motion.p variants={animate} initial="initial" animate={isInView ? "open" : "" } > To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. </motion.p>
            <p className={styles.readMore}style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />} </p>
            <motion.span style={{y}} className={styles.number} >03 </motion.span>
        </div>
        <div ref={body} className={styles.imageContainer} >
          <Image className={styles.image} src={Watch} fill alt='img' placeholder='blur' />
        </div>
                {/* <img src="./watch.png" alt="img" /> */}
            </section>
  )
}

export default Timing