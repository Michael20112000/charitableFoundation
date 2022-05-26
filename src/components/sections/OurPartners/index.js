// node_modules
import * as React from 'react'
// images
import partner1 from './images/partner1.png'
import partner2 from './images/partner2.png'
import partner3 from './images/partner3.png'
import partner4 from './images/partner4.png'
// styles
import './index.css'

export const OurPartners = () => {
  return <section className='our-partners'>
    <h2 className='our-partners__title title'>
      Наші партнери
    </h2>
    <div className='container our-partners__content'>
      <img className='our-partners__partner' src={partner1} alt=''/>
      <img className='our-partners__partner' src={partner2} alt=''/>
      <img className='our-partners__partner' src={partner3} alt=''/>
      <img className='our-partners__partner' src={partner4} alt=''/>
    </div>
  </section>
}
