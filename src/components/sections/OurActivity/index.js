// node_modules
import * as React from 'react'
// images
import sidePicture from './images/sidePicture.png'
// styles
import './index.css'

export const OurActivity = () => {
  return <section className='our-activity'>
    <h2 className='our-activity__title title'>
      Чим ми займаємось
    </h2>
    <div className='our-activity__content container'>
      <ul className='our-activity__list'>
        <li className='our-activity__list-item'>
          Надаємо матеріальну благодійну допомогу: глюкометри для виміру цукру в крові, медичні препарати та апарати
        </li>
        <li className='our-activity__list-item'>
          Інформуємо громадськість про проблематику хворих на діабет
        </li>
        <li className='our-activity__list-item'>
          Організуємо систему сприяння населення в вирішенні комплексних та індивідуальних проблем щодо медичного
          забезпечення хворих на цукровий діабет
        </li>
        <li className='our-activity__list-item'>
          Проводимо власні заходи і підтримуємо міські, регіональні та державні програми щодо виявлення та профілактики
          цукрового діабету
        </li>
        <li className='our-activity__list-item'>
          Залучаємо органи місцевої влади, щоб привернуту їхню увагу до проблем людей із діагнозом «діабет»
        </li>
      </ul>
      <div className='our-activity__img-wr'>
        <img className='our-activity__img' src={sidePicture} alt=''/>
      </div>
    </div>
  </section>
}
