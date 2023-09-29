'use client'
import React, {useRef, useState, useEffect} from 'react'
import styles from './Hero.module.css'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'
import { IoLogoInstagram} from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { useInView, motion, usePresence, AnimatePresence, Variants, useAnimation } from 'framer-motion' 
import Picture from './bgImg.png'
import Image from 'next/image'
import {CgMenuMotion} from 'react-icons/cg'
import {MdOutlineClose} from 'react-icons/md'
import { useAnimate, stagger } from "framer-motion";
import {HiOutlineUserCircle as Icon} from 'react-icons/hi'

type Props = {}


const Hero = (props: Props) => {

  const list = ['Equipment', 'About Us', 'Blog', [<Icon />, 'Account'] ]
  const [isOpen, setIsOpen] = useState(false)

  const DisplayMenu = ({ list }: any) => {

    
      
     const listItemVariants = {
    hidden: { opacity: 0, x: '100%', filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      x: '0%',
       filter: 'blur(0px)',
      transition: {
         type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2, // Adjust the delay as needed
      },
    },
  };

     const listContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.09,
        // staggerDirection: -1,
      },
    },
    };
    
    return (
      <motion.ul
        variants={listContainerVariants}
        initial="initial"
        animate={isOpen ? 'visible' : 'hidden'}
        exit='hidden'
        className={styles.menu}>
        {list.map((item:any, index:any) => (
          <motion.li
            key={index}
            variants={listItemVariants }
            className={styles.hoverUnderlineAnimation}
          initial="hidden"
            animate="visible"
            exit="visible"
          >{Array.isArray(item) ? item : <span>{item}</span>} </motion.li>
        ))}
      </motion.ul>
    )
  }
  


  const body = useRef(null)

  const isInView = useInView(body, {margin: "-10%" })

  const animated = {
    initial: { y: "200%" },
    open: {
      y: "0%",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    }
  }


  return (
    <div className={styles.section} ref={body} >
       <nav className={isOpen ? styles.navActive : styles.navFlex} >
        <ul className={styles.listItem} >
          <li>{<DisplayMenu list={list} />} </li>
        </ul>         
      </nav>
      <p className={styles.hamburger} >
          {isOpen ?
            <span onClick={() => setIsOpen(false)} className={styles.close} >{< MdOutlineClose fontSize={40} cursor='pointer' />} </span> :
            <span onClick={() => setIsOpen(true)} className={styles.open} >{< CgMenuMotion fontSize={40} cursor='pointer' />} </span>
        }</p>
      <div className={styles.sky} style={{backgroundImage: 'url(./bgImg.png)' }} >
        {/* <Image className={styles.image} style={{backgroundAttachment: 'fixed'}} src={Picture} layout='fill' objectFit='cover' alt='img' placeholder='blur' /> */}
          <div className={styles.nav} >
          <h2>Hikers</h2>
          <div className={styles.desktopNav} >
            <ul>
                <li className={styles.hoverUnderlineAnimation } >Equipment </li>
                <li className={styles.hoverUnderlineAnimation } >About us </li>
              <li className={styles.hoverUnderlineAnimation} >Blog </li>
              </ul>
            <p> {<HiOutlineUserCircle fontSize='30px' />} Account </p>
          </div>
          {/* <ul ref={scoped} className={isOpen ? styles.navActive : styles.navFlex} >
              <li>{<DisplayText list={list}  />} </li>
            <p> {<HiOutlineUserCircle fontSize='30px' />} Account </p>
            </ul> */}
         
          
        
            </div>
        <div className={styles.overLay} > </div>
          <div className={styles.heroText} >
          <div className={styles.overflow} ><motion.p variants={animated} initial="initial" animate={isInView ? "open" : ""} className={styles.guide} > <span></span> A HIKING GUIDE </motion.p></div>
          <motion.h1  variants={animated} initial="initial" animate={isInView ? "open" : "" } className={styles.h1} >
            Be Prepared For The Mountains And Beyond!
          </motion.h1>
           <div className={styles.overflow} > <motion.p  variants={animated} initial="initial" animate={isInView ? "open" : "" } >Scroll down {<BsArrowDown fontSize='30px' />} </motion.p></div>
          </div>
        <div className={styles.socials} >
          <p>Follow us </p>
          <span> {<IoLogoInstagram fontSize='30px' cursor='pointer' />} </span>
          <span> {<FaXTwitter  fontSize='30px' cursor='pointer' />} </span>
        </div>
        </div>
        
      </div>
  )
}


export default Hero

