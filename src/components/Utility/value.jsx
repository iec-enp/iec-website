import Image from 'next/image'

function Value({theme}) {
  
  const values = [
    {
      image: '/images/trophy.svg',
      imageWhite: '/images/trophy_white.svg',
      title: 'Engagement',
      text: "Se dévouer à un partage mutuelle et propice en y mettant du sien pour la cause IEC et le développement de la communauté GI",
    },
    {
      image: '/images/thumb.svg',
      imageWhite: '/images/thumb_white.svg',
      title: 'Intégrité',
      text: 'Nous faisons ce qui est juste et honnête avec sérieux, responsabilité et professionnalisme',
    },
    {
      image: '/images/innovation.svg',
      imageWhite: '/images/innovation_white.svg',
      title: 'Innovation',
      text: "Nous nous n'arrêtons jamais d'apprendre et d’améliorer notre façon de faire avec une vision durable",
    },
  
    {
      image: '/images/people.svg',
      imageWhite: '/images/people_white.svg',
      title: 'Appartenance',
      text: 'Nous croyons en l’importance de l’appartenance au groupe, en travaillant dans un milieux de respect mutuel, de confiance, et de transparence',
    },
  ]

  const Item = ({ value }) => {
    return (
      <>
        <div className='flex flex-col ' >
          <div className='w-14 h-14 mx-auto img-icon relative '>
            <Image
              src={theme == 'dark' ? value.imageWhite :value.image}
              alt='image1'
              width={20}
              height={20}
              layout='responsive'
            />
          </div>
          <h1 className='text-xl my-4 mx-auto font-bold'>{value.title}</h1>
          <p className='mx-auto text-iec-gray-700 text-sm text-center'>
            {value.text}
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='md:flex grid grid-cols-2   w-4/5 md:gap-15 gap-14'>
        {values.map((value, index) => (
          <div key={index}>
            <Item value={value} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Value
