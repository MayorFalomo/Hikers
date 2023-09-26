import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { GearStyled } from './Gear.styled'

type Props = {}

const Gear = (props: Props) => {
    return (
      <GearStyled>
      <section>
          <img src='./gear.png' alt="img" />
           <div className='container' >
          <p className='started' ><span> </span> HIKING ESSENTIALS </p>
          <h2>Picking the right Hiking Gear! </h2>
              <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                  Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
            <p className='readMore' style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />}</p>
            <span className='number' >02 </span>
          </div>
            </section>
            </GearStyled>
  )
}

export default Gear