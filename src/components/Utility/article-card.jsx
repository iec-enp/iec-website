import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'

function ArtricleCard({ title, image, href, description, date }) {
  return (
    <>
      <div className='shadow-2xl rounded-2xl group card hover:-translate-y-4 bg-white w-full'>
        <div className='relative w-full h-60'>
          <Link href={`/articles/${href}`}>
            <a className='absolute link flex rounded-t-2xl z-10 h-full w-full justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 text-iec-orange-2-500 text-2xl '>
              <BsLink45Deg className='group-hover:bg-white hidden group-hover:flex rounded-full pulse link  w-14 h-14 p-3' />
            </a>
          </Link>
          <Image
            src={image}
            placeholder='blur'
            blurDataURL
            alt='image1'
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg object-bottom group-hover:object-top transition-all duration-1000 ease-in-out'
          />
          {/* <Image
            className='rounded-lg object-bottom group-hover:object-top transition-all duration-1000 ease-in-out'
            src={image}
            alt='image1'
            width={400}
            height={250}
            layout='intrinsic'
            // objectFit='cover'
          /> */}
        </div>

        <div className='mx-6 my-6 flex flex-col gap-1 '>
          <div className='md:h-[170px] sm:h-[130px]'>
            <div className='flex gap-3 items-center text-xs font-semibold text-iec-orange-2-500'>
              <AiOutlineClockCircle size={20} />
              <h1 className='text-md'> {date}</h1>
            </div>
            <h1 className='font-bold my-2 text-iec-blue-2-500 text-lg'>
              {title}
            </h1>
            <p className='text-iec-gray-800 text-base line-clamp-3'>
              {description}
            </p>
          </div>

          <div className='flex justify-start items-center'>
            <Link href={`/articles/${href}`}>
              <a className='w-fit inline-block shadow-md bg-iec-orange-2-500 text-xs font-bold px-4 py-2 mt-4 rounded-full hover:bg-white hover:text-iec-orange-2-500'>
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtricleCard
