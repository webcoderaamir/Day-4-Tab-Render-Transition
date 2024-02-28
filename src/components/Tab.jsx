import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';

const Tab = () => {

  let links = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
  ];  

  const location = useLocation();
  console.log(location);

  return (
    <header className='w-full fixed px-10 bottom-5 z-[99] flex items-center justify-center'>

        <div className='w-fit h-20 bg-[#222222] flex justify-between items-center px-2 rounded-lg gap-2 bg-opacity-75 backdrop-blur-2xl backdrop-filter'>

            <Link to="/" className='w-28 h-[80%] flex items-center justify-center bg-[#c00e28] text-white rounded-lg' >WC.</Link>

            <nav className='w-full h-[80%] flex items-center justify-center gap-10 bg-[#3e3e3e] text-white rounded-lg tracking-tight'>
                {links.map((link) => {
                    return (
                        <Link className={`relative ${link.href === location.pathname ? "font-semibold text-white" : ''}`} to={link.href} key={link.label}>
                            {link.href === location.pathname && (
                                <motion.span layoutId="underline" className='absolute h-[0.2rem] bottom-0 bg-[#c00e28] w-full rounded-full' />
                            )}
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

        </div>

    </header>

  )
}

export default Tab