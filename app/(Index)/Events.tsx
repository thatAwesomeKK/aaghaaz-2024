import React from 'react'
import { data } from '../../utility/data'
import EventCard from './EventCard'

function Events() {
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center max-w-[90%]'>
            {(data).map((event, i) => (
                <EventCard event={event} key={event.eventId} />
            ))}
        </div>
    )
}

export default Events