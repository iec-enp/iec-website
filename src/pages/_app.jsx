import '@/styles/globals.css'
import 'animate.css'
import '@fontsource/dancing-script'
import '@fontsource/mulish'
import '@fontsource/poppins'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
