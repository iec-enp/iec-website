import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

import { BsCaretRightFill } from 'react-icons/bs'

function About() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Our History',
      content:
        'History Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
    {
      id: 2,
      title: 'Our Vision',
      content:
        "Devenir un label en terme d’organisation et une référence dans la communauté estudiantine "
    },
    {
      id: 3,
      title: 'Our Mission',
      content:
        "Promouvoir le Génie Industriel en Algérie, renforcer la formation et le réseau professionnel, et développer  la communauté internationale des étudiants et anciens diplômés du  GI"
    },
  ])

  function Item({ content, title, index, funct, trigger }) {
    return (
      <motion.li
        layout
        onClick={funct}
        initial={{ borderRadius: 10 }}>
        <motion.div
          layout
          className='w-full  flex py-5 px-6 items-center justify-between font-bold rounded-lg bg-iec-orange-2-500 bg-opacity-[15%] dark:bg-white text-iec-orange-2-500'>
          {title}
          <BsCaretRightFill
            className={`transition-all ${
              trigger[index].status ? 'rotate-90' : ''
            } duration-500 `}
          />
        </motion.div>
        <AnimatePresence>
          {trigger[index].status && <Content content={content} />}
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

  const [trigger, setTrigger] = useState([
    { status: false },
    { status: false },
    { status: false },
  ])
  const clickHandler = i => {
    let tab = [...trigger]
    tab[i].status = !tab[i].status
    for (const [index, name] of tab.entries()) {
      if (index != i) {
        tab[index].status = false
      }
    }
    setTrigger(tab)
    console.log(trigger)
  }

  return (
    <>
      <AnimateSharedLayout>
        <motion.ul
          className='flex  flex-col  gap-3'
          layout
          initial={{ borderRadius: 25 }}>
          {items.map((item, i) => (
            <Item
              key={i}
              index={i}
              title={item.title}
              content={item.content}
              funct={() => clickHandler(i)}
              trigger={trigger}
            />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </>
  )
}

export default About
