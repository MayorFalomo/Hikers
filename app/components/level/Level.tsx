import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styles from './Level.module.css'
import Blur from '../Blur'
import Picture from './01.png'
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue, useInView} from "framer-motion";


type Props = {}

const Level = (props: Props) => {

  function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
}
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -100);

   const body = useRef(null)

  const isInView = useInView(body, {once: true,  margin: "-10%" })

  const animate = {
    initial: { y: "150%" },
    open: {
      y: "0%",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] }
    }
  }

  //  const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

    return (
      <section ref={body} className={styles.section} >
        <div className={styles.container} >
                <p className={styles.started} ><span> </span> GET STARTED </p>
          <motion.h2  variants={animate} initial="initial" animate={isInView ? "open" : "" } >What level of hiker are you? </motion.h2>
          <motion.p  variants={animate} initial="initial" animate={isInView ? "open" : "" } > Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </motion.p>
            <p className={styles.readMore} style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />} </p>
                <motion.span style={{y}} className={styles.number} >01 </motion.span>
        </div>
        <Blur  ref={ref} src={Picture} />
                {/* <img src="./01.png" alt="img" /> */}
            </section>
  )
}

export default Level