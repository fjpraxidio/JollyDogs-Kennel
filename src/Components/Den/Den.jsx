import React from 'react'
import './Den.css'
import gallery_1 from '../../assets/p1.jpg'
import gallery_2 from '../../assets/p2.jpg'
import gallery_3 from '../../assets/p3.jpg'
import gallery_4 from '../../assets/p4.jpg'
import gallery_5 from '../../assets/p5.jpg'
import gallery_6 from '../../assets/p6.jpg'
import gallery_7 from '../../assets/p7.jpg'
import gallery_8 from '../../assets/p8.jpg'
import white_arrow from '../../assets/white-arrow.png'


const Den = () => {
  return (
    <div className='den'>
        <div className='gallery'>
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
          <img src={gallery_4} alt="" />
          <img src={gallery_5} alt="" />
          <img src={gallery_6} alt="" />
          <img src={gallery_7} alt="" />
          <img src={gallery_8} alt="" />

        </div>
        <button className='btn dark-btn'>See more <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Den
