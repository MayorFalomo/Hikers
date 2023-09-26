import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { LevelStyled } from './Level.styled'

type Props = {}

const Level = (props: Props) => {
    return (
      <LevelStyled>
      <section>
        <div className='container' >
          <p className='started' ><span> </span> GET STARTED </p>
          <h2>What level of hiker are you? </h2>
          <p> Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
            <p className='readMore' style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />} </p>
            <span className='number' >01 </span>
          </div>
                <img src="./01.png" alt="img" />
            </section>
            </LevelStyled>
  )
}

export default Level