import Image from 'next/image'
import Link from 'next/link'

const h1 = props => {
  return (
    <h1
      className='text-3xl tracking-tight mb-4 text-iec-orange-2-500 '
      {...props}
    />
  )
}

const CustomLink = props => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  )
}

const MDXComponents = {
  Image,
  a: CustomLink,
  h1,
}

export default MDXComponents
