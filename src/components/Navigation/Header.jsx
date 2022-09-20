import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cta from '../Utility/Cta'
import ThemeToggleBtn from '../Utility/ThemeToggleBtn'
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
    <>
      <nav
        style={Toggler ? { boxShadow: '0 1rem 3rem rgb(0 0 0 / 18%)' } : {}}
        className={`flex items-center  z-[1000] w-11/12 md:w-10/12 mt-2 rounded-2xl px-4 py-1 justify-between fixed top-0 ${
          Toggler ? 'bg-white  dark:text-iec-blue-2-500' : ' bg-transparent'
        }`}>
        <div className='md:hidden'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

            </label>
            <ul
              tabIndex={0}
              className='menu text-iec-blue-1-500 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56'>
              <li >
                <Link href='/' >
                  <a className='bg-white hover:bg-gray-200 active:bg-iec-orange-2-500'>Accueil</a>
                </Link>
              </li>
              <li>
                <Link href='/articles'>
                  <a className='bg-white hover:bg-gray-200 active:bg-iec-orange-2-500'>Articles</a>
                </Link>
              </li>
              <li>
                <Link href='/events'>
                  <a className='bg-white hover:bg-gray-200 active:bg-iec-orange-2-500'>Évènements</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href='/'>
          <a className='md:w-auto w-20'>
            <Image
              src={`/brand/logos/IEC_${
                resolvedTheme == 'light' ? 'BLEU' : Toggler ? 'BLEU' : 'WHITE'
              }.webp`}
              alt='IEC logo'
              width={60}
              height={60}
              layout='intrinsic'
            />
          </a>
        </Link>

        <div className=' md:gap-10 hidden md:flex  gap-8   text-opacity-80 text-sm  md:text-xl font-normal'>
          <NavLink
            href='/'
            text='Acceuil'
            active={router.asPath === '/'}
          />
          <NavLink
            href='/articles'
            text='Articles'
            active={router.asPath === '/articles'}
          />
          <NavLink
            href='/events'
            text='Évènements'
            active={router.asPath === '/events'}
          />
        </div>
        
        
        <div className='items-center gap-4 flex'>
          {/* <MobileMenu toggler={Toggler.toString()} /> */}
          <Cta
          text='Nous Contacter'
          href='/contact'
        />
          <ThemeToggleBtn
            mounted={mounted}
            setTheme={setTheme}
            resolvedTheme={resolvedTheme}
          />
        </div>
      </nav>
    </>
  )
}

export default Header
