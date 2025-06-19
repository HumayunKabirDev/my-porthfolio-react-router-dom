import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typedtext = () => {
  return (
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I Am Humayun',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'I Am Front-End-Desiner',
        2000,
        'I Am Devoloper',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '18px', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default Typedtext





