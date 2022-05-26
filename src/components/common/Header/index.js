// node_modules
import * as React from 'react'
// images
import telegram from './images/telegram.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import phone from './images/phone.png'
import telegram_line from './images/telegram_line.png'
import whatsapp_line from './images/whatsapp_line.png'
import logo from './images/logo.png'
import phone_white from './images/phone_white.png'
// styles
import './index.css'

export const Header = () => {
  React.useLayoutEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    const burgerBtn = document.getElementById('burger-btn')
    const mobileMenuWr = document.getElementById('menu_mobile-wr')
    const mobileMenu = document.getElementById('menu_mobile')

    mobileMenuWr.style.top = `${header.offsetHeight}px`

    burgerBtn.addEventListener('click', function () {
      this.classList.toggle('burger-btn_active')
      document.body.classList.toggle('o_h')
      mobileMenuWr.classList.toggle('menu_mobile_active')
    });

    [...mobileMenu.children].forEach(i => {
      if (i.classList.contains('dropdown')) {
        i.addEventListener('click', function (e) {
          e.preventDefault()
          this.classList.toggle('dropdown_open')
        })
      }
    })
  }, [])

  return <header>
    <div className='header__top'>
      <div className='container header__top-content'>
        <div className='social-networks'>
          Приэднуйтесь
          <div className='social-networks__links'>
            <a className='social-networks__link' href='#'>
              <img className='header-icon' src={telegram}/>
            </a>
            <a className='social-networks__link' href='#'>
              <img className='header-icon' src={facebook}/>
            </a>
            <a className='social-networks__link' href='#'>
              <img className='header-icon' src={twitter}/>
            </a>
            <a className='social-networks__link' href='#'>
              <img className='header-icon' src={instagram}/>
            </a>
          </div>
        </div>
        <div className='phones'>
          <img className='header-icon phone-icon' src={phone}/>
          <div className='phones__item'>
            <a className='phones__link' href='#'>
              +380 (63) 536-42-54
            </a>
            <a className='phones__link' href='#'>
              <img className='header-icon' src={telegram_line}/>
            </a>
          </div>
          <div className='phones__item'>
            <a className='phones__link' href='#'>
              +380 (50) 987-53-73
            </a>
            <a className='phones__link' href='#'>
              <img className='header-icon' src={telegram_line}/>
            </a>
            <a className='phones__link' href='#'>
              <img className='header-icon' src={whatsapp_line}/>
            </a>
          </div>
        </div>
        <div className='lang'>
          <div className='lang__text'>
            ENG
          </div>
          <div className='lang__switcher'>
            <div className='lang-position lang-position_left'></div>
            <div className='lang-position lang-position_right lang-position_active'></div>
          </div>
          <div className='lang__text'>
            УКР
          </div>
        </div>
      </div>
    </div>
    <div className='header__bottom'>
      <div className='container header__bottom-content'>
        <a className='logo' href='/'>
          <img src={logo}/>
        </a>
        <nav className='menu'>
          <a className='menu__item menu__item_active' href='#'>
            Про нас
          </a>
          <a className='menu__item' href='#'>
            Про діабет
          </a>
          <a className='menu__item' href='#'>
            Потреби
          </a>
          <a className='menu__item' href='#'>
            Колекції NFT
          </a>
          <a className='menu__item' href='#'>
            Новини
          </a>
          <a className='menu__item' href='#'>
            Контакти
          </a>
        </nav>
        <button className='support-btn'>
          Підтримати фонд
        </button>
        <div id='menu_mobile-wr' className='menu_mobile-wr'>
          <nav id='menu_mobile' className='menu_mobile'>
            <a className='menu_mobile__item menu_mobile__item_active' href='#'>
              Про нас
            </a>
            <a className='menu_mobile__item' href='#'>
              Про діабет
            </a>
            <div className='dropdown'>
              <a className='menu_mobile__item' href='#'>
                Потреби
                <svg width='17' height='11' viewBox='0 0 17 11'>
                  <path
                    d='M8.48533 6.79995L15.0853 0.199951L16.9707 2.08528L8.48533 10.5706L0 2.08528L1.88533 0.199951L8.48533 6.79995Z'
                    fill='#0C9A56'/>
                </svg>
              </a>
              <div className='dropdown-list'>
                <a className='dropdown-list__item' href='#'>
                  Що таке діабет?
                </a>
                <a className='dropdown-list__item' href='#'>
                  Типи діабету
                </a>
                <a className='dropdown-list__item' href='#'>
                  Типи діабету
                </a>
              </div>
            </div>
            <a className='menu_mobile__item' href='#'>
              Колекції NFT
            </a>
            <a className='menu_mobile__item' href='#'>
              Новини
            </a>
            <a className='menu_mobile__item' href='#'>
              Контакти
            </a>
          </nav>
          <div className='lang'>
            <div className='lang__text'>
              ENG
            </div>
            <div className='lang__switcher'>
              <div className='lang-position lang-position_left'></div>
              <div className='lang-position lang-position_right lang-position_active'></div>
            </div>
            <div className='lang__text lang-position_active'>
              УКР
            </div>
          </div>
          <div className='social-networks'>
            Приэднуйтесь
            <div className='social-networks__links'>
              <a className='social-networks__link' href='#'>
                <img className='header-icon' src={telegram}/>
              </a>
              <a className='social-networks__link' href='#'>
                <img className='header-icon' src={facebook}/>
              </a>
              <a className='social-networks__link' href='#'>
                <img className='header-icon' src={twitter}/>
              </a>
              <a className='social-networks__link' href='#'>
                <img className='header-icon' src={instagram}/>
              </a>
            </div>
          </div>
        </div>
        <button className='phones-btn_mobile'>
          <img className='header-icon' src={phone_white}/>
        </button>
        <button id='burger-btn' className='burger-btn'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
}
