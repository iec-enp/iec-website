import Container from '@/components/Layout/Container'
import EventSection from '@/components/Utility/EventSection'

export default function Events() {
  return (
    <Container title='Evenements - IEC - Industrial Engineers Club'>
      <div className='flex flex-col items-center gap-16 mt-36'>
        <div className='flex flex-col items-center gap-8 relative md:mb-7 '>
          <h1 className='text-5xl font-black  dark:text-shadow-dark'>
            NOS <span className='text-iec-orange-2-500'>ÉVÈNEMENTS</span>
          </h1>

          <p className='text-center w-4/5 md:w-2/3 font-medium'>
            Chez IEC, nous organisons divers événements de haute qualité, à
            travers lesquels nous visons à répondre au mieux aux besoins de
            notre communauté et à fournir une acquisition habile et complète des
            connaissances pour tous les passionnés du Génie Industriel !
          </p>
        </div>
        <EventSection
          name='Business Game'
          description="Business game est un jeu de simulation de gestion consistant en une compétition entre des entreprises virtuelles en concurrence sur le marché. Chaque entreprise est représentée et gérée par une équipe de 4 à 5 participants. Le jeu permet de développer de manière ludique et interactive des connaissances liées à l'analyse financière et à l'entrepreneuriat, et de mettre en avant leurs compétences managériales."
          date='04-05 Mai 2023'
          place='HIS - Higher Institue of Science, Bordj El Kiffan'
          pics={['/images/pictures/img2.webp']}
          edition='3'
          workshop='20'
          participant='50'
          logo='/brand/logos/bg-logo.png'
          color={['color-bg-dark', 'color-bg']}
          iconColor={['#b2d06b', '#0B3434']}
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          name='TEDxENP'
          description="TEDxENP est un événement TEDx organisé par un groupe d'étudiants de l'École Nationale Polytechnique. Étudiant·e·s et professionnel·le·s se retrouvent afin d'échanger sur l'avenir et l'évolution du monde dans ses différentes composantes en évoquant les différents vecteurs du changement et leurs impacts sur la société."
          date='30 Juin 2022'
          place='Palais de la culture Moufdi Zakaria - Alger'
          pics={['/images/pictures/img0.webp']}
          edition='1'
          participant='400'
          left={false}
          logo='/brand/logos/tedx-logo.svg'
          color={['color-ted-dark', 'color-ted']}
          iconColor={['#ff6b51', '#FF2C07']}
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/logo-icc.webp'
          name='IEC Case Compétition '
          description="ICC est une compétition d'étude de cas organisée par le club IEC dans laquelle les participants doivent tenter de trouver une solution à une problématique d'actualité proposée par une entreprise."
          date='17-19 Novembre 2022'
          place='Salle Dar El Djazair - SAFEX'
          pics={['/images/pictures/img4.webp']}
          edition='3'
          participant='48'
          color={['color-icc-dark', 'color-icc']}
          iconColor={['#da8ee4', '#421B38']}
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/ADC_logo.svg'
          name='Algeria Data CUP'
          description="Algeria Data Cup est un hackathon de data science où les participants sont invités à résoudre un problème de Business réel, en développant un modèle d'apprentissage automatique le plus performant possible sur les données fournies. La 1ère édition s'est déroulée sur la plateforme Zindi.com, tandis que la deuxième édition s'est déroulée en présentiel sur 40 heures continues."
          date='17-19 Juin 2023'
          place='HIS - Higher Institute of Sciences, Borj El Kiffan '
          pics={['/images/pictures/adc.webp']}
          edition='2'
          participant='64'
          left={false}
          color={['color-adc-dark', 'color-adc']}
          iconColor={['#7eaafa', '#4A8AFC']}
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/images/events/jourj_logo.webp'
          name='Jour Génie Industriel'
          description="Le Jour GI est un événement qui se déroule chaque année, pour but de promouvoir la spécialité du Génie Industriel sous ses deux options aux étudiants lauréats du concours national d'accès aux grandes écoles d'ingénieurs"
          date='Fin Juin'
          place='En ligne sur les pages réseaux de IEC'
          pics={['/images/pictures/gi.webp']}
          edition='3'
          color={['color-ji-dark', 'color-ji']}
          iconColor={['#f3ae2f', '#D88F0A']}
        />
      </div>
    </Container>
  )
}
