import { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'

function FAQ() {
  const [items, setItems] = useState([
    {
      id: 1,
      title:
        'Pourquoi IEC est uniquement ouvert aux étudiants du Génie Industriel ?',
      content:
        "La majorité des activités organisées par le club sont ouvertes au grand public, l'organisation des activités est faite par les membres du club, étudiants de la spécialité",
    },
    {
      id: 2,
      title:
        "Quelle est la différence entre IEC et les autres clubs de l'école ?",
      content:
        "La différence entre IEC et les autres clubs de l'école réside en premier lieu, dans le fait que IEC est un club qui regroupe uniquement les étudiants du Génie Industriel de l'école avec ses deux sous spécialités. En deuxième lieu, les projets et différents événements organisés par le club répondent aux besoins de la formation de la spécialité",
    },
    {
      id: 3,
      title: 'Les événements faits par IEC, sont-ils pour les étudiants de l’ENP seulement ?',
      content:
        'Non, ils sont ouverts au grand public',
    },
    {
      id: 4,
      title: 'En quelle année IEC a été créé ?',
      content:
        'IEC a été fondé le 7 mars 2020',
    },
    {
      id: 5,
      title: "Quels sont les buts d'IEC ?",
      content:
        'Vulgariser les concepts du génie industriel à travers plusieurs événements et  activités',
    },
  ])

  function Collapse({ isOpen, content }) {
    const childHeightRaw = content.clientHeight
    const childHeight = `${childHeightRaw / 16}rem`

    return (
      <div
        className='collapse'
        style={{
          maxHeight: isOpen ? childHeight : 0,
          transition: '0.4s max-height',
          overflow: 'hidden',
        }}>
        <div>
          <Content content={content} />
        </div>
      </div>
    )
  }

  function Item({ content, title, index, funct, trigger }) {
    return (
      <li
        className='w-[100%]'
        style={{ animationDelay: '0.1s', animationDuration: '1.5s' }}
        layout
        onClick={funct}
        initial={{ borderRadius: 10 }}>
        <div
          layout
          className='flex py-5 px-6 items-center justify-between font-bold bg-white rounded-lg  text-iec-blue-2-500'>
          {title}
          <div className='w-5 h-5 text-iec-orange-2-500 flex justify-center items-center rounded-full '>
          <AiFillPlusCircle />
          </div>
        </div>
        <Collapse
          isOpen={trigger[index].status}
          content={content}>
          <section className='sample-content'>
            <h1>content</h1>
            <p>content</p>
          </section>
        </Collapse>
      </li>
    )
  }

  function Content({ content }) {
    return <div className='w-full px-6 text-center py-3'>{content}</div>
  }

  const [trigger, setTrigger] = useState([
    { status: false },
    { status: false },
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
  }

  return (
    <>
      <ul
        className='flex w-3/5  justify-center my-12 flex-col  gap-3'
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
      </ul>
    </>
  )
}

export default FAQ
