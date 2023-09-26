import React from 'react'
import { FooterStyled } from './Footer.styled'

type Props = {}

const Footer = (props: Props) => {
    return (
      <FooterStyled>
      <footer>
          <div className='footer-container' >
              <div className='subContainer' >
              <h1>Hikers </h1>
              <p>Get out there & discover your next slope, mountain & destination! </p>
              </div>
              <span style={{color: '#667277' }} > Copyright 2023 Hikers Inc. Terms & Privacy </span>
          </div>
          <div className='subFooter' >
          <ul>
              <h3 style={{color: '#FBD784'}} >More on The Blog </h3>
              <li>About Hikers </li>
              <li>Contributors & Writers </li>
              <li>Write For us </li>
              <li>Contact Us </li>
              <li>Privacy Policy </li>
          </ul>
          <ul>
              <h3 style={{color: '#FBD784'}} >More on Hikers </h3>
              <li> The Team </li>
              <li>Jobs </li>
              <li>Press </li>
              </ul>
              </div>
            </footer>
            </FooterStyled>
  )
}

export default Footer