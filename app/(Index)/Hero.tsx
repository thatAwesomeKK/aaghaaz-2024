import React from 'react'
import { Merriweather } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const tilt = Merriweather({ subsets: ['latin'], weight: ["900"] })

function Hero() {
    return (
        <div className='flex md:flex-row flex-col justify-evenly items-center w-screen mt-2 mb-7'>
            <div className='relative h-52 w-52'>
                <Image src="/assets/birdlogo.png" alt='birdlogo' fill />
            </div>
            <div>
                <h1 className={`${tilt.className} text-center text-7xl font-bold text-black tracking-wide pt-10`}>AAGHAAZ 2K23</h1>
                <p className={`${tilt.className} font-bold text-3xl text-black text-center`}>Mega Tech Fusion</p>
                <div className="flex items-center justify-center h-16 relative">
                    <hr className="absolute w-[30vw] bg-gray-200" />
                    <p className="absolute px-3 text-3xl font-bold bg-[#2864b8] text-white">A MANAGEMENT FEST</p>
                </div>
                <p className="-mt-4 text-lg font-bold text-white text-center"> By Department of MBA & MCA</p>
                    <Link className='flex justify-center animate-pulse font-extrabold text-2xl text-yellow-400 mb-4' href="https://rb.gy/on77s" target='_blank'>Register Here!</Link>
            </div>
            <div className='relative h-28 w-28 md:h-52 md:w-52'>
                <Image className='object-cover' src="/assets/logo.png" alt='logo' fill />
            </div>
        </div>
    )
}

export default Hero