import Image from 'next/image'

function Value() {
  const values = [
    {
      image: '/images/thumb.svg',
      title: 'Integrity',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to besure there',
    },
    {
      image: '/images/innovation.svg',
      title: 'Innovation',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to besure there',
    },
    {
      image: '/images/trophy.svg',
      title: 'Engagement',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to besure there',
    },
    {
        image: '/images/people.svg',
        title: 'Appartenance',
        text: 'If you are going to use a passage of Lorem Ipsum, you need to besure there',
      },
  ]

  const Item = ({ value}) => {
    return (
      <>
        <div className='flex flex-col '>
          <div className='w-14 h-14 mx-auto img-icon relative'>
            <Image
              src={value.image}
              alt='image1'
              width={20}
              height={20}
              layout='responsive'
            />
          </div>
          <h1 className='text-lg my-4 mx-auto font-bold'>{value.title}</h1>
          <p className='mx-auto text-iec-gray-700 text-xs text-center'>{value.text}</p>
        </div>
      </>
    )
  }

  return <>
  <div className='flex w-2/3 gap-8'>
  {values.map((value,index) => 
   <div key={index}>
    <Item value={value}/>
   </div>
  
  
  )}

  </div>

  
  </>
}

export default Value
