import Container from '@/components/Layout/Container'
import About from '@/components/Utility/about'
import AboutImage from '@/components/Utility/AboutImage'
import Alumni from '@/components/Utility/alumni'
import ArtricleCard from '@/components/Utility/article-card'
import Counter from '@/components/Utility/counter'
import DashedCurve from '@/components/Utility/dashedCurve'
import Events from '@/components/Utility/events'
import Sponsors from '@/components/Utility/Sponsors'
import Testimonial from '@/components/Utility/testimonial'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsArrowRight, BsFillCaretRightFill } from 'react-icons/bs'
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Container>
        <section className='w-full relative px-10'>
          <div className='absolute top-[2vw] left-[26%] w-[50vw]'>
            <DashedCurve theme={theme} />
          </div>
          <div className='md:mt-32 mt-40 z-100 relative md:flex md:flex-row flex-col justify-center'>
            <div className='md:w-3/5 w-full mx-auto text-center md:text-start'>
              <motion.h1
                initial={{ translateY: -255, scale: 0 }}
                animate={{ translateY: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeIn',
                }}
                className='md:text-8xl text-6xl  font-bold leading-[7rem] items-center justify-center'>
                More Than <span className='text-iec-orange-2-500 '>a </span>
                <span className='text-iec-orange-2-500'> Club</span>
              </motion.h1>
              <h2 className='text-3xl my-10 text-gray-700 dark:text-white'>
                Industrial Engineers Club
              </h2>
              <button className='bg-iec-orange-2-500 hidden md:inline text-[1rem] mx-auto px-7 py-2 rounded-full mt-4'>
                Contacter
              </button>
            </div>
            <div className='md:w-2/5 w-[80%] mx-auto md:mt-0 mt-10'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                className='grid grid-cols-2 gap-x-5 relative '>
                <div className='pb-5'>
                  <Image
                    className='rounded-tl-[50px]'
                    src='/images/stock.jpg'
                    alt='image1'
                    width={300}
                    height={250}
                    layout='responsive'
                  />
                </div>
                <div className='w-[75%] self-end'>
                  <Image
                    className='rounded-tr-[50px]'
                    src='/images/idea.jpg'
                    alt='image2'
                    width={200}
                    height={200}
                    layout='responsive'
                  />
                </div>
                <div className='w-[75%] self-start  ml-auto'>
                  <Image
                    className='rounded-bl-[50px] '
                    src='/images/data.jpg'
                    alt='image3'
                    width={200}
                    height={200}
                    layout='responsive'
                  />
                </div>
                <div className='pt-5'>
                  <Image
                    className='rounded-br-[50px] '
                    src='/images/container.jpg'
                    alt='image4'
                    width={300}
                    height={250}
                    layout='responsive'
                  />
                </div>
              </motion.div>
            </div>
            <div className=' md:hidden w-full mx-auto text-center mt-12'>
              <button className='bg-iec-orange-2-500  text-3xl mx-auto  px-10 py-3 rounded-full '>
                Contacter
              </button>
            </div>
          </div>
        </section>

        <section className='w-full mb-32'>
          <div className='flex md:flex-row flex-col w-full mt-28 mb-14 mx-auto px-8 gap-7'>
            
            <div className='md:w-[45%]  w-[80%] h-max mx-auto flex justify-center items-center relative  image-about '>
              <AboutImage />
            </div>
            <div className='w-1/2 mx-auto text-center md:text-left'>
              <h1 className='md:text-left text-5xl  font-bold text-center mt-5 md:mt-0'>
                About <span className='text-iec-orange-2-500'>Us</span>
              </h1>
              <p className='py-3'>
                Plus qu&apos;un club Le &quot;Industrial Engineers Club&quot;
                est un club du Génie Industriel{' '}
              </p>
              <div className='w-[7rem] rounded-full mx-auto md:mx-0 bg-iec-orange-2-500 h-1'></div>

              <div className='flex flex-col mt-8 gap-4 '>
                <About />
              </div>
            </div>
          </div>
        </section>
        {/* <section className='w-full relative'>
          <div className='absolute w-full h-full flex content-center align-middle'>
            <Map
              theme={theme}
              className='w-3/4 mx-auto '
            />
          </div>
          <div className='my-16 z-100  flex flex-col place-items-center content-center'>
            <h1 className='text-5xl mx-auto font-bold mt-20'>
              Our <span className='text-iec-orange-2-500'>Story</span>
            </h1>
            <h2 className='my-20 text-xl text-center w-[60%] mx-auto opacity-70'>
              Plus qu&apos;un club Le &quot;Industrial Engineers Club&quot; est
              un club du Génie Industriel de l&apos;Ecole Nationale
              Polytechnique. Il a pour but de compléter la formation de ces
              derniers à travers des formations et la vulgarisation de notions
              importantes.
            </h2>
          
          </div>
        </section> */}
        <section>
          <h1 className='text-center text-5xl mx-auto font-bold '>
            Our <span className='text-iec-orange-2-500'>Speciality</span>
          </h1>

          <div className='flex md:flex-row flex-col items-center  mx-auto justify-center mt-24 md:justify-around'>
            <div className='w-[45%] md:w-[25%] image-spec h-max mx-auto md:mx-0'>
              <Image
                className='rounded-tl-[50px]'
                src='/images/data-science.jpg'
                alt='image1'
                width={300}
                height={250}
                layout='responsive'
              />
            </div>
            <div className='flex flex-col md:w-1/2 w-full mt-16 md:mt-0 text-center md:text-left'>
              <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                Data Science & Intelligence Artificielle
              </h1>
              <p className='text-iec-gray-800 text-2xl py-6'>
                {' '}
                Le &quot;Industrial Engineers Club&quot; est un club du Génie
                Industriel de l&apos;Ecole Nationale Polytechnique. Il a pour
                but de compléter la formation
              </p>
              <button className='flex items-center mx-auto md:mx-0 gap-2 text-iec-orange-2-500 bg-white w-max px-3 py-2 rounded-lg'>
                <span>
                  <BsFillCaretRightFill />
                </span>
                Read more
              </button>
            </div>
          </div>
          <div className='flex md:flex-row flex-col-reverse items-center mx-auto justify-center mt-32 md:justify-around '>
            <div className='flex flex-col md:w-1/2  w-full mt-16 md:mt-0 text-center md:text-left'>
              <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                Le Génie Industriel
              </h1>
              <p className='text-iec-gray-800 text-2xl py-6'>
                {' '}
                Le &quot;Industrial Engineers Club&quot; est un club du Génie
                Industriel de l&apos;Ecole Nationale Polytechnique. Il a pour
                but de compléter la formation
              </p>
              <button className='flex items-center mx-auto md:mx-0 gap-2 text-iec-orange-2-500 bg-white w-max px-3 py-2 rounded-lg'>
                <span>
                  <BsFillCaretRightFill />
                </span>
                Read more
              </button>
            </div>
            <div className='w-[45%] md:w-[25%] image-spec h-max mx-auto md:mx-0'>
              <Image
                className='rounded-tl-[50px]'
                src='/images/GI.jpg'
                alt='image1'
                width={300}
                height={250}
                layout='responsive'
              />
            </div>
          </div>
        </section>
        <section className='w-full relative  '>
          <div className='text-5xl text-center mt-28 font-bold'>
            IEC <span className='text-iec-orange-2-500'>en chiffres</span>
          </div>
          <div className='flex gap-[15rem] mt-16'>
            <div className='w-1/2 hidden lg:inline'>
              <Alumni />
            </div>
            <div className='w-full flex justify-center lg:w-1/2 mx-auto my-auto'>
              <div className='grid grid-cols-1  sm:grid-cols-2 text-center md:text-left gap-x-20 gap-y-7 w-max mx-auto sm:mx-0 my-auto'>
                <div className='flex flex-col  ml-auto gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter end={74} />
                  </h1>
                  <h1 className='text-3xl text-iec-gray-800'>Members</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    +<Counter end={334} />
                  </h1>
                  <h1 className='text-3xl text-iec-gray-800 '>Alumnis</h1>
                  <h1 className='w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>

                <div className='flex flex-col  ml-auto  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter end={2020} />
                  </h1>
                  <h1 className='text-3xl text-iec-gray-800 '>Creation</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter end={12} />
                  </h1>
                  <h1 className='text-3xl text-iec-gray-800'>Events</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-iec-orange-2-500 bg-opacity-10 mt-14 w-full'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-5xl  mt-28 font-bold'>
              Our <span className='text-iec-orange-2-500'>Articles</span>
            </h1>
            <p className='text-iec-gray-800 w-1/2 text-center mx-auto'>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&apos;t anything embarrassing hidden in the middle
              of text
            </p>
          </div>
          <div className='w-full grid md:grid-cols-3  grid-cols-1 sm:grid-cols-2 px-32 sm:px-10 gap-8  mt-12 pb-14'>
            <ArtricleCard
              image='/images/covid2.jpg'
              title="L'impact Du Covid"
            />
            <ArtricleCard
              image='/images/supply.jpg'
              title='Supply Chain'
            />
            <ArtricleCard
              image='/images/industrie4.jpg'
              title='Industrie 4.0'
            />
          </div>
          <div className='w-full flex justify-center '>
            <button className='bg-iec-orange-2-500 mb-8 text-white  font-bold  py-2 px-4 rounded-xl flex items-center gap-3 hover:text-iec-orange-2-500 hover:bg-white'>
              Voir tout Les Articles{' '}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </section>

        <section>
          <div className='text-5xl text-center mt-28 mb-7 font-bold'>
            What people <span className='text-iec-orange-2-500'>say</span>
          </div>
          <p className='text-iec-gray-800 w-1/2 text-center mx-auto mb-4'>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn&apos;t anything embarrassing hidden
          </p>
          <Testimonial />
        </section>

        <section className='bg-iec-orange-2-500 bg-opacity-10 mt-14 w-full'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-5xl  mt-28 font-bold flex-wrap'>
              Sponsoring{' '}
              <span className='text-iec-orange-2-500'>We Have Got From</span>
            </h1>
            <p className='text-iec-gray-800 w-1/2 text-center mx-auto'>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&apos;t anything embarrassing hidden in the middle
              of text
            </p>
          </div>
          <Sponsors />
        </section>

        <section className='w-full'>
          <Events />
        </section>
      </Container>
    </>
  )
}
