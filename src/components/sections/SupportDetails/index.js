// node_modules
import * as React from 'react'
// images
import sidePicture from './images/sidePicture.png'
// styles
import './index.css'

export const SupportDetails = () => {
  return <section className='support-details'>
    <h2 className='support-details__title title'>
      Реквізити для підтримки
    </h2>
    <div className='support-details__content container'>
      <div className='support-details__img-wr'>
        <img className='support-details__img' src={sidePicture} alt=''/>
      </div>
      <div className='support-details__details'>
        <h3 className='support-details__local-title'>
          Адреса та контакти
        </h3>
        <p className='support-details__local-text'>
          E-mail: info@diabet.fund <br/>
          Телефон/Viber: +38 063 536-4254 <br/>
          Юридична адреса: 01001, м. Київ, вул. Звіринецька, б. 63 <br/>
          Фактичне адреса: 79029, м. Львів, вул. Зерова, б. 20, оф. 5 <br/>
          ЄДРПОУ: 39909206
        </p>
        <hr/>
        <h3 className='support-details__local-title'>
          Банківські рахунки
        </h3>
        <p className='support-details__local-text'>
          АТ КБ "ПРИВАТБАНК" <br/>
          SWIFT: PBANUA2X <br/>
          Розрахункові рахунки: <br/>
          UAH: UA123052990000026005050305667 <br/>
          USD: UA113052990000026008050316738 <br/>
          EUR: UA343052990000026006050334046
        </p>
        <button className='support-details__copy-btn'>
          <svg className='support-details__copy-icon' viewBox='0 0 17 21'>
            <path
              d='M4.5 17.975C4.1 17.975 3.75 17.825 3.45 17.525C3.15 17.225 3 16.875 3 16.475V2.47498C3 2.07498 3.15 1.72498 3.45 1.42498C3.75 1.12498 4.1 0.974976 4.5 0.974976H15.5C15.9 0.974976 16.25 1.12498 16.55 1.42498C16.85 1.72498 17 2.07498 17 2.47498V16.475C17 16.875 16.85 17.225 16.55 17.525C16.25 17.825 15.9 17.975 15.5 17.975H4.5ZM4.5 16.475H15.5V2.47498H4.5V16.475ZM1.5 20.975C1.1 20.975 0.75 20.825 0.45 20.525C0.15 20.225 0 19.875 0 19.475V4.39998H1.5V19.475H13.35V20.975H1.5ZM4.5 2.47498V16.475V2.47498Z'/>
          </svg>
          Копіювати
        </button>
      </div>
    </div>
  </section>
}
