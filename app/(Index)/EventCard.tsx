import { EventBody } from '@/typings'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  event: EventBody;
};

function EventCard({ event }: Props) {
  return (
    <div className='bg-gray-300 shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-gray-200 flex justify-between items-center px-5 py-4'>
        <div className='flex flex-col'>
          <p className='font-bold text-xl text-gray-500'>{event.date}</p>
          <h3 className='font-extrabold text-xl'>{event.eventName}</h3>
          <div className='flex items-center space-x-2'>
            <div className="h-0 w-0 border-t-[10px] border-l-[17px] border-b-[10px] 
border-solid border-t-transparent border-b-transparent border-l-[#d16a6a]"></div>
            <p className='text-lg font-semibold'>{event.venue}</p>
          </div>
        </div>
        <div className='relative h-28 w-28 rounded-full overflow-hidden bg-black'>
          <Image className='' fill src={event.img} alt='Logo' /> 
        </div>
      </div>
      <div className='px-5 py-4 h-48'>
        <p className='line-clamp-6'>{event.description}</p>
      </div>
      <div className='bg-gray-300 flex justify-evenly'>
        <button className='hover:bg-blue-400 flex-1 py-4'>Register Now</button>
        <Link href={`/event/${event.eventId}`} className='hover:bg-blue-400 flex-1 py-4 text-center'>Know More</Link>
        <button className='hover:bg-blue-400 flex-1 py-4'>Contacts</button>
      </div>
    </div>
  )
}

export default EventCard