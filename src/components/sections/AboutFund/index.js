// node_modules
import * as React from 'react'
// images
import signature from './images/signature.png'
import founderFace from './images/founderFace.jpg'
import telegram from './images/telegram.png'
import facebook from './images/facebook.png'
// styles
import './index.css'

export const AboutFund = () => {
  return <section id='about-fund' className='about-fund'>
    <div className='container about-fund__content'>
      <div>
        <h2 className='about-fund__title title'>
          Про фонд
        </h2>
        <p className='about-fund__text'>
          «Благодійний фонд допомоги та реабілітації хворих на цукровий діабет» — це міжнародна
          некомерційна
          організація, яка підтримує людей із цим діагнозом по всій Україні.
        </p>
        <p className='about-fund__text'>
          Фонд збирає кошти і спрямовує їх на інформування та практичну допомогу усім, хто її потребує.
          Літні
          люди, сироти та діти із малозабезпечених родин, отримують життєво необхідні медикаменти та
          прилади:
          інсулін, тест-смужки, глюкометри, єдиний сертифікований в Україні сенсор безперервного контролю
          рівня
          глюкози в крові від компанії POCTech, а також унікальну систему для загоєння ран німецької
          компанії
          Curasonix.
        </p>
        <div className='about-fund__info'>
          <div>
            <div className='about-fund__name'>
              Эдуард Олександрович Піскунов
            </div>
            <div className='about-fund__position'>
              Засновник фонду
            </div>
          </div>
          <img className='about-fund__signature' src={signature} alt=''/>
        </div>
      </div>
      <div className='about-fund__extended-info'>
        <img className='about-fund__img' src={founderFace} alt=''/>
        <div className='about-fund__position'>
          Засновник фонду
        </div>
        <div className='about-fund__name'>
          Эдуард Олександрович Піскунов
        </div>
        <p className='about-fund__quote'>
          Едуард Олександрович Піскунов, бізнесмен та філантроп, дванадцять років живе з діагнозом
          «інсулінозалежний діабет І типу, тяжка форма».
        </p>
        <div className='about-fund__social-networks'>
          <img className='about-fund__small-img' src={telegram} alt=''/>
          <img className='about-fund__small-img' src={facebook} alt=''/>
        </div>
      </div>
    </div>
  </section>
}
