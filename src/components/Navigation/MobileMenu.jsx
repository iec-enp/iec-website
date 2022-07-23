import { useEffect, useState } from 'react'

export default function MobileMenu({ toggler }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className='visible md:hidden bg-transparent w-10 h-10 relative burger '
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}>
        <MenuIcon
          data-hide={isMenuOpen}
          toggler={toggler}
        />
        <CrossIcon
          data-hide={!isMenuOpen}
          toggler={toggler}
        />
      </button>
    </>
  )
}

function MenuIcon(props) {
  const { toggler } = props
  return (
    <svg
      className={`h-5 w-5 absolute ${
        toggler ? 'dark:text-iec-blue-2-500' : 'dark:text-white'
      }`}
      width='28'
      height='28'
      viewBox='0 0 18 18'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CrossIcon(props) {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-900 dark:text-gray-100'
      viewBox='0 0 18 18'
      width='28'
      height='28'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  )
}
