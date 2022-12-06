import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Clock, MapPin, UsersThree } from 'phosphor-react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import TrackVisibility from 'react-on-screen'

const EventSection = ({
  name,
  description,
  logo,
  date,
  place,
  pics,
  participant,
  edition,
  left = true,
  color,
  iconColor,
}) => {
  const { resolvedTheme } = useTheme();

  const angles = useMemo(() => {
    return ['6', '12', '24'];
  }, []);

  const rot_signs = useMemo(() => {
    return ['', '-'];
  }, [])

  // const angles = ['6', '12', '24'];
  // const rot_signs = ['', '-'];

  const [rand_angle, setRandAngle] = useState();
  const [rand_angle_2, setRandAngle2] = useState();
  const [rand_rot_sign, setRandRotSign] = useState();
  
  useEffect(() => {
    setRandAngle(angles[Math.floor(Math.random() * angles.length)]);
  }, [angles]);

  useEffect(() => {
    setRandRotSign(rot_signs[Math.floor(Math.random() * rot_signs.length)]);
  }, [rot_signs]);

  useEffect(() => {
    setRandAngle2(angles[Math.floor(Math.random() * angles.length)]);
  }, [angles]);

  return (
    <div
      className={`flex flex-col items-center w-4/5 gap-8 md:gap-16 justify-between ${
        left ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
      <div className={`md:w-3/4 ${left ? 'items-start' : 'items-end'}`}>
        <div className={`flex-col flex gap-12 items-center md:items-start`}>
          <h1
            className={`text-5xl  text-shadow-light font-bold ${
              resolvedTheme === 'dark' ? color[0] : color[1]
            }`}>
            {name}
          </h1>
          <p className='w-full text-center md:text-left'>{description}</p>
          <div
            className='p-4 rounded-xl w-3/4 md:w-fit flex flex-col gap-4'
            style={{
              border: `1px solid ${`${
                resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
              }`}70`,
            }}>
            <div className='flex items-center'>
              <Clock
                size={24}
                color={`${
                  resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                }`}
              />
              <p className='ml-2'>{date}</p>
            </div>
            <div className='flex items-center'>
              <MapPin
                color={`${
                  resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                }`}
                size={24}
              />
              <p className='ml-2'>{place}</p>
            </div>
          </div>
          <div className='flex items-center gap-4 w-full md:w-3/4 md:justify-start justify-center'>
            {participant && (
              <div className='flex w-1/2 flex-col shadow-lg px-2 pb-4 rounded-lg hover:shadow-xl transition-all '>
                <div
                  className='border-t-2  w-1/2 pt-2'
                  style={{
                    borderColor: `${`${
                      resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                    }`}`,
                  }}>
                  <UsersThree
                    size={24}
                    color={`${
                      resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                    }`}
                  />
                </div>
                <>
                  <p className='text-xl font-bold text-shadow-light'>
                    {participant}
                  </p>
                  <p className='font-medium'>Participants</p>
                </>
              </div>
            )}

            <div className='flex w-1/2 flex-col shadow-lg px-2 pb-4 rounded-lg hover:shadow-xl transition-all '>
              <div
                className='border-t-2  w-1/2 pt-2'
                style={{
                  borderColor: `${`${
                    resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                  }`}`,
                }}>
                <AiOutlineFieldNumber
                  size={24}
                  color={`${
                    resolvedTheme === 'dark' ? iconColor[0] : iconColor[1]
                  }`}
                />
              </div>
              <p className='text-xl font-bold text-shadow-light'>{edition} Édition{edition > 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col justify-center w-3/5'>
        <motion.div
          initial={{ y: 180 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
            type: 'spring',
          }}
          className='hidden w-[70px] h-[70px]  md:flex justify-center items-center absolute rounded-full p-1 bg-gray-100 border-2 -top-10 left-1/2'>
          <Image
            src={logo}
            alt='logo'
            width={50}
            height={50}
          />
        </motion.div>
        <motion.div className='hidden w-[90px] h-[90px]  md:flex justify-center items-center absolute rounded-full p-1 bg-gray-100 border-2 top-1/2 -left-12 z-10'>
          <Image
            src={logo}
            alt='logo'
            width={70}
            height={70}
          />
        </motion.div>
        <motion.div
          initial={{ y: 20, x: 20 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
            type: 'spring',
          }}
          className='hidden w-[50px] h-[50px]  md:flex justify-center items-center absolute rounded-full p-1 bg-gray-100 border-2 -bottom-4 right-12 z-10'>
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
          />
        </motion.div>

        <div className="flex">
          <TrackVisibility once
            style={{transform: 'rotate(' + rand_rot_sign + rand_angle + 'deg)'}}
            >
            {({ isVisible }) =>
              isVisible && (
                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                  }}
                  >
                  <Image
                    alt='bg-photo'
                    priority
                    src={pics[0]}
                    width={200}
                    height={200}
                    objectFit='cover'
                    className={'rounded-3xl border-4 border-red-400'}
                  />
                </motion.div>
              )
            }
          </TrackVisibility>

          <TrackVisibility once
            style={{transform: 'rotate(' + (rand_rot_sign === '' ? '-' : '') + rand_angle_2 + 'deg)'}}
            >
            {({ isVisible }) =>
              isVisible && (
                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                  }}
                  >
                  <Image
                    alt='bg-photo'
                    priority
                    src={pics[0]}
                    width={200}
                    height={200}
                    objectFit='cover'
                    className={'rounded-3xl border-4 border-red-400'}
                  />
                </motion.div>
              )
            }
          </TrackVisibility>
        </div>
      </div>
    </div>
  )
}
export default EventSection
