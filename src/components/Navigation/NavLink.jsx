const { default: Link } = require('next/link')

const NavLink = ({ href, text, active }) => {
  return (
    <Link href={href}>
      <a className={`${active ? 'text-iec-orange-2-500' : ''} text-lg group`}>
        {text}
        <div
          className={`${
            active ? 'w-full ' : 'w-0'
          } h-[2px] bg-iec-orange-2-500 group-hover:w-full transition-all`}
        />
      </a>
    </Link>
  )
}

export default NavLink
