// node_modules
import * as React from 'react'
// styles
import '../reset.css'
// components
import {Hero} from '../sections/Hero'
import {AboutFund} from '../sections/AboutFund'
import {OurMission} from '../sections/OurMission'
import {KindOfActivity} from '../sections/KindOfActivity'
import {OurPartners} from '../sections/OurPartners'

export default function Home() {
  return <main>
    <Hero/>
    <AboutFund/>
    <OurMission/>
    <KindOfActivity/>
    <OurPartners/>
  </main>
}
