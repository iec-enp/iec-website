import Container from '@/components/Layout/Container'
import { format, parseISO } from 'date-fns'

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Industrial Engineers Club`}
      description={frontMatter.description}
      image={`https://iecenp.com${frontMatter.backdrop_path}`}
      date={new Date(frontMatter.date).toISOString()}
      type='article'>
      <article className='mt-44 md:mt-36 flex flex-col justify-center items-start max-w-4xl px-12 w-full mx-auto gap-4'>
        <h1 className='font-bold text-3xl md:text-5xl mb-4 text-center text-black dark:text-white'>
          {frontMatter.title}
        </h1>
        <div className='flex flex-col justify-between items-start  w-full mt-2 gap-2'>
          <h1>Catégorie</h1>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <p className='text-sm text-gray-700 dark:text-gray-300 '>
                {frontMatter.category}
              </p>
            </div>
            <p className='text-sm dark:text-white text-opacity-60 text-[#12213099] '>
              {format(parseISO(frontMatter.date), 'dd/MM/yyyy')}
            </p>
          </div>
        </div>
        <hr className='w-full border-1 border-iec-blue-3-200 dark:border-iec-gray-900 ' />

        <div className='prose dark:prose-invert max-w-none w-full prose-img:rounded-xl prose-lg prose-quoteless'>
          {children}
        </div>
      </article>
    </Container>
  )
}
