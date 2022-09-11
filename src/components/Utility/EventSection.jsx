import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Clock, MapPin, UsersThree } from 'phosphor-react'
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
  workshop,
  left = true,
  color,
  iconColor,
}) => {
  const { resolvedTheme } = useTheme()
  if (resolvedTheme === 'dark') {
    iconColor = '#ffffff'
    color = '#ffffff'
  }
  return (
    <div
      className={`flex flex-col items-center w-4/5 gap-8 ${
        left ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
      <div
        className={`flex-col flex gap-12 items-center w-full md:w-3/4 ${
          left ? 'md:items-start' : 'md:items-end'
        }`}>
        <h1 className={`text-5xl text-shadow-light font-bold ${color}`}>
          {name}
        </h1>
        <p className='w-full md:w-4/5 text-center md:text-left'>
          {description}
        </p>
        <div
          className='p-4 rounded-xl w-3/4 md:w-fit flex flex-col gap-4'
          style={{
            border: `1px solid ${iconColor}70`,
          }}>
          <div className='flex items-center'>
            <Clock
              size={24}
              color={iconColor}
            />
            <p className='ml-2'>{date}</p>
          </div>
          <div className='flex items-center'>
            <MapPin
              color={iconColor}
              size={24}
            />
            <p className='ml-2'>{place}</p>
          </div>
        </div>
        <div className='flex items-center gap-4 w-full md:w-3/4 justify-between'>
          <div className='flex flex-col shadow-lg px-2 pb-4 rounded-lg hover:shadow-xl transition-all flex-1'>
            <div
              className='border-t-2  w-1/2 pt-2'
              style={{
                borderColor: `${iconColor}`,
              }}>
              <UsersThree
                size={24}
                color={iconColor}
              />
            </div>
            <p className='text-xl font-bold text-shadow-light'>{participant}</p>
            <p className='font-medium'>Participants</p>
          </div>

          <div className='flex flex-col shadow-lg px-2 pb-4 rounded-lg hover:shadow-xl transition-all flex-1'>
            <div
              className='border-t-2  w-1/2 pt-2'
              style={{
                borderColor: `${iconColor}`,
              }}>
              <AiOutlineFieldNumber
                size={24}
                color={iconColor}
              />
            </div>
            <p className='text-xl font-bold text-shadow-light'>{edition}</p>
            <p className='font-medium'>Edition</p>
          </div>
        </div>
      </div>
      <div className='relative md:h-[300px] flex flex-col justify-center'>
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
        <TrackVisibility once>
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
                }}>
                <Image
                  alt='bg-photo'
                  src={pics}
                  width={800}
                  height={400}
                  objectFit='cover'
                  className='rounded-3xl border-4 border-red-400'
                />
              </motion.div>
            )
          }
        </TrackVisibility>
      </div>
    </div>
  )
}
export default EventSection
