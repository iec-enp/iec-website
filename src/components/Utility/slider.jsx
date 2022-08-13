import Image from 'next/image'

function Slider({Slides, current}) {


  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null
  }

  return (
    <>
    

      <div
        className='carousel-inner '
        style={{ transform: `translateX(${-current * 100}%)`}}>
        {Slides.map((slide, index) => {
          return (
            <div 
            key={index}
            className='inline-block  w-full h-full'>
              <div className='bg-white rounded-full  mx-auto  flex justify-center'>
              <Image 
          
            src={slide.logo}
            alt=""
            width={300}
            height={300}
            layer="intrinsic"
            />

              </div>
          
           </div>
          )
        })}
      </div>
    </>
  )
}

export default Slider