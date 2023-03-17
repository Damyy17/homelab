import React from 'react'
import "../scss/Containers-scss/MainBunner.scss"
import Lottie from 'lottie-react';
import bunner from '../Assets/JSON/Baner.json'

function MainBunner() {
  return (
    <section className='Bunner'>
      <div className="bunner-content">
        <p>
        Bring <b>science</b> <br /> home with <br /> <b>HomeLab</b>
        </p>
        <button
         onClick={()=>{
              window.location.pathname = "MoreAbout" }
      }>
            More About
        </button>
      </div>
        <Lottie
        className='lottie-bunner'
        autoPlay={false}
        speed={0.5}
        loop={false}
        animationData={bunner}
        />
    </section>
  )
}

export default MainBunner