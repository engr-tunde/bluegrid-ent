import React from 'react'

const MusicByNumbers = () => {
  return (
    <div className='pt-20 lg:pt-60 flex w-full flex-col lg:flex-row gap-6 lg:gap-0'>
        <div className='w-[100%] lg:w-[50%] lg:h-[800px] px-5'>
            <img src="/images/lil-wayne.avif" alt="" className='w-full h-full'/>
        </div>

        <div className='w-[100%] lg:w-[50%] flex flex-col px-5 gap-10'>
            <h1 className='text-2xl lg:text-5xl font-bold'>CREATE MUSIC BY THE NUMBERS</h1>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-[14px]'>ARTISTS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>25K</span>
            </div>
            <div className='flex flex-col gap-3 mt-6'>
                <h1 className='font-bold text-[14px]'>MONETIZED VIDEOS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>12M</span>
            </div>
            <div className='flex flex-col gap-3 mt-6'>
                <h1 className='font-bold text-[14px]'>MONTHLY VIEWS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>11B</span>
            </div>
        </div>
    </div>
  )
}

export default MusicByNumbers