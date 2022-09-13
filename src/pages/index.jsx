import Container from '@/components/Layout/Container'
import About from '@/components/Utility/about'
import AboutImage from '@/components/Utility/AboutImage'
import Alumni from '@/components/Utility/alumni'
import Counter from '@/components/Utility/counter'
import DashedCurve from '@/components/Utility/dashedCurve'
import Events from '@/components/Utility/events'
import FAQ from '@/components/Utility/FAQ'
import Map from '@/components/Utility/map'
import NosArticles from '@/components/Utility/NosArticles'
import Rond from '@/components/Utility/rond'
import Sponsors from '@/components/Utility/Sponsors'
import Testimonial from '@/components/Utility/testimonial'
import Value from '@/components/Utility/value'
import { getRecentBlogPosts } from '@/utils/get-blog-post'
import { saveAs } from 'file-saver'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsArrowRight, BsFillCaretRightFill } from 'react-icons/bs'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
} from 'react-icons/fa'
import TrackVisibility from 'react-on-screen'

export default function Home({ latestPosts }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  const saveFile = () => {
    saveAs('/pdf/brochuree.pdf', 'example.pdf')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Container title='Acceuil - IEC - Industrial Engineers Club'>
        <section className='w-full relative px-10 mb-20'>
          
          <div className='md:mt-32 mt-40 z-100 relative md:flex md:flex-row flex-col justify-center'>
            <div className='md:w-3/5 w-full mx-auto text-center md:text-start'>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <>
                      <h1 className='animate__animated animate__fadeInDown md:text-8xl text-6xl md:mt-10 font-bold leading-[7rem] items-center justify-center'>
                        More Than{' '}
                        <span className='text-iec-orange-2-500 '>a </span>
                        <span className='text-iec-orange-2-500'> Club</span>
                      </h1>
                    </>
                  )
                }
              </TrackVisibility>

              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <>
                      <h2 className=' animate__animated animate__fadeInLeft text-3xl my-10 text-gray-700 dark:text-white'>
                        Industrial Engineers Club
                      </h2>
                      <div className='flex flex-row items-center gap-4 justify-center md:justify-start py-5 md:py-0'>
                        <a href='https://www.instagram.com/iec.enp/'>
                          <FaInstagram className='text-xl' />
                        </a>
                        <a href='https://www.facebook.com/IEC.ENP'>
                          <FaFacebookSquare className='text-xl' />
                        </a>
                        <a href='https://www.linkedin.com/company/industrial-engineers-club-iec/mycompany/'>
                          <FaLinkedin className='text-xl' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCFJj3c8sxopxbiuR9rNu-2g'>
                          <FaYoutubeSquare className='text-xl' />
                        </a>
                      </div>
                    </>
                  )
                }
              </TrackVisibility>
            </div>
            <div className='md:w-2/5 w-[80%] mx-auto md:mt-0 mt-10'>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div
                      className='grid grid-cols-2 gap-x-5 relative animate__animated animate__fadeIn '
                      style={{
                        animationDelay: '0.7s',
                        animationDuration: '2s',
                      }}>
                      <div className='pb-5'>
                        <Image
                          className='rounded-tl-[50px]'
                          src='/images/stock.webp'
                          alt='image1'
                          width={300}
                          height={250}
                          layout='responsive'
                        />
                      </div>
                      <div className=' w-[75%] self-end'>
                        <Image
                          className='rounded-tr-[50px]'
                          src='/images/idea.webp'
                          alt='image2'
                          width={200}
                          height={200}
                          layout='responsive'
                        />
                      </div>

                      <div className=' w-[75%] self-start  ml-auto'>
                        <Image
                          className='rounded-bl-[50px] '
                          src='/images/data.webp'
                          alt='image3'
                          width={200}
                          height={200}
                          layout='responsive'
                        />
                      </div>
                      <div className=' pt-5'>
                        <Image
                          className='rounded-br-[50px] '
                          src='/images/container.webp'
                          alt='image4'
                          width={300}
                          height={250}
                          layout='responsive'
                        />
                      </div>
                    </div>
                  )
                }
              </TrackVisibility>
            </div>
            <div className=' md:hidden w-full mx-auto text-center mt-12'>
              <button className='bg-iec-orange-2-500  text-3xl mx-auto  px-10 py-3 rounded-full '>
                Contacter
              </button>
            </div>
          </div>
        </section>

        <section className='w-full md:mb-24 md:h-[25rem] lg:h-[400px] sm:h-[60rem] h-[60rem]'>
          <div className='flex md:flex-row flex-col w-11/12 mt-28 mb-14 mx-auto px-8 gap-9'>
            <div className='md:w-[45%]  w-[80%] h-max mx-auto flex justify-center items-center relative  '>
              <div
                className=' image-about '
                style={{
                  animationDelay: '0.1s',
                  animationDuration: '1.5s',
                }}>
                <AboutImage />
              </div>
            </div>

            <div className='md:w-1/2 w-4/5 mx-auto text-center md:text-left'>
              <h1 className='md:text-left text-5xl  font-bold text-center mt-5 md:mt-0 leading-[32px]'>
                À Propos de <span className='text-iec-orange-2-500'>Nous</span>
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

        <section className='w-full flex flex-col mx-auto pb-20 relative'>
          <div className='absolute w-full h-full md:flex md:items-center lg:items-start justify-center hidden'>
            <Map theme={theme} />
          </div>
          <div className='text-5xl text-center my-auto font-bold md:mt-10'>
            Nos
            <span className='text-iec-orange-2-500'> Valeurs</span>
          </div>
          <div className='flex justify-center mt-24'>
            <Value theme={theme} />
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
          <h1 className='animate__animated animate__bounce text-center lg:mt-10 text-5xl mx-auto font-bold '>
            Nos <span className='text-iec-orange-2-500'>Spécialitées</span>
          </h1>

          <div className='flex md:flex-row flex-col items-center  mx-auto justify-center mt-24 md:justify-around'>
            <TrackVisibility
              once
              className='w-[45%] md:w-[25%] h-max mx-auto md:mx-0'>
              {({ isVisible }) =>
                isVisible && (
                  <div className='image-spec FadeInLeft'>
                    <Image
                      className=' rounded-tl-[50px]'
                      src='/images/data-science.webp'
                      alt='image1'
                      width={300}
                      height={250}
                      layout='responsive'
                    />
                    <div className='absolute hidden md:inline'>
                      <Rond theme={theme} />
                    </div>
                  </div>
                )
              }
            </TrackVisibility>
            <TrackVisibility
              once
              className='flex flex-col md:w-1/2 w-full px-12  md:px-0 mt-20 md:mt-0 text-center md:text-left'>
              {({ isVisible }) =>
                isVisible && (
                  <>
                    <div className='specialityText'>
                      <div className=''>
                        <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                          Data Science & Intelligence Artificielle
                        </h1>
                        <p className='text-iec-gray-800 dark:text-white text-xl py-6'>
                          {' '}
                          La DSIA est une spécialité de l&apos;ENP qui a été
                          ouverte en 2020. Elle englobe deux domaines de pointe
                          : la science des données,et l&apos;intelligence
                          artificielle ayant pour but la création de valeur à
                          partir de l&apos;exploration et l&apos;analyse de
                          données brutes grâce à des techniques telles que la
                          programmation informatique, les mathématiques ou les
                          statistiques
                        </p>
                        <button
                          onClick={saveFile}
                          className='flex hover:text-white hover:bg-iec-orange-2-500 items-center mx-auto md:mx-0 gap-2 text-iec-blue-2-500 bg-white w-max px-3 py-2 rounded-lg shadow-md'>
                          <span>
                            <BsFillCaretRightFill />
                          </span>
                          Télécherger Brochure
                        </button>
                      </div>
                    </div>
                  </>
                )
              }
            </TrackVisibility>
          </div>
          <div className='flex md:flex-row flex-col-reverse items-center mx-auto justify-center mt-28 md:justify-around '>
            <TrackVisibility
              once
              className='flex flex-col md:w-1/2  w-full px-12  md:px-0 mt-20 text-center md:text-left'>
              {({ isVisible }) =>
                isVisible && (
                  <div className='specialityText'>
                    <h1 className='text-4xl font-bold text-iec-blue-2-500 dark:text-white'>
                      Le Génie Industriel
                    </h1>
                    <p className='text-iec-gray-800 dark:text-white text-xl py-6'>
                      {' '}
                      Se situant à l&apos;interface entre les sciences de
                      l&apos;ingénieur, les sciences économiques et les sciences
                      humaines. Ce qui permet à l&apos;ingénieur en MI
                      d&apos;être polyvalent, doté d&apos;un flux
                      d&apos;information nécessaire dans le management des
                      entreprises
                    </p>
                    <button
                      onClick={saveFile}
                      className='flex items-center hover:text-white hover:bg-iec-orange-2-500 mx-auto md:mx-0 gap-2 text-iec-blue-2-500 bg-white w-max px-3 py-2 rounded-lg shadow-md'>
                      <span>
                        <BsFillCaretRightFill />
                      </span>
                      Télécherger Brochure
                    </button>
                  </div>
                )
              }
            </TrackVisibility>
            <TrackVisibility
              once
              className='w-[45%] md:w-[25%]  h-max mx-auto md:mx-0'>
              {({ isVisible }) =>
                isVisible && (
                  <div className='image-spec z-100 FadeInRight'>
                    <Image
                      className='rounded-tl-[50px]'
                      src='/images/GI.webp'
                      alt='image1'
                      width={300}
                      height={250}
                      layout='responsive'
                    />
                    <div className='absolute hidden md:inline'>
                      <Rond theme={theme} />
                    </div>
                  </div>
                )
              }
            </TrackVisibility>
          </div>
        </section>
        <section className='w-full relative  '>
          <div className='text-5xl text-center mt-28 font-bold'>
            IEC <span className='text-iec-orange-2-500'>En Chiffres</span>
          </div>
          <div className='flex gap-[6rem] mt-16'>
            <div className='w-1/2 hidden lg:inline lg:ml-3'>
              <Alumni theme={theme} />
            </div>
            <div className='w-full flex justify-center lg:w-1/2 mx-auto my-auto'>
              <div className='grid grid-cols-2 text-center md:text-left mb-9 md:mb-0 gap-x-20 gap-y-7 w-max mx-auto sm:mx-0 my-auto'>
                <div className='flex w-full flex-col  ml-auto gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter
                      id='counter1'
                      end={83}
                      speed={20}
                      step={1}
                    />
                  </h1>
                  <h1 className='text-2xl  text-iec-gray-800'>Membres</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex  w-full flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    +
                    <Counter
                      id='counter2'
                      end={410}
                      speed={10}
                      step={5}
                    />
                  </h1>
                  <h1 className='text-2xl text-iec-gray-800 '>Alumnis</h1>
                  <h1 className='w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>

                <div className='flex w-full flex-col  ml-auto  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter
                      id='counter3'
                      end={2020}
                      speed={10}
                      step={20}
                    />
                  </h1>
                  <h1 className='text-2xl text-iec-gray-800 '>Création</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
                <div className='flex w-full flex-col  gap-3'>
                  <h1 className='text-[2.5rem] font-bold'>
                    <Counter
                      id='counter4'
                      end={12}
                      speed={100}
                      step={1}
                    />
                  </h1>
                  <h1 className='text-2xl text-iec-gray-800'>Évènement</h1>
                  <h1 className=' w-full h-[8px] bg-iec-orange-2-500 rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-iec-orange-2-500 bg-opacity-10 mt-14 w-full'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-5xl  mt-24 font-bold'>
              Nos <span className='text-iec-orange-2-500'>Articles</span>
            </h1>
          </div>
          <div className='w-[100%] md:mt-9'>
            <NosArticles latestPosts={latestPosts} />
          </div>
          <div className='w-full flex justify-center '>
            <Link href='/articles'>
              <a className=' bg-white mb-12 mt-5  font-bold  py-2 px-4 rounded-xl flex items-center gap-3 hover:text-white hover:bg-iec-orange-2-500 shadow-md text-iec-blue-2-500 '>
                Voir tout Les Articles
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </Link>
          </div>
        </section>

        {/* <section>
          <div className='text-5xl text-center mt-28 mb-7 font-bold'>
            Ce Que Les Gens <span className='text-iec-orange-2-500'>Disent </span>
          </div>
          <p className='text-iec-gray-800 dark:text-white w-1/2 text-center mx-auto mb-4'>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn&apos;t anything embarrassing hidden
          </p>
          <Testimonial />
        </section> */}

        <section className='w-full '>
          <div className='w-full flex flex-col my-16'>
            <div className='flex flex-col  gap-5 text-center mb-5'>
              <h1 className='text-5xl   font-bold flex-wrap'>
                Ceux Qui Nous Ont Déja{' '}
                <span className='text-iec-orange-2-500'>Fait Confiance</span>
              </h1>
              <p className='text-iec-gray-800 md:w-1/2 w-2/3 text-center mx-auto dark:text-white'>
                Des entreprises dans différents secteurs ont été intéressées par
                l&apos;ensemble des événements organisées par notre club
              </p>
            </div>
            <Sponsors />
          </div>
        </section>

        <section className='w-full  bg-iec-orange-2-500 bg-opacity-10 flex'>
          <div className='w-full my-14'>
            <Events theme={theme} />
          </div>
        </section>

        <section className=' mt-14 w-full md:h-[630px] h-auto'>
          <div className='flex flex-col justify-center w-full items-center '>
            <div className='text-5xl text-center  font-bold mt-16'>
              Foire Aux
              <span className='text-iec-orange-2-500'> Questions</span>
            </div>
            <div className='w-full flex justify-center mt-4'>
              <FAQ />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const latestPosts = await getRecentBlogPosts(4)

  return {
    props: {
      latestPosts,
    },
  }
}
