// node_modules
import * as React from 'react'
// images
import heroBg from '../images/hero-bg.jpg'
import signature from '../images/signature.png'
// styles
import '../style.css'

export default function Home() {
  return <main>
    <section className='hero'>
      <div className='hero-bg'>
        <img className='hero-bg-img' src={heroBg} alt='Hero background'/>
        <div className='hero-tuning'/>
      </div>
      <div className='container'>
        <div className='hero__content-wrapper'>
          <h1 className='hero-title'>
            Діабет — не вирок, а інший спосіб життя
          </h1>
          <p className='hero-subtitle'>
            Людина, яка отримала діагноз «цукровий діабет», має продовжувати жити повним життям. «Благодійний фонд
            допомоги та реабілітації хворих на цукровий діабет» сприяє адаптуванню до нової реальності і навчає
            перемагати
            хворобу кожного дня.
          </p>
        </div>
        <button className='hero__next'>
          <svg className='hero-next'
               viewBox='0 0 20 26'>
            <path
              d='M9.05719 24.9428C9.57789 25.4635 10.4221 25.4635 10.9428 24.9428L19.4281 16.4575C19.9488 15.9368 19.9488 15.0926 19.4281 14.5719C18.9074 14.0512 18.0632 14.0512 17.5425 14.5719L10 22.1144L2.45753 14.5719C1.93683 14.0512 1.09261 14.0512 0.571909 14.5719C0.0512104 15.0926 0.0512104 15.9368 0.571909 16.4575L9.05719 24.9428ZM11.3333 24L11.3333 0H8.66667L8.66667 24H11.3333Z'
              fill='white'/>
          </svg>
        </button>
      </div>
    </section>
    <section className='about'>
      <div className='container'>
        <div className='about__content-wrapper'>
          <h5 className='about-title'>
            Про фонд
          </h5>
          <p className='about-text'>
            «Благодійний фонд допомоги та реабілітації хворих на цукровий діабет» — це міжнародна некомерційна
            організація, яка підтримує людей із цим діагнозом по всій Україні.
          </p>
          <p className='about-text'>
            Фонд збирає кошти і спрямовує їх на інформування та практичну допомогу усім, хто її потребує. Літні люди,
            сироти та діти із малозабезпечених родин, отримують життєво необхідні медикаменти та прилади: інсулін,
            тест-смужки, глюкометри, єдиний сертифікований в Україні сенсор безперервного контролю рівня глюкози в крові
            від компанії POCTech, а також унікальну систему для загоєння ран німецької компанії Curasonix.
          </p>
          <div className='about-boss'>
            <div className='about-boss-name'>
              Эдуард Олександрович Піскунов
            </div>
            <div className='about-boss-position'>
              Засновник фонду
            </div>
            <img src={signature} alt='Signature'/>
          </div>
        </div>
      </div>
    </section>
  </main>
}
