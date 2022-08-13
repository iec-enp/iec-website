import Image from 'next/image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'

function ArtricleCard({ title, image }) {
  return (
    <>
      <div className='shadow-2xl rounded-2xl group card hover:-translate-y-4 bg-white '>
        <div className='relative'>
          <div className='absolute link flex rounded-t-2xl z-10 h-full w-full justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 text-iec-orange-2-500 text-2xl '>
            <BsLink45Deg className='group-hover:bg-white hidden group-hover:flex rounded-full pulse link  w-14 h-14 p-3' />
          </div>
          <Image
            className='rounded-t-2xl'
            src={image}
            alt='image1'
            width={400}
            height={250}
            layout='responsive'
          />
        </div>

        <div className='mx-6 my-6'>
          <div className='flex gap-3 items-center text-xs font-semibold mt-4 text-iec-orange-2-500'>
            <AiOutlineClockCircle />
            <h1 className=''> AUGUST 6,2022</h1>
          </div>
          <h1 className='font-bold my-2 text-iec-blue-2-500 text-lg'>
            {title}
          </h1>
          <p className='text-iec-gray-800 text-base'>
            If you are going to use a passage of Lorem Ipsum you need to be sure
            there anything embarrassing hidden in the middle of text
          </p>
          <button className='bg-iec-orange-2-500 text-xs font-bold px-4 py-2 mt-4 rounded-full hover:bg-white hover:text-iec-orange-2-500'>
            Read More
          </button>
        </div>
      </div>
    </>
  )
}

export default ArtricleCard
