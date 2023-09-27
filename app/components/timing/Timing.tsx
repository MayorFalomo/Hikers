import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styles from './timing.module.css'
import Watch from './watch.png'
import Blur from '../Blur'
import Image from 'next/image'
type Props = {}

const Timing = (props: Props) => {
    return (
        <section className={styles.section} >
                <div className={styles.container} >
          <p className={styles.started}><span> </span> WHERE YOU GO IS THE KEY </p>
          <h2>Understanding Your Map & Timing </h2>
          <p> To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. </p>
            <p className={styles.readMore}style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />} </p>
            <span className={styles.number} >03 </span>
        </div>
        <div className={styles.imageContainer} >
          <Image className={styles.image} src={Watch} fill alt='img' placeholder='blur' />
        </div>
                {/* <img src="./watch.png" alt="img" /> */}
            </section>
  )
}

export default Timing