// node_modules
import * as React from 'react'
// styles
import '../reset.css'
// components
import {AboutFund} from '../sections/AboutFund'
import {OurMission} from '../sections/OurMission'
import {KindOfActivity} from '../sections/KindOfActivity'

export default function Home() {
  return <main>
    <AboutFund/>
    <OurMission/>
    <KindOfActivity/>
  </main>
}
