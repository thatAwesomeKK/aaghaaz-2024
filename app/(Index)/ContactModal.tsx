import { Coordinator } from '@/typings'
import React from 'react'

type Props = {
    contact: Coordinator;
}

function ContactModal({ contact }: Props) {
    return (
        <>
            <div className='absolute h-72 w-64 bg-gray-400 -top-72 -right-6 flex flex-col space-y-4 justify-evenly p-6 rounded-md'>
                <div>
                    <p className='text-base font-bold'>Student Coordinator:</p>
                    {contact.s_coord.map((s, i) => (
                        <div className='flex gap-2 items-center whitespace-nowrap'>
                            <p className='text-sm font-medium'>{s.name}</p>
                            <p>-</p>
                            <p className='text-sm'>{s.number}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p className='text-base font-bold'>Teacher Coordinator:</p>
                    {contact.t_coord.map((t, i) => (
                        <p className='text-sm font-medium'>{t}</p>
                    ))}
                </div>
            </div>
            <div className="absolute top-0 right-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[20px] border-t-gray-400 border-r-[10px] border-r-transparent"></div>
        </>
    )
}

export default ContactModal