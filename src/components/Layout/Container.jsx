import Footer from '@/components/Navigation/Footer'
import Header from '@/components/Navigation/Header'
import Head from 'next/head'

export default function Container(props) {
  const { children, ...customMeta } = props
  const meta = {
    description: `IEC is an academic club of the National Polytechnic School, which aims to strengthen the culture of Industrial Engineering in companies, to encourage the talents, creativity and personal development of its members. It allows students to build a solid professional project by helping them achieve their goals through the organization of various events.`,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta
          content={meta.description}
          name='description'
        />
        <meta
          property='og:type'
          content={meta.type}
        />
      </Head>
      <div className='min-h-screen flex flex-col items-center max-w-[1500px] mx-auto px-4'>
        <Header />
        <main className=' w-full'>{children}</main>
        <div className='m-auto' />
        <Footer />
      </div>
    </>
  )
}
