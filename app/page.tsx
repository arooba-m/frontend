import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
// import Footer from './_components/footer'
import Signup from './(public)/account/register/page'
// import HeaderComponent from './_components/header'
// import Header from './_components/header'
import Hero from './_components/Hero'
import Pricing from './_components/Guide'
import Footer1 from './_components/Footer1'
import Details from './_components/Details'
import GetStarted from './_components/GetStarted'
import Companies from './_components/Companies'
import Cards from './_components/Cards'
// import  Details from './_components/Details'
// import Properties from './_components/Properties'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main mx-auto">
      {/* <HeaderComponent/> */}
      
    <Head>
      <title>OneClicks</title>
    </Head>
    {/* <Header/> */}
    
    <Hero></Hero>
    <br />
    <Companies></Companies>
    <br />
    <Details></Details>
    <br />
    <Cards></Cards>
    <br />
    <Pricing></Pricing>
    <br />
    {/* <Properties></Properties> */}
    <GetStarted></GetStarted>
    <br></br>
    <Footer1></Footer1>
    <br />
  </div>    
  )
}
