import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cta from '../Utility/Cta'
import ThemeToggleBtn from '../Utility/ThemeToggleBtn'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()
  const [Toggler, setToggler] = useState(false)
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  function changeNavbar() {
    if (window.pageYOffset > 5) {
      setToggler(true)
    } else {
      setToggler(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)

    return () => {
      window.removeEventListener('scroll', changeNavbar)
    }
  })

  return (
    <nav
      className={`flex items-center z-10 w-4/5 md:mt-4 rounded-2xl px-4 py-3 justify-between fixed top-0 ${
        Toggler ? 'bg-white  dark:text-iec-blue-2-500' : ' bg-transparent'
      }`}>
      <Link href='/'>
        <a>
          <Image
            src={`/brand/logos/IEC_${
              resolvedTheme == 'light' ? 'BLACK' : Toggler ? 'BLACK' : 'WHITE'
            }.webp`}
            alt='IEC logo'
            width={60}
            height={60}
            layout='intrinsic'
          />
        </a>
      </Link>

      <div className='hidden lg:flex gap-24 text-opacity-80 text-xl font-normal'>
        <NavLink
          href='/'
          text='Home'
          active={router.asPath === '/'}
        />
        <NavLink
          href='/articles'
          text='Articles'
          active={router.asPath === '/articles'}
        />
        <NavLink
          href='/events'
          text='Events'
          active={router.asPath === '/events'}
        />
      </div>
      <div className='hidden md:block'>
        <Cta
          text='Contact'
          href='/contact'
        />
      </div>
      <div className='items-center gap-4 flex'>
        <MobileMenu toggler={Toggler} />
        <ThemeToggleBtn
          mounted={mounted}
          setTheme={setTheme}
          resolvedTheme={resolvedTheme}
        />
      </div>
    </nav>
  )
}

export default Header
