'use client'
import React from 'react'
import { HeroStyle } from './Hero.styled'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'
import { IoLogoInstagram} from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'

type Props = {}

const Hero = (props: Props) => {
  return (
    <HeroStyle>
      <section>
        
        <div className='sky' style={{ backgroundImage: 'url(./bgImg.png)' }} >
          <nav  >
            <h2>Hikers</h2>
            <ul>
                <li className='hover-underline-animation ' >Equipment </li>
                <li className='hover-underline-animation ' >About us </li>
                <li className='hover-underline-animation ' >Blog </li>
            </ul>
            <p> {<HiOutlineUserCircle fontSize='30px' />} Account </p>
            </nav>
          <div className='overLay' > </div>
          <div className='heroText' >
          <p> <span></span> A HIKING GUIDE </p>
          <h1> Be Prepared For The Mountains And Beyond! </h1>
            <span>Scroll down {<BsArrowDown fontSize='30px' />} </span>
          </div>
          <div className='socials' >
          <p>Follow us </p>
          <span> {<IoLogoInstagram fontSize='30px' cursor='pointer' />} </span>
          <span> {<FaXTwitter  fontSize='30px' cursor='pointer' />} </span>
        </div>
        </div>
        
      </section>
      </HeroStyle>
  )
}

export default Hero