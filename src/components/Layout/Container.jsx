import Footer from '@/components/Navigation/Footer'
import Header from '@/components/Navigation/Header'
import Head from 'next/head'

export default function Container(props) {
  const { children, ...customMeta } = props
  const meta = {
    title: 'IEC - Industrial Engineers Club',
    description: `IEC is an academic club of the National Polytechnic School, which aims to strengthen the culture of Industrial Engineering in companies, to encourage the talents, creativity and personal development of its members. It allows students to build a solid professional project by helping them achieve their goals through the organization of various events.`,
    type: 'website',
    image:
      'https://iecenp.com/_next/image?url=%2Fimages%2Fpictures%2Fimg2.jpg&w=1080&q=75',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          content={meta.description}
          name='description'
        />
        <meta
          property='og:image'
          content={meta.image}
        />
        <meta
          property='og:type'
          content={meta.type}
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div className='min-h-screen flex flex-col items-center max-w-[1500px] mx-auto container gap-6'>
        <Header />
        <main className='w-full pb-8'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
