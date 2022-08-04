import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

import { BsCaretRightFill } from 'react-icons/bs'

function About() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Our History',
      status: true,
      content:
        'History Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
    {
      id: 2,
      title: 'Our Vision',
      status: false,
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
    {
      id: 3,
      title: 'Our Mission',
      status: false,
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
  ])

  function Item({ content, title }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
      <motion.li
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 10 }}>
        <motion.div
          layout
          className='w-full  flex py-5 px-6 items-center justify-between font-bold bg-iec-orange-2-500 bg-opacity-[7%] dark:bg-white text-iec-orange-2-500'>
          {title}
          <BsCaretRightFill className={`transition-all duration-300 `} />
        </motion.div>
        <AnimatePresence>
          {isOpen && <Content content={content} />}
        </AnimatePresence>
      </motion.li>
    )
  }

  function Content({ content }) {
    return (
      <motion.div
        className='w-full px-6 text-center py-3'
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {content}
      </motion.div>
    )
  }

  return (
    <>
      <AnimateSharedLayout>
        <motion.ul
          className='flex flex-col gap-3'
          layout
          initial={{ borderRadius: 25 }}>
          {items.map((item, i) => (
            <Item
              key={i}
              title={item.title}
              content={item.content}
            />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </>
  )
}

export default About
