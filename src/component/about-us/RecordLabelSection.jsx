import React from 'react'

const RecordLabelSection = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row pt-20 lg:pt-60 gap-8 lg:gap-0'>
        <div className='w-[20%]'></div>
        <div className='w-[100%] lg:w-[30%] flex flex-col px-5 gap-10'>
            <div className='flex flex-col gap-1 pt-5'>
                <h1 className='font-bold text-[14px]'>RECORD LABELS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>2500K</span>
            </div>
            <div className='flex flex-col gap-1 mt-6'>
                <h1 className='font-bold text-[14px]'>SOUND RECORDINGS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>350K</span>
            </div>
            <div className='flex flex-col gap-1 mt-6'>
                <h1 className='font-bold text-[14px]'>COMPOSITIONS</h1>
                <span className='font-bold text-6xl lg:text-8xl'>100k</span>
            </div>
        </div>
        <div className='w-[100%] lg:w-[50%] lg:h-[600px] px-5'>
            <img src="/images/cardi-b.jpg" alt="" className='w-full h-full'/>
        </div>
    </div>
  )
}

export default RecordLabelSection