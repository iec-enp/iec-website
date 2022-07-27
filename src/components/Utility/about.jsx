import { useState } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'

function About() {
  const [toggler, setToggler] = useState([
    { toggler1: false },
    { toggler2: false },
    { toggler3: false },
  ])

  return (
    <>
      <div>
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
          className='w-full  flex py-5 px-6 items-center justify-between font-bold bg-iec-orange-2-500 bg-opacity-[7%] text-iec-orange-2-500'>
          Our History
          <BsCaretRightFill className={`transition-all duration-300 ${toggler.toggler1 ? "rotate-90" : ""}`} />
        </button>
        <p className={`flex transition-all duration-700 px-7 py-4 ${toggler.toggler1 ? 'inline' : 'hidden'}`}>
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
          className='w-full flex py-5 px-6 items-center justify-between font-bold bg-iec-orange-2-500 bg-opacity-[7%] text-iec-orange-2-500'>
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
          className='w-full flex py-5 px-6 items-center justify-between font-bold bg-iec-orange-2-500 bg-opacity-[7%] text-iec-orange-2-500'>
          Our Vision
          <BsCaretRightFill className={`transition-all duration-300  ${toggler.toggler3 ? "rotate-90" : ""}`}/>
        </button>
        <p className={`flex px-7 py-3 toggle ${toggler.toggler3 ? 'inline' : 'hidden'}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo
          perferendis ab minima maiores quos et doloribus necessitatibus!
          Sapiente esse obcaecati aliquid ab.
        </p>
      </div>
    </>
  )
}

export default About
