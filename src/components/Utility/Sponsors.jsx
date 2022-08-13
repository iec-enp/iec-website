import Image from 'next/image'

function Sponsors() {
  return (
    <>
      {/* <div className='body-slider mt-6 py-8'>
        <div className='sliderrr'>
          <div className='slide-track gap-3'>
            <div className='slidex flex h-full my-auto px-6 py-6'>
              <Image
                src='/images/logo/datacamp.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            
            <div className='slidex flex h-full my-auto px-6 py-7'>
              <Image
                src='/images/logo/ooredoo.png'
                height='60'
                width='200'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/palmary.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-5'>
              <Image
                src='/images/logo/pwc.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/saa.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-12 py-4'>
              <Image
                src='/images/logo/ey.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/tulip.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-6'>
              <Image
                src='/images/logo/datacamp.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            
            <div className='slidex flex h-full my-auto px-6 py-7'>
              <Image
                src='/images/logo/ooredoo.png'
                height='60'
                width='200'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/palmary.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-5'>
              <Image
                src='/images/logo/pwc.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/saa.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-12 py-4'>
              <Image
                src='/images/logo/ey.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
            <div className='slidex flex h-full my-auto px-6 py-4'>
              <Image
                src='/images/logo/tulip.png'
                height='100'
                width='250'
                alt=''
                layout='intrinsic'

              />
            </div>
          </div>
        </div>
      </div> */}

      <div className=' grid md:grid-cols-3 gap-y-10  grid-cols-2 pb-10 md:gap-y-3'>
        <div className='text-gray-900 flex content-center justify-center'>
          <Image
            src='/images/logo/datacamp.svg'
            height='32'
            width='160'
            alt=''
            layout='intrinsic'
          />
        </div>
        <div className='flex content-center justify-center'>
          <Image
            className='text-gray-900'
            src='/images/logo/saa.svg'
            height='110'
            width='160'
            alt=''
            layout='intrinsic'
          />
        </div>
        
        <div className='flex content-center justify-center'>
          <Image
            className='text-gray-900'
            src='/images/logo/ooredoo.svg'
            height='32'
            width='165'
            alt=''
            layout='intrinsic'
          />
        </div>
        <div className='flex  justify-center'>
          <Image
            className='text-gray-900'
            src='/images/logo/ey.svg'
            height='50'
            width='100'
            alt=''
            layout='intrinsic'
          />
        </div>
        <div className='flex content-center justify-center'>
          <Image
            className='text-gray-900 '
            src='/images/logo/pwc.svg'
            height='70'
            width='130'
            alt=''
            layout='intrinsic'
          />
        </div>
        <div className='flex content-center justify-center'>
          <Image
            className='text-gray-900'
            src='/images/logo/palmary.svg'
            height='60'
            width='142'
            alt=''
            layout='intrinsic'
          />
        </div>
        
      </div>
    </>
  )
}

export default Sponsors
