import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'

function AboutImage() {
  const slides = [0, 1, 2, 3, 4, 5]
  const [currentImage, setCurrentImage] = useState(0)
  const [IntervalId, setIntervalId] = useState(0)
  const timer = useRef(null)

  const nextImage = () => {
    setCurrentImage(prev => (prev < 5 ? prev + 1 : 0))
  }

  const ImageAnimation = () => {
    if (IntervalId) {
      clearInterval(IntervalId)
      setIntervalId(0)
      return
    }
    timer.current = setTimeout(nextImage, 500)
    const newId = setInterval(nextImage, 3000)
    setIntervalId(newId)
  }

  useEffect(() => {
    return () => {
      clearInterval(IntervalId)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <>
      <div className='overflow-hidden w-full  relative justify-center items-center flex group anim'>
        <div className={`absolute flex z-[100] h-full w-full justify-center items-center bg-black ${IntervalId == 0 ? 'bg-opacity-30':'bg-opacity-0'}  text-iec-orange-2-500 text-2xl `}>
          <button onClick={ImageAnimation} className={`bg-white rounded-full p-3 ${IntervalId ? "hidden group-hover:block" : ""}`}>
            <BsPlayFill className={`${IntervalId ? 'hidden' : ' '}`} />
            <BsPauseFill className={`${IntervalId ? '' : 'hidden '}`} />
          </button>
        </div>
        <div
          className='whitespace-nowrap '
          style={{ transform: `translateX(${-currentImage * 100}%)` }}>
          {slides.map((value, index) => {
            return (
              <div
                key={index}
                className='inline-block w-full '>
                <div
                  className={`flex justify-center w-full ${
                    index == currentImage ? 'sls active' : 'sls'
                  }`}>
                  <Image
                    src={`/images/pictures/img${index}.webp`}
                    alt={`img${index}`}
                    width={500}
                    height={350}
                    layout='intrinsic'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AboutImage
