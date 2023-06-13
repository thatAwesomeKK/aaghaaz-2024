import React from 'react'

function Hero() {
    return (
        <div className='py-10'>
            <div className='relative h-[9vh]'>
                <h1 className='absolute text-7xl font-bold left-1/2 transform -translate-x-[52%] text-gray-400 tracking-wide'>AAGHAAZ</h1>
                <h1 className='absolute text-7xl font-bold left-1/2 transform -translate-x-1/2 text-white z-10 tracking-wide'>AAGHAAZ</h1>
                <h1 className='absolute text-7xl font-bold left-1/2 transform -translate-x-[48%] text-red-400 tracking-wide'>AAGHAAZ</h1>
            </div>
            <div className="text-center">
                <p className='font-semibold text-3xl text-white'>2022</p>
                <div className="flex items-center justify-center h-16 w-[100vw] relative">
                    <hr className="absolute w-[30vw] bg-gray-200" />
                    <p className="absolute px-3 text-3xl font-bold bg-slate-500 text-white">A MANAGEMENT FEST</p>
                </div>
                <p className="-mt-4 text-lg font-bold text-white"> By Department of MCA & MBA</p>
            </div>
        </div>
    )
}

export default Hero