import { useCallback, useEffect } from 'react'

function Counter({ end, id, speed, step }) {
  const onScroll = useCallback(() => {
    var element = document.getElementById(id)
    var elemRect = element.getBoundingClientRect()
    var offset = Math.ceil(elemRect.top + window.pageYOffset)
    if (window.innerHeight + window.pageYOffset > offset) {
      countUp()
      window.removeEventListener('scroll', onScroll)
    }
  }, [countUp, id])

  const countUp = useCallback(() => {
    let from = 0
    let to = end
    let pas = step
    let interval = speed

    if (from == to) {
      document.getElementById(id).textContent = from
      return
    }

    const counter = setInterval(() => {
      from += pas
      document.getElementById(id).textContent = from
      if (from >= to) {
        window.removeEventListener('scroll', onScroll)
        clearInterval(counter)
      }
    }, interval)
  }, [end, id, onScroll, speed, step])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <span id={id}></span>
    </>
  )
}

export default Counter
