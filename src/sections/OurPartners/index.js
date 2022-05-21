// node_modules
import * as React from 'react'
// components
import {Title} from '../../components/common/Title'
import {BoringGrid} from '../../components/BoringGrid'
// styles
import './OurPartners.css'
// images
import partner_1 from './images/partner_1.png'
import partner_2 from './images/partner_2.png'
import partner_3 from './images/partner_3.png'
import partner_4 from './images/partner_4.png'

export const OurPartners = () => {

  const partners = [
    <img className='ourPartners__item' src={partner_1} alt='Partner 1'/>,
    <img className='ourPartners__item' src={partner_2} alt='Partner 2'/>,
    <img className='ourPartners__item' src={partner_3} alt='Partner 3'/>,
    <img className='ourPartners__item' src={partner_4} alt='Partner 4'/>
  ]

  return <section className='ourPartners'>
    <Title className='ourPartners__title'>
      Наші партнери
    </Title>
    <BoringGrid className='container' items={partners}/>
  </section>
}
