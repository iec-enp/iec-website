import Button from '@/components/Form/Buttons'
import Input from '@/components/Form/Input'
import Container from '@/components/Layout/Container'
import { EnvelopeSimple, Gear, User } from 'phosphor-react'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const onsubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <>
      <Container title='Contact - IEC - Industrial Engineers Club'>
        <div className='flex flex-col items-center gap-2 mt-32'>
          <h1 className='text-3xl font-normal text-shadow-light dark:text-shadow-dark'>
            Prenez Contact Avec nous
          </h1>
          <p className='text-opacity-80'>Envoyez nous un message </p>
          <form
            onSubmit={onsubmit}
            className='mt-4 grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-5 text-iec-blue-2-500'>
            <Input
              name='prenom'
              type='text'
              placeholder='Prénom'
              Icon={<User />}
            />
            <Input
              name='nom'
              type='text'
              placeholder='Nom'
              Icon={<User />}
            />
            <Input
              name='email'
              type='email'
              placeholder='Email'
              Icon={<EnvelopeSimple />}
            />
            <Input
              name='objet'
              type='text'
              placeholder='Objet'
              Icon={<Gear />}
            />
            <textarea
              name='message'
              className='col-span-2 row-span-2 p-3 rounded-xl resize-none outline-none bg-white shadow-lg'
              placeholder='Votre message ...'
              required
            />
            <Button loading={loading} />
          </form>
        </div>
      </Container>
    </>
  )
}
