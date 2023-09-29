'use client'
import React, {useRef, useState, useEffect} from 'react'
import styles from './Hero.module.css'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'
import { IoLogoInstagram} from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { useInView, motion, usePresence } from 'framer-motion' 
import Picture from './bgImg.png'
import Image from 'next/image'
import {CgMenuMotion} from 'react-icons/cg'
import {MdOutlineClose} from 'react-icons/md'
import {  useAnimate, stagger} from "framer-motion";

type Props = {}

const Hero = (props: Props) => {

  const list = ['Equipment', 'About Us', 'Blog' ]
  const [isOpen, setIsOpen] = useState(false)

  function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          // Animation for when the nav opens
          // [
          //   "nav",
          //   { opacity: 0, transform: "translateX(0%)" },
          //   { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          // ],
          // Animation for when the li opens
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          // Animation for when the li closes
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          // Animation for when the nav closes
          // [
          //   "nav",
          //   { opacity: 0, transform: "translateX(-100%)" },
          //   { at: "-0.1" },
          // ],
        ];

    animate([...menuAnimations]

      // [
      // ["path.top", {}, { at: "<" }],
      // ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      // [
      //   "path.bottom",
      //   {
      //     d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
      //   },
      //   { at: "<" },
      // ],
      // ...menuAnimations.flat()
      // ]
    );
  }, [isOpen]);

  return scope;
}

const scope = useMenuAnimation(isOpen);

    // return (
    //   <ul className={styles.text}>
    //     {list.map((item: any, index: any) => (
    //       <li key={index} className={styles.hoverUnderlineAnimation }  >
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // )

//   function useMenuAnimation(isOpen: boolean) {
//     const [scope, animate] = useAnimate();

//     useEffect(() => {

//     const menuAnimations = isOpen
//       ? [
//         [
//             //Animation for when the nav opens
//           "nav",
//             {opacity: 0},
//             { transform: "translateX(0%)" },
//             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
//         ],
//         //Animation for when the li opens
//           [
//             "li",
//             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
//             { delay: stagger(0.05), at: "-0.1" }
//           ]
//         ]
//       : [
//           [
//             "li",
//             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
//             { delay: stagger(0.05, { from: "last" }), at: "<" }
//           ],
//           ["nav",{opacity: 0}, { transform: "translateX(-100%)" }, { at: "-0.1" }]
//         ];

//     animate([
//       [
//         "path.top",{ }, { at: "<" } ],
//       ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
//       ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
//         { at: "<" }
//       ],
//       ...menuAnimations
//     ]);
       
//   }, [isOpen]);

//   return scope;
// }
//   const scope = useMenuAnimation(isOpen);
  
  
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
       <nav ref={scope} className={isOpen ? styles.navActive : styles.navFlex} >
            <ul  className={styles.listItem} >
                <li className={styles.hoverUnderlineAnimation } >Equipment </li>
                <li className={styles.hoverUnderlineAnimation } >About us </li>
              <li className={styles.hoverUnderlineAnimation} >Blog </li>
              </ul>
        <li> {<HiOutlineUserCircle fontSize='30px' />} Account </li>
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

