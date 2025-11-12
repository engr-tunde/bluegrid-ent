import React from 'react'

const WorkWithUs = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row pt-20 lg:pt-60 gap-8 lg:gap-0'>
        <div className='w-[100%] lg:w-[50%] lg:h-[400px] px-5'>
            <img src="/public/images/office.jpg" alt="" className='w-full h-full'/>
        </div>

        <div className='w-[100%] lg:w-[30%] flex flex-col px-5 gap-10'>
            <h1 className='font-bold text-3xl lg:text-5xl'>WORK WITH US</h1>
            <span className='text-lg'>With offices spanning four continents, Create Music Group is constantly looking for ways to increase reach, expand into new markets, and deliver our clients opportunities from around the globe.</span>
            <span className='text-lg'>We are home to some of the top brands in music, media and marketing including Flighthouse Media, Label Engine and Broke Records with artists like Marshmello, deadmau5, Tyrese, Keri Hilson, Durand Bernarr, bbno$, Sevdaliza, Deebaby and more. We are at the forefront of the independent music sector, shaping the future of the music industry.</span>

            <span className='read-more-link uppercase font-bold tracking-widest text-[#008ad3]'>See Our Current Opportunities</span>
        </div>

        <div className='w-[20%]'></div>
        
    </div>
  )
}

export default WorkWithUs