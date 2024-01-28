'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ContactModal from './ContactModal'
import { Alkatra } from 'next/font/google'
import { Coordinator } from '../../typings'
const alkatra = Alkatra({ subsets: ['latin'], weight: ["400"] })

type Props = {
  eventId: number
  contact: Coordinator
  rLink: string
}

function Buttons({ eventId, contact, rLink }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const checkIfClikedOutside = (e: any) => {
      // @ts-ignore
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', checkIfClikedOutside)
    return () => {
      document.removeEventListener('click', checkIfClikedOutside)
    }
  }, [isOpen])


  return (
    // @ts-ignore
    <div ref={ref} className='bg-gray-300 flex justify-evenly rounded-b-lg'>
      {/* <Link href={rLink} target='_blank' className={`${alkatra.className} hover:bg-blue-400 flex-1 py-4 tracking-widest text-center rounded-bl-lg`}>Register</Link> */}
      <Link href={`/event/${eventId}`} className={`${alkatra.className} hover:bg-blue-400 flex-1 py-4 tracking-widest text-center rounded-bl-lg`}>Know More</Link>
      <div className='relative flex-1'>
        <button onClick={() => setIsOpen(!isOpen)} className={`${alkatra.className} hover:bg-blue-400 tracking-widest py-4 w-full rounded-br-lg`}>Contacts</button>
        {isOpen && <ContactModal contact={contact} />}
      </div>
    </div>
  )
}

export default Buttons