import { EventBody } from '@/typings'
import Image from 'next/image';
import React from 'react'
import Buttons from './Buttons';

type Props = {
  event: EventBody;
};

function EventCard({ event }: Props) {
  return (
    <div className='bg-gray-300 shadow-lg rounded-lg'>
      <div className='bg-gray-200 flex justify-between items-center px-5 py-4 rounded-lg'>
        <div className='flex flex-col'>
          <p className='font-bold text-xl text-gray-500'>{event.date}</p>
          <h3 className='font-extrabold text-xl mr-2 whitespace-pre-wrap'>{event.eventName}</h3>
          <div className='flex items-center space-x-2'>
            <div className="h-0 w-0 border-t-[10px] border-l-[17px] border-b-[10px] 
border-solid border-t-transparent border-b-transparent border-l-[#d16a6a]"></div>
            <p className='text-lg font-semibold'>{event.venue}</p>
          </div>
        </div>
        <div className='relative h-28 w-28 rounded-full overflow-hidden bg-black px-14'>
          <Image className='object-cover' fill src={event.img} alt='Logo' />
        </div>
      </div>
      <div className='px-5 py-4 h-48 rounded-lg'>
        <p className='line-clamp-6'>{event.description}</p>
      </div>
      <div className='flex justify-center'>
        <hr className='w-72 bg-slate-400' />
      </div>
      <Buttons eventId={event.eventId} contact={event.contact} />
    </div>
  )
}

export default EventCard