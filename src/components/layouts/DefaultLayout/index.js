// node_modules
import * as React from 'react'
// components
import {Header} from '../../common/Header'
import {Footer} from '../../common/Footer'
// styles
import './index.css'

export const DefaultLayout = ({children}) => {
  return <div className='page-wr'>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </div>
}
