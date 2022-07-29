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


  function Item({ content, title}) {
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
          { isOpen && <Content content={content} />}
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
          {items.map(item => (
            <Item
              key={item}
              title={item.title}
              content={item.content}
              
            />
          ))}
        </motion.ul>
      </AnimateSharedLayout>

      {/* <div >
        <button
          onClick={() =>
            setToggler(e => {
              return {
                ...e,
                toggler1: !e.toggler1,
                toggler2: false,
                toggler3: false,
              }
            })
          }
          className='w-full  flex py-5 px-6 items-center justify-between font-bold bg-iec-orange-2-500 bg-opacity-[7%] dark:bg-white text-iec-orange-2-500'>
          Our History
          <BsCaretRightFill className={`transition-all duration-300 ${toggler.toggler1 ? "rotate-90" : ""}`} />
        </button>
        <p> className={`flex dropdown px-7 transition-[display] duration-700 py-4 ${toggler.toggler1 ? 'block ' : 'hidden'}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo
          perferendis ab minima maiores quos et doloribus necessitatibus!
          Sapiente esse obcaecati aliquid ab.
        </p>
      </div>
      <div>
        <button
         onClick={() =>
            setToggler(e => {
              return {
                ...e,
                toggler1: false,
                toggler2: !e.toggler2,
                toggler3: false,
              }
            })
          }
          className='w-full flex py-5 px-6 items-center justify-between font-bold dark:bg-white bg-iec-orange-2-500 bg-opacity-[7%] text-iec-orange-2-500'>
          Our Mission
          <BsCaretRightFill className={`transition-all duration-300  ${toggler.toggler2 ? "rotate-90" : ""}`} />
        </button>
        <p className={`flex px-7 py-4 ${toggler.toggler2 ? 'inline' : 'hidden'}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo
          perferendis ab minima maiores quos et doloribus necessitatibus!
          Sapiente esse obcaecati aliquid ab.
        </p>
      </div>
      <div>
        <button
         onClick={() =>
            setToggler(e => {
              return {
                ...e,
                toggler1: false,
                toggler2: false,
                toggler3: !e.toggler3,
              }
            })
          }
          className='w-full before:block dropdown flex py-5 px-6 items-center justify-between font-bold dark:bg-white bg-iec-orange-2-500 bg-opacity-[7%] text-iec-orange-2-500'>
          Our Vision
          <BsCaretRightFill className={`transition-all duration-300  ${toggler.toggler3 ? "rotate-90" : ""}`}/>
        </button>
        <p className={` w-full dropdown__items  px-7 py-3 transition-[height] ease-linear ${toggler.toggler3 ? 'inline opacity-100 max-h-10' : 'hidden'}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo
          perferendis ab minima maiores quos et doloribus necessitatibus!
          Sapiente esse obcaecati aliquid ab.
        </p>
      </div> */}
    </>
  )
}

export default About
