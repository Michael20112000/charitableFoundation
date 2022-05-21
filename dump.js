// // node_modules
// import * as React from 'react'
// // components
// import {OurPartners} from '../sections/OurPartners'
// // images
// import heroBg from '../images/hero-bg.jpg'
// import signature from '../images/signature.png'
// import our_employment_img_1 from '../images/our-employment_img-1.jpg'
// import our_employment_img_2 from '../images/our-employment_img-2.jpg'
// import img__1 from '../images/img-1.jpg'
// import img__2 from '../images/img-2.jpg'
// // styles
// import '../style.css'
//
// export default function Home() {
//   return <main>
//     <section style={{display: 'none'}} className='hero'>
//       <div className='hero-bg'>
//         <img className='hero-bg-img' src={heroBg} alt='Hero background'/>
//         <div className='hero-tuning'/>
//       </div>
//       <div className='container'>
//         <div className='hero__content-wrapper'>
//           <h1 className='hero-title'>
//             Діабет — не вирок, а інший спосіб життя
//           </h1>
//           <p className='hero-subtitle'>
//             Людина, яка отримала діагноз «цукровий діабет», має продовжувати жити повним життям. «Благодійний фонд
//             допомоги та реабілітації хворих на цукровий діабет» сприяє адаптуванню до нової реальності і навчає
//             перемагати
//             хворобу кожного дня.
//           </p>
//         </div>
//         <button className='hero__next'>
//           <svg className='hero-next'
//                viewBox='0 0 20 26'>
//             <path
//               d='M9.05719 24.9428C9.57789 25.4635 10.4221 25.4635 10.9428 24.9428L19.4281 16.4575C19.9488 15.9368 19.9488 15.0926 19.4281 14.5719C18.9074 14.0512 18.0632 14.0512 17.5425 14.5719L10 22.1144L2.45753 14.5719C1.93683 14.0512 1.09261 14.0512 0.571909 14.5719C0.0512104 15.0926 0.0512104 15.9368 0.571909 16.4575L9.05719 24.9428ZM11.3333 24L11.3333 0H8.66667L8.66667 24H11.3333Z'
//               fill='white'/>
//           </svg>
//         </button>
//       </div>
//     </section>
//     <section style={{display: 'none'}} className='about'>
//       <div className='container'>
//         <div className='about__content-wrapper'>
//           <h5 className='about-title'>
//             Про фонд
//           </h5>
//           <p className='about-text'>
//             «Благодійний фонд допомоги та реабілітації хворих на цукровий діабет» — це міжнародна некомерційна
//             організація, яка підтримує людей із цим діагнозом по всій Україні.
//           </p>
//           <p className='about-text'>
//             Фонд збирає кошти і спрямовує їх на інформування та практичну допомогу усім, хто її потребує. Літні люди,
//             сироти та діти із малозабезпечених родин, отримують життєво необхідні медикаменти та прилади: інсулін,
//             тест-смужки, глюкометри, єдиний сертифікований в Україні сенсор безперервного контролю рівня глюкози в крові
//             від компанії POCTech, а також унікальну систему для загоєння ран німецької компанії Curasonix.
//           </p>
//           <div className='about-boss'>
//             <div className='about-boss-name'>
//               Эдуард Олександрович Піскунов
//             </div>
//             <div className='about-boss-position'>
//               Засновник фонду
//             </div>
//             <img src={signature} alt='Signature'/>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section style={{display: 'none'}} className='our-mission'>
//       <div className='container our-mission__content-wrapper'>
//         <h3 className='our-mission-title'>
//           Наша місія
//         </h3>
//         <p className='our-mission-text'>
//           Місія Фонду — допомагати дітям, літнім людям і всім, хто потребує підтримки в боротьбі з цукровим діабетом. Ми
//           захищаємо соціальні права, поліпшуємо умови життя та медичне обслуговування, організовуємо заходи для
//           привернення уваги громадськості до проблем хворих на діабет, консультуємо щодо профілактики та лікування,
//           забезпечуємо життєво необхідними апаратами та препаратами.
//           Враховуючи російську агресію, сьогодні наш Фонд взяв за основу робити все можливе для підтримки військових,
//           які,
//           не шкодуючи життя, захищають нашу країну на передовій. Ми докладаємо всіх зусиль, щоб допомогти збройним силам
//           України, а також переселенцям із «гарячих» точок.
//         </p>
//       </div>
//     </section>
//     <section style={{display: 'none'}} className='our-employment'>
//       <div className='container our-employment__content-wrapper'>
//         <ul className='unordered-list_square'>
//           <li>
//             Надаємо матеріальну благодійну допомогу: глюкометри для виміру цукру в крові, медичні препарати та апарати
//           </li>
//           <li>
//             Інформуємо громадськість про проблематику хворих на діабет
//           </li>
//           <li>
//             Організуємо систему сприяння населення в вирішенні комплексних та індивідуальних проблем щодо медичного
//             забезпечення хворих на цукровий діабет
//           </li>
//           <li>
//             Проводимо власні заходи і підтримуємо міські, регіональні та державні програми щодо виявлення та
//             профілактики цукрового діабету
//           </li>
//           <li>
//             Залучаємо органи місцевої влади, щоб привернуту їхню увагу до проблем людей із діагнозом «діабет»
//           </li>
//         </ul>
//         <div className='our-employment__img-wrapper'>
//           <div className='img-wr img-wr_1'>
//             <img src={our_employment_img_1} alt='Image'/>
//           </div>
//           <div className='img-wr img-wr_2'>
//             <img src={our_employment_img_2} alt='Image'/>
//           </div>
//         </div>
//       </div>
//     </section>
//
//     <OurPartners/>
//
//     <section style={{display: 'none'}} className='hash'>
//       <h2 className='hash-title'>
//         Реквізити для підтримки
//       </h2>
//       <div className='container hash__content'>
//         <div className='hash__content_left'>
//           <div className='hash-image-wr hash-image-wr_1'>
//             <img src={img__1} alt='Image'/>
//           </div>
//           <div className='hash-image-wr hash-image-wr_2'>
//             <img src={img__2} alt='Image'/>
//           </div>
//         </div>
//         <div className='hash__content_right'>
//           <h3 className='hash__content_title'>
//             Адреса та контакти
//           </h3>
//           <p className='hash__content_text'>
//             E-mail: info@diabet.fund <br/>
//             Телефон/Viber: +38 063 536-4254 <br/>
//             Юридична адреса: 01001, м. Київ, вул. Звіринецька, б. 63 <br/>
//             Фактичне адреса: 79029, м. Львів, вул. Зерова, б. 20, оф. 5 <br/>
//             ЄДРПОУ: 39909206
//           </p>
//           <hr className='line'/>
//           <h3 className='hash__content_title'>
//             Банківські рахунки
//           </h3>
//           <p className='hash__content_text'>
//             АТ КБ "ПРИВАТБАНК" <br/>
//             SWIFT: PBANUA2X <br/>
//             Розрахункові рахунки: <br/>
//             UAH: UA123052990000026005050305667 <br/>
//             USD: UA113052990000026008050316738 <br/>
//             EUR: UA343052990000026006050334046
//           </p>
//           <button className='hash-copy-btn'>
//             <svg viewBox='0 0 17 21'>
//               <path
//                 d='M4.5 17.975C4.1 17.975 3.75 17.825 3.45 17.525C3.15 17.225 3 16.875 3 16.475V2.47498C3 2.07498 3.15 1.72498 3.45 1.42498C3.75 1.12498 4.1 0.974976 4.5 0.974976H15.5C15.9 0.974976 16.25 1.12498 16.55 1.42498C16.85 1.72498 17 2.07498 17 2.47498V16.475C17 16.875 16.85 17.225 16.55 17.525C16.25 17.825 15.9 17.975 15.5 17.975H4.5ZM4.5 16.475H15.5V2.47498H4.5V16.475ZM1.5 20.975C1.1 20.975 0.75 20.825 0.45 20.525C0.15 20.225 0 19.875 0 19.475V4.39998H1.5V19.475H13.35V20.975H1.5ZM4.5 2.47498V16.475V2.47498Z'
//                 fill='#0C9A56'/>
//             </svg>
//             Копіювати
//           </button>
//         </div>
//       </div>
//     </section>
//   </main>
// }
