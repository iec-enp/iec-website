import Container from '@/components/Layout/Container'
import Alumni from '@/components/Utility/alumni'
import DashedCurve from '@/components/Utility/dashedCurve'
import Map from '@/components/Utility/map'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { BsFillCaretRightFill } from 'react-icons/bs'

export default function Home() {
  const { resolvedTheme } = useTheme()

  return (
    <>
      <Container>
        <section className='w-full relative'>
          <div className='absolute top-[2vw] left-[26%] w-[50vw]'>
            <DashedCurve theme={resolvedTheme} />
          </div>
          <div className='mt-32 z-100 relative flex'>
            <div className='w-3/5 '>
              <h1 className='text-[5.5rem] font-bold leading-[7rem]'>
                More Than <span className='text-iec-orange-2-500 '>a </span>
                <span className='text-iec-orange-2-500'> Club</span>
              </h1>
              <h2 className='text-3xl my-10 text-gray-700 dark:text-white'>
                Industrial Engineers Club
              </h2>
              <button className='bg-iec-orange-2-500 text-[1rem] px-7 py-2 rounded-full mt-4'>
                Contacter
              </button>
            </div>
            <div className='w-2/5 justify-center'>
              <div className='grid grid-cols-2 gap-x-5 relative'>
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
              </div>
            </div>
          </div>
        </section>
        <section className='w-full relative'>
          <div className='absolute top-[2vw] left-[9%] w-[70vw] '>
            <Map theme={resolvedTheme} />
          </div>
          <div className='my-16 z-100 relative flex flex-col '>
            <h1 className='text-3xl mx-auto font-bold mt-24'>
              Our <span className='text-iec-orange-2-500'>Story</span>
            </h1>
            <h2 className='mt-16 text-xl text-center w-[60%] mx-auto opacity-70'>
              Plus qu&apos;un club Le &quot;Industrial Engineers Club&quot; est
              un club du Génie Industriel de l&apos;Ecole Nationale
              Polytechnique. Il a pour but de compléter la formation de ces
              derniers à travers des formations et la vulgarisation de notions
              importantes.
            </h2>
          </div>
        </section>
        <section className='w-full relative'>
          <div className='text-3xl text-center mt-32 font-bold'>
            IEC <span className='text-iec-orange-2-500'>en chiffres</span>
          </div>
          <div className='flex gap-[15rem] mt-16'>
            <div className='w-1/2 hidden lg:inline'>
              <Alumni />
            </div>
            <div className='w-full sm:w-1/2 mx-auto my-auto'>
              <div className='grid grid-cols-1  sm:grid-cols-2 gap-x-20 gap-y-7 w-max mx-auto sm:mx-0 my-auto'>
                <div className='flex flex-col  ml-auto gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>74</h1>
                  <h1 className='text-3xl text-iec-gray-800'>Members</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>+334</h1>
                  <h1 className='text-3xl text-iec-gray-800 '>Alumnis</h1>
                  <h1 className='w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>

                <div className='flex flex-col  ml-auto  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>2020</h1>
                  <h1 className='text-3xl text-iec-gray-800 '>Creation</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>12</h1>
                  <h1 className='text-3xl text-iec-gray-800'>Events</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className='text-center text-3xl mx-auto font-bold mt-24 '>
            Our <span className='text-iec-orange-2-500'>Speciality</span>
          </h1>

          <div className='flex mx-auto mt-24 justify-around'>
            <div className='w-[25%] image-spec'>
              <Image
                className='rounded-tl-[50px]'
                src='/images/data-science.jpg'
                alt='image1'
                width={300}
                height={250}
                layout='responsive'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                Data Science & Intelligence Artificielle
              </h1>
              <p className='text-iec-gray-800 text-2xl py-4'>
                {' '}
                Le &quot;Industrial Engineers Club&quot; est un club du Génie
                Industriel de l&apos;Ecole Nationale Polytechnique. Il a pour
                but de compléter la formation
              </p>
              <button className='flex items-center gap-2 text-iec-orange-2-500 bg-white w-max px-3 py-2 rounded-lg'>
                <span>
                  <BsFillCaretRightFill />
                </span>
                Read more
              </button>
            </div>
          </div>
          <div className='flex mx-auto mt-40 justify-around'>
            <div className='flex flex-col w-1/2'>
              <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                Le Génie Industrielle
              </h1>
              <p className='text-iec-gray-800 text-2xl py-4'>
                {' '}
                Le &quot;Industrial Engineers Club&quot; est un club du Génie
                Industriel de l&apos;Ecole Nationale Polytechnique. Il a pour
                but de compléter la formation
              </p>
              <button className='flex items-center gap-2 text-iec-orange-2-500 bg-white w-max px-3 py-2 rounded-lg'>
                <span>
                  <BsFillCaretRightFill />{' '}
                </span>{' '}
                Read more
              </button>
            </div>
            <div className='w-[25%] image-spec'>
              <Image
                className='rounded-tl-[50px]'
                src='/images/GI.jpg'
                alt='image7'
                width={300}
                height={250}
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
