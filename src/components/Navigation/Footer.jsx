import { useTheme } from 'next-themes'
import Link from 'next/link'
import { EnvelopeSimple, MapPin } from 'phosphor-react'

const ExternalLink = ({ href, children }) => (
  <a
    className='hover:text-opacity-100 hover:underline transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}>
    {children}
  </a>
)

const Footer = () => {
  const { resolvedTheme } = useTheme()

  return (
    <footer className='text-opacity-80 flex flex-col justify-start items-start mx-auto w-full mb-2'>
      <hr className='w-full border-1 border-iec-blue-3-100 dark:border-iec-gray-900 mb-8' />
      <div className='w-full flex flex-col gap-8 pb-8 sm:flex-row sm:justify-between'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Home
            </a>
          </Link>
          <Link href='/articles'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Articles
            </a>
          </Link>
          <Link href='/events'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Events
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Home
            </a>
          </Link>
          <Link href='/articles'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Articles
            </a>
          </Link>
          <Link href='/events'>
            <a className='hover:text-opacity-100 hover:underline transition'>
              Events
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://www.instagram.com/iec.enp/'>
            Instagram
          </ExternalLink>
          <ExternalLink href='https://www.facebook.com/IEC.ENPhttps://github.com/leerob'>
            Facebook
          </ExternalLink>
          <ExternalLink href='https://www.linkedin.com/company/industrial-engineers-club-iec/mycompany/'>
            Linkedin
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <EnvelopeSimple size={24} />
            <a href='mailto:iec@g.enp.edu.dz?subject=Contact'>
              iec@g.enp.edu.dz
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <MapPin size={24} />
            <ExternalLink href='https://www.google.com/maps/place/Ecole+Nationale+Polytechnique/@36.7231786,3.1485784,17z/data=!3m1!4b1!4m5!3m4!1s0x128e52692905dcdf:0x2bb008bbddc747d3!8m2!3d36.7231786!4d3.1507671'>
              Ecole Nationale Polytechnique-Alger
            </ExternalLink>
          </div>
          <Link href='/contact'>
            <a className='px-4 py-1 border-[1px] border-transparent bg-iec-orange-2-500 rounded-lg text-center text-black hover:bg-transparent dark:hover:text-white transition-all dark:hover:border-white hover:border-iec-orange-2-500'>
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <hr className='w-full border-1 border-iec-blue-3-100 dark:border-iec-gray-900 mb-8' />
      <p className='text-center w-full'>
        &copy; 2020 Copyright:{' '}
        <span className='text-iec-orange-2-500'>
          IEC - Industrial Engineers Club.
        </span>
      </p>
    </footer>
  )
}

export default Footer
