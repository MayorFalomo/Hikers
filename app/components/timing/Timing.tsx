import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { TimingStyled } from './Timing.styled'

type Props = {}

const Timing = (props: Props) => {
    return (
      <TimingStyled>
      <section>
          <div className='container' >
          <p className='started' ><span> </span> WHERE YOU GO IS THE KEY </p>
          <h2>Understanding Your Map & Timing </h2>
          <p> To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. </p>
            <p className='readMore' style={{ color: '#fbd784', cursor: 'pointer' }} > read more {<BsArrowRight />} </p>
            <span className='number' >03 </span>
          </div>
                <img src="./watch.png" alt="img" />
            </section>
            </TimingStyled>
  )
}

export default Timing