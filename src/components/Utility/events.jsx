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
        "ICC est une compétition d’étude de cas organisée par le club IEC dans laquelle les participants doivent tenter de trouver une solution à une problématique d'actualité proposée par une entreprise",
      logo: '/images/events/logo-icc.png',
      color: ["color-icc" , "color-icc" ],
    },
    {
     
      title: 'Business <br/> Game',
      content:
        "Business game est un jeu de simulation de gestion d’entreprise, faisant face à une concurrence sur un marché virtuel. Chaque entreprise est représentée et gérée par une équipe",
      logo: '/images/events/bg_logo.png',
      color: ['color-bg-dark','color-bg'],
    },
    {
     
      title: 'TedX Talks <br/> ENP',
      content:
        "TEDxENP est un événement Tedx organisé par un groupe d’étudiants de l’Ecole Nationale Polytechnique. Les Etudiants et professionnels les se retrouvent afin d’échanger sur l’avenir et l’évolution du monde dans ses différentes composantes en évoquant les différents vecteurs du changement et leurs impacts sur la société",
      logo: '/images/events/logo-tedx.png',
      color: ['color-ted-dark', 'color-ted'],
    },
    {
     
      title: 'Algeria Data <br/> CUP',
      content:
        "Algeria Data Cup: est un hackathon de data science où les participants sont invités à résoudre un problème de Business réel, en développant un modèle d’apprentissage automatique le plus performant possible",
      logo: '/images/events/ADC_logo.png',
      color: ['color-adc-dark', 'color-adc'],
    },
    {
     
      title: 'Jour Génie<br/> Industriel',
      content:
        "Le Jour GI est un événement qui se déroule chacun année, pour but de promouvoir la spécialité du Génie Industriel sous ses deux options aux étudiants lauréats du concours national d'accès au grande écoles d’ingénieurs",
      logo: '/images/events/jourj_logo.png',
      color: ['color-ji-dark', 'color-ji'],
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
          Nos <span className='text-iec-orange-2-500'>Evènements</span>
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
