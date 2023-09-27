import React from 'react'
import styles from '../components/level/Level.module.css'
import Image from 'next/image'
type Props = {}

const Blur = ({ src, watch }: any) => {
    
  return (
          <div className={styles.imageContainer} >
              <Image className={styles.image} src={src} fill alt='img' placeholder='blur' />
          </div>
  )
}

export default Blur