import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({
  backdrop_path,
  title,
  description,
  slug,
  date,
  readingTime,
  category,
  author,
}) => {
  return (
    <motion.div
      className='group flex flex-col bg-white shadow-lg gap-4 rounded-lg pb-4'
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}>
      <div className='w-full h-60 relative'>
        <Image
          src={backdrop_path}
          placeholder='blur'
          blurDataURL
          alt={title}
          layout='fill'
          objectFit='cover'
          className='rounded-lg object-center group-hover:object-top transition-all duration-1000 ease-in-out'
        />
      </div>
      <div className='flex justify-between px-4 '>
        <p className='iec-orange-2-500'>{readingTime}</p>
        <p className='opacity-80 font-light'>{date}</p>
      </div>
      <h1 className='font-bold text-lg px-4'>{title} <span className='text-sm font-light opacity-80'>{author != "" ? "- " + author : ""}</span></h1>
      <p className='text-sm line-clamp-3 px-4'>{description}</p>
      <div className='mt-auto flex justify-between px-4'>
        <p className='opacity-80 font-light'>{category}</p>
        <Link href={`/articles/${slug}`}>
          <a className='text-iec-orange-2-500 text-center  font-bold text-lg'>
            Plus
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default ArticleCard
