import { Github, Linkedin } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex  w-full border-2 bg-gray-200 h-32 p-10 items-center justify-between '>
        <p className='text-sm flex flex-col'>© 2023 - Lucas Tech 
            <span className='text-xs'>
                Project developed with the purpose of study and <br /> web development practice. <br /> Using payment gateway.
            </span>
            </p>
        <div className='flex mt-10 '>
            <a href="https://www.linkedin.com/in/lucas-diello-5b5440265/"  target="_blank" rel="noopener noreferrer">
                <Linkedin/>
            </a>
            <a href="https://www.github.com/lucasDiello" target="_blank" rel="noopener noreferrer">
            <Github />
            </a>
        </div>
    </footer>
    )
}
