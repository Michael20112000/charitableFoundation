// node_modules
import * as React from 'react'
// images
import bg from './images/background.jpg'
// styles
import './index.css'

export const Hero = () => {

  React.useLayoutEffect(() => {
    const heroBg = document.getElementById('hero__background')
    const heroContent = document.getElementById('hero__content')

    const mediaQuery = window.matchMedia('(max-width: 575px)')
    if (mediaQuery.matches) {
      heroBg.style.top = `${heroContent.offsetHeight}px`
    }
  }, [])

  return <section className='hero'>
    <div id='hero__background' className='hero__background'>
      <img className='hero__background-img' src={bg} alt='Background'/>
      <div className='hero__tuning'/>
    </div>
    <div className='container'>
      <div id='hero__content' className='hero__content'>
        <h1 className='hero__title'>
          Діабет — не вирок, а інший спосіб життя
        </h1>
        <p className='hero__description'>
          Людина, яка отримала діагноз «цукровий діабет», має продовжувати жити повним життям. «Благодійний фонд
          допомоги та реабілітації хворих на цукровий діабет» сприяє адаптуванню до нової реальності і навчає перемагати
          хворобу кожного дня.
        </p>
      </div>
      <a className='hero__next-btn' href='src/components/sections/Hero/index#about-fund'>
        <svg viewBox='0 0 20 26'>
          <path
            d='M9.05719 24.9428C9.57789 25.4635 10.4221 25.4635 10.9428 24.9428L19.4281 16.4575C19.9488 15.9368 19.9488 15.0926 19.4281 14.5719C18.9074 14.0512 18.0632 14.0512 17.5425 14.5719L10 22.1144L2.45753 14.5719C1.93683 14.0512 1.09261 14.0512 0.571909 14.5719C0.0512104 15.0926 0.0512104 15.9368 0.571909 16.4575L9.05719 24.9428ZM11.3333 24L11.3333 0H8.66667L8.66667 24H11.3333Z'/>
        </svg>
      </a>
    </div>
  </section>
}
