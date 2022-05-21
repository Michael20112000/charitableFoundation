// node_modules
import * as React from 'react'
// styles
import * as s from './KindOfActivity.module.css'
// images
import img_1 from '../../images/our-employment_img-1.jpg'
import img_2 from '../../images/our-employment_img-2.jpg'

export const KindOfActivity = () => {
  return <section className={s.section}>
    <h2 className={s.title}>
      Чим ми займаємось
    </h2>
    <div className={`container ${s.contentWr}`}>
      <ul className={`${s.left} ${s.list}`}>
        <li>
          Надаємо матеріальну благодійну допомогу: глюкометри для виміру цукру в крові, медичні препарати та апарати
        </li>
        <li>
          Інформуємо громадськість про проблематику хворих на діабет
        </li>
        <li>
          Організуємо систему сприяння населення в вирішенні комплексних та індивідуальних проблем щодо медичного
          забезпечення хворих на цукровий діабет
        </li>
        <li>
          Проводимо власні заходи і підтримуємо міські, регіональні та державні програми щодо виявлення та профілактики
          цукрового діабету
        </li>
        <li>
          Залучаємо органи місцевої влади, щоб привернуту їхню увагу до проблем людей із діагнозом «діабет»
        </li>
      </ul>
      <div className={`${s.right} ${s.images}`}>
        <div className={`${s.imgWr} ${s.img_1}`}>
          <img src={img_1} alt='Image'/>
        </div>
        <div className={`${s.imgWr} ${s.img_2}`}>
          <img src={img_2} alt='Image'/>
        </div>
      </div>
    </div>
  </section>
}
