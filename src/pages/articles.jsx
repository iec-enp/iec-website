import ArticleCard from '@/components/Card/ArticleCard'
import Container from '@/components/Layout/Container'
import { getBlogPosts } from '@/utils/get-blog-post'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Articles({ posts }) {
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setLoaded(true)
      setLoading(false)
    }, 1000)
  }

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container title='Articles - IEC - Industrial Engineers Club'>
      <div className='mt-40 md:mt-32 flex flex-col items-center gap-6'>
        <h1 className='text-6xl font-extrabold uppercase'>
          Nos <span className='text-iec-orange-2-500'>Articles</span>
        </h1>
        <div className='flex items-center gap-4 w-1/2 md:w-1/3'>
          <input
            type='text'
            placeholder='Rechercher...'
            className='bg-white rounded-xl shadow-lg p-2 text-iec-blue-2-500 flex-1 outline-none'
            value={search}
            onChange={handleSearch}
          />
        </div>
        {!search && (
          <div className='group grid grid-cols-2 bg-white text-iec-blue-2-500 w-4/5 md:w-3/5 py-2 px-4 rounded-lg gap-6 shadow-lg'>
            <div className='w-full relative'>
              <Image
                src={posts[0].backdrop_path}
                placeholder='blur'
                blurDataURL
                alt='image1'
                layout='fill'
                objectFit='cover'
                className='rounded-lg object-bottom group-hover:object-top transition-all duration-1000 ease-in-out'
              />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between'>
                <p className='iec-orange-2-500'>{posts[0].readingTime}</p>
                <p className='opacity-80 font-light'>{posts[0].date}</p>
              </div>
              <h1 className='font-bold text-lg'>{posts[0].title}</h1>
              <p className='text-sm line-clamp-4'>{posts[0].description}</p>
              <div className='flex justify-between items-center'>
                <p className='opacity-80 font-light'>By IEC</p>
                <Link href={`/article/${posts[0].slug}`}>
                  <a className='text-iec-orange-2-500'>Suite...</a>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 text-iec-blue-2-500 w-4/5 md:w-3/5 gap-12 md:gap-8 mt-8'>
          {!search &&
            (loaded
              ? posts.slice(1).map((post, idx) => (
                  <ArticleCard
                    key={idx}
                    {...post}
                  />
                ))
              : posts.slice(1, 5).map((post, idx) => (
                  <ArticleCard
                    key={idx}
                    {...post}
                  />
                )))}
          {search &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post, idx) => (
              <ArticleCard
                key={idx}
                {...post}
              />
            ))}
        </div>
        {!loaded && (
          <button
            onClick={loadMore}
            className='flex items-center gap-4 dark:border-white border-2 py-2 px-4 border-iec-blue-2-500 hover:bg-iec-blue-2-500 hover:text-white dark:hover:bg-white dark:hover:text-iec-blue-2-500'>
            {loading && (
              <div
                style={{
                  borderTopColor: 'transparent',
                }}
                className='w-6 h-6 border-2 border-iec-orange-2-500 border-solid rounded-full animate-spin'></div>
            )}
            Charger Plus d&apos;article
          </button>
        )}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = getBlogPosts()
  return {
    props: {
      posts,
    },
  }
}
