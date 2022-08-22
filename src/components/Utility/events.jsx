import { useState } from 'react'
import Slider2 from './slider2'
import Slider from './slider'

import { GrNext, GrPrevious } from 'react-icons/gr'
import Image from 'next/image'

function Events({theme}) {
  const Slides = [
    {
      title: 'IEC Case Competition',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laboriosam omnis corrupti, tenetur ratione vero unde velitsuscipit itaque distinctio alias repudiandae sunt? Ex minima nisi veniam possimus sed nihil deleniti?',
      logo: '/images/events/logo-icc.png',
      color: ["color-icc" , "color-icc" ],
    },
    {
     
      title: 'Business <br/> Game',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laboriosam omnis corrupti, tenetur ratione vero unde velitsuscipit itaque distinctio alias repudiandae sunt? Ex minima nisi veniam possimus sed nihil deleniti?',
      logo: '/images/events/bg_logo.png',
      color: ['color-bg-dark','color-bg'],
    },
    {
     
      title: 'TedX Talks <br/> ENP',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laboriosam omnis corrupti, tenetur ratione vero unde velitsuscipit itaque distinctio alias repudiandae sunt? Ex minima nisi veniam possimus sed nihil deleniti?',
      logo: '/images/events/logo-tedx.png',
      color: ['color-ted-dark', 'color-ted'],
    },
  ]

  const [current, setCurrent] = useState(0)
  const len = Slides.length

  const NextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1)
    console.log('next', current)
  }
  const PrevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1)
    console.log('previous', current)
  }

  return (
    <>
      
        <h1 className='mt-24 text-center text-5xl mx-auto font-bold  '>
          Our <span className='text-iec-orange-2-500'>Events</span>
        </h1>
        {/* <h1 className='mt-24 stroke-text text-center text-5xl mx-auto font-bold  '>
          Our <span className=''>Events</span>
        </h1> */}
        
      
      <div className='flex absolute right-12 gap-3 items-center mx-auto'>
          <button
            className='text-xl p-4 rounded-full ss sha bg-white h-max'
            onClick={PrevSlide}>
            <GrPrevious />
          </button>
          <button
            className='text-xl p-4 rounded-full ss bg-white h-max'
            onClick={NextSlide}>
            <GrNext />
          </button>
        </div>

      <div className='w-full flex md:flex-row md:items-center flex-col mt-9'>
        
        <div className='md:w-5/12 w-full flex justify-center'>
            <div className='lg:w-[300px] lg:h-[300px] sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]  flex rounded-full  border-iec-orange-2-500 border-2 bg-white'>
            <div className='overflow-hidden rounded-full w-full'>
              <Slider Slides={Slides}
                current={current}/>
        </div>
            </div>
            
        </div>

        <div className='md:w-7/12 w-full text-center md:text-left flex flex-col'>
          <div className=' w-full'>
            <div className='overflow-hidden '>
              <Slider2
              theme={theme}
                Slides={Slides}
                current={current}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
