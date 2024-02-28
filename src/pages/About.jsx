import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  
  return (
    <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, ease: "easeInOut"}} className='w-full h-screen relative'>

    <h1 className='text-8xl font-bold text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tight'>WC ABOUT<span className='text-[#c00e28]'>.</span></h1>

    </motion.div>
  )
}

export default About