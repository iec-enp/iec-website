import Container from '@/components/Layout/Container'
import EventSection from '@/components/Utility/EventSection'

export default function Events() {
  return (
    <Container title='Evenements - IEC - Industrial Engineers Club'>
      <div className='flex flex-col items-center gap-16 mt-36'>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-5xl font-black  dark:text-shadow-dark'>
            NOS <span className='text-iec-orange-2-500'>EVENEMENTS</span>
          </h1>
          <p className='text-center w-4/5 md:w-1/2 font-medium'>
            At IEC, we organize various and high-quality TECH events, through
            which we aim to best fit our community needs and to provide a
            skillful and complete acquirement of knowledge for all the
            technology enthusiasts!
          </p>
        </div>
        <EventSection
          name='Business Game'
          description="Business game est un jeu de simulation de gestion consistant une compétition entre des entreprises virtuelles en concurrence sur le marché. Chaque entreprise est représentée et gérée par une équipe de 4 à 5 participants. Le jeu permet de développer de manière ludique et interactive des connaissances liées à l'analyse financière et à l'entrepreneuriat, et de mettre en avant leurs compétences managériales."
          date='12-13 Mai 2022'
          place='Alger'
          pics='/images/pictures/img2.webp'
          edition='2'
          workshop='20'
          participant='50'
          logo='/brand/logos/bg-logo.png'
          color='text-[#0B3434]'
          iconColor='#0B3434'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          name='TEDxENP'
          description="TEDxENP est un événement Tedx organisé par un groupe d'étudiants de l'Ecole Nationale Polytechnique. Etudiant·es et professionnel·le·s se retrouvent afin d'échanger sur l'avenir et l'évolution du monde dans ses différentes composantes en évoquant les différents vecteurs du changement et leurs impacts sur la société."
          date='30 Juin 2022'
          place='Alger'
          pics='/images/pictures/img0.webp'
          edition='1'
          participant='400'
          left={false}
          logo='/brand/logos/tedx-logo.svg'
          color='text-[#FF2C07]'
          iconColor='#FF2C07'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/logo-icc.webp'
          name='IEC Case Compétition '
          description="ICC est une compétition d'étude de cas organisée par le club IEC dans laquelle les participants doivent tenter de trouver une solution à une problématique d'actualité proposée par une entreprise."
          date='13-14- 15-16 Octobre 2021'
          place='Hotel Tulip Inn Naya - Bab Ezzouar'
          pics='/images/pictures/img4.webp'
          edition='2'
          participant='48'
          color='text-[#421B38]'
          iconColor='#421B38'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/ADC_logo.svg'
          name='Algeria Data CUP'
          description="Algeria Data Cup: est un hackathon de data science où les participants sont invités à résoudre un problème de Business réel, en développant un modèle d'apprentissage automatique le plus performant possible sur les données fournies. La 1ère édition s'est déroulée sur la plateforme Zindi.com."
          date='16-18 Décembre 2021'
          place='En ligne sur la plateforme ZINDI '
          pics='/images/pictures/img4.webp'
          edition='1'
          left={false}
          color='text-[#4A8AFC]'
          iconColor='#4A8AFC'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/jourj_logo.webp'
          name='Jour Génie Industriel'
          description="Le Jour GI est un événement qui se déroule chacun année, pour but de promouvoir la spécialité du Génie Industriel sous ses deux options aux étudiants lauréats du concours national d'accès au grande écoles d'ingénieurs"
          date='Début Septembre'
          place=' En ligne sur les pages réseaux de IEC'
          pics='/images/pictures/img4.webp'
          edition='2'
          color='text-[#D88F0A]'
          iconColor='#D88F0A'
        />
      </div>
    </Container>
  )
}
