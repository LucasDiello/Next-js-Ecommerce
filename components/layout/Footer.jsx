import { Github, Linkedin } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex w-full border-2 bg-gray-200 h-32 p-10 items-center justify-between'>
        <p className='text-sm flex flex-col'>© 2023 - Lucas Tech 
            <span className='text-xs'>
                Projeto desenvolvido com intuito de estudo e <br /> prática de desenvolvimento web. <br /> Utilizando gateway de pagamento.
            </span>
            </p>
        <div className='flex '>
            <a href="https://www.linkedin.com/in/lucasDiello/"  target="_blank" rel="noopener noreferrer">
                <Linkedin/>
            </a>
            <a href="https://www.github.com/lucasDiello" target="_blank" rel="noopener noreferrer">
            <Github />
            </a>
        </div>
    </footer>
    )
}
