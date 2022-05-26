// node_modules
import * as React from 'react'
// images
import logo_light from './images/logo_light.png'
import telegram_light from './images/telegram_light.png'
import facebook_light from './images/facebook_light.png'
import twitter_light from './images/twitter_light.png'
import instagram_light from './images/instagram_light.png'
import phone from './images/phone.png'
import telegram_line from './images/telegram_line.png'
import whatsapp_line from './images/whatsapp_line.png'
// styles
import './index.css'

export const Footer = () => {
  return <footer>
    <div className='container'>
      <div className='footer__top'>
        <a className='footer__logo-link' href='/'>
          <img className='footer__logo' src={logo_light}/>
        </a>
        <nav className='footer__nav'>
          <a className='footer__nav-item footer__nav-item_active' href='#'>
            Про нас
          </a>
          <a className='footer__nav-item' href='#'>
            Про діабет
          </a>
          <a className='footer__nav-item' href='#'>
            Потреби
          </a>
          <a className='footer__nav-item' href='#'>
            Колекції NFT
          </a>
          <a className='footer__nav-item' href='#'>
            Новини
          </a>
          <a className='footer__nav-item' href='#'>
            Контакти
          </a>
        </nav>
        <button className='footer__support-btn'>
          Підтримати фонд
        </button>
      </div>
      <div className='footer__mid'>
        <div className='footer__soc-net-wr'>
          Приэднуйтесь
          <div className='footer__soc-net'>
            <a className='footer__soc-net-link' href='#'>
              <img className='footer__soc-net-img' src={telegram_light}/>
            </a>
            <a className='footer__soc-net-link' href='#'>
              <img className='footer__soc-net-img' src={facebook_light}/>
            </a>
            <a className='footer__soc-net-link' href='#'>
              <img className='footer__soc-net-img' src={twitter_light}/>
            </a>
            <a className='footer__soc-net-link' href='#'>
              <img className='footer__soc-net-img' src={instagram_light}/>
            </a>
          </div>
        </div>
        <div className='footer__phones'>
          <img className='footer__phone-img' src={phone}/>
          <div className='footer__phone'>
            <a className='footer__phone-number' href='#'>
              +380 (63) 536-42-54
            </a>
            <a className='footer__phone-soc-net' href='#'>
              <img className='footer__phone-soc-net-img' src={telegram_line}/>
            </a>
          </div>
          <div className='footer__phone'>
            <a className='footer__phone-number' href='#'>
              +380 (50) 987-53-73
            </a>
            <a className='footer__phone-soc-net' href='#'>
              <img className='footer__phone-soc-net-img' src={telegram_line}/>
            </a>
            <a className='footer__phone-soc-net' href='#'>
              <img className='footer__phone-soc-net-img' src={whatsapp_line}/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className='container footer__bottom'>
      <p className='footer__bottom-text'>
        © Благодійний фонд "Допомоги і реабілітації хворих на цукровий діабет", 2018 - 2022
      </p>
      <a className='footer__bottom-link' href='#'>Правила користування</a>
      <a className='footer__bottom-link' href='#'>Угода про використання cookies</a>
    </div>
  </footer>
}
