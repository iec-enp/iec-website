import Image from 'next/image'
import Carousel from 'react-elastic-carousel'
import { MdOutlineFormatQuote } from 'react-icons/md'

function Testimonial() {

    const breakPoints =[ { width: 1, itemsToShow: 1 , itemsToScroll: 1},
        { width: 887, itemsToShow: 2 , itemsToScroll: 1},
       
      ]

  function Card({ FullName, Position, Text, photo }) {
    return (
      <>
        <div className='w-full  relative my-4'>
          <div className='w-[4.5rem] h-[4.5rem] mt-9 absolute rounded-full border-2 border-iec-orange-2-500'>
            <Image
              className='rounded-full'
              src={photo}
              width={50}
              height={50}
              layout='responsive'
              alt='image1'
            />
          </div>

          <div className='flex-col py-4 pl-14 pr-6 my-4 mx-8 shadow-xl rounded-xl'>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col'>
                <h1 className='block flex-col font-bold'>{FullName}</h1>
                <h2 className='opacity-90'>{Position}</h2>
              </div>
              <MdOutlineFormatQuote className='text-7xl text-iec-orange-2-500' />
            </div>
            <p>{Text}</p>
          </div>
        </div>
      </>
    )
  }


  return (
    <>
      <Carousel cclassName="styling-example" itemsToShow={2} enableAutoPlay autoPlaySpeed={4000} pagination={false} breakPoints={breakPoints}>
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
        <Card
          FullName='Peter Packer'
          photo='/images/profil.jpg'
          Position='Senior Consultant'
          Text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic quam sapiente doloremque ipsa? Quod sapiente quae alias magni.'
        />
      </Carousel>
    </>
  )
}

export default Testimonial
