// node_modules
import * as React from 'react'
// global styles
import '../assets/styles/reset.css'
import '../assets/styles/common.css'
// components
import {DefaultLayout} from '../components/layouts/DefaultLayout'
import {Hero} from '../components/sections/Hero'
import {AboutFund} from '../components/sections/AboutFund'
import {OurMission} from '../components/sections/OurMission'
import {OurActivity} from '../components/sections/OurActivity'
import {OurPartners} from '../components/sections/OurPartners'
import {SupportDetails} from '../components/sections/SupportDetails'

export default function Home() {
  return <DefaultLayout>
    <Hero/>
    <AboutFund/>
    <OurMission/>
    <OurActivity/>
    <OurPartners/>
    <SupportDetails/>
  </DefaultLayout>
}
