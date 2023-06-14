import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className='w-screen bg-white flex justify-between'>
            <div className='relative h-24 w-72'>
                <Image
                    src="https://res.cloudinary.com/personal-cloud-rohaanmd/image/upload/v1650731198/logo_d2gaks.jpg"
                    alt="Logo"
                    fill
                />
            </div>

            <div className='flex flex-col items-center justify-center mr-6 text-xl'>
                <p>
                    Visit our {" "}
                    <a className='font-bold' href="http://imsec.ac.in/" target="_blank">
                        website.
                    </a>
                </p>
                <p>

                    <a className='font-bold' href="http://imsec.ac.in/about/contact-us" target="_blank">
                        Contact us
                    </a>
                </p>
            </div>
        </header>
    )
}

export default Header