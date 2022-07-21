const { default: Link } = require('next/link')

const Cta = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className='text-iec-orange-2-500 text-xl px-8 py-[2px] border-2 border-iec-orange-2-500 rounded-full hover:bg-iec-orange-2-500 hover:text-white transition-all hover:border-transparent'>
        {text}
      </a>
    </Link>
  )
}

export default Cta
