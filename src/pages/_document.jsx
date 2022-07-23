import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/favicon/site.webmanifest'
        />
      </Head>
      <body className='bg-iec-blue-4-200 dark:text-white text-iec-blue-2-500 dark:bg-iec-blue-1-500 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
