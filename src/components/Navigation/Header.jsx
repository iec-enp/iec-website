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
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])
  return (
    <nav className='py-2 flex items-center justify-between w-full'>
      <Link href='/'>
        <a>
          <Image
            src={`/brand/logos/IEC_${
              resolvedTheme == 'dark' ? 'WHITE' : 'BLACK'
            }.webp`}
            alt='IEC logo'
            width={60}
            height={60}
            layout='intrinsic'
          />
        </a>
      </Link>
      <MobileMenu />
      <div className='hidden md:flex gap-24 text-opacity-80 text-xl font-normal'>
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
      <div className='hidden items-center gap-4 md:flex'>
        <Cta
          text='Contact'
          href='/contact'
        />
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
