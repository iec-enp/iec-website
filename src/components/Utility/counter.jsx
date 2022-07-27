import CountUp from 'react-countup'

function Counter({end}) {
  return (
    <>
      <CountUp
        start={0}
        end={end}
        duration={3}  
        enableScrollSpy={true}
        scrollSpyDelay={10}
        scrollSpyOnce={true}
      />
    </>
  )
}

export default Counter
