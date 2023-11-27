import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from './_components/footer'
import Signup from './(public)/account/register/page'
// import HeaderComponent from './_components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main mx-auto">
      {/* <HeaderComponent/> */}
      
    <Head>
      <title>OneClicks</title>
    </Head>
    home page
    <Footer/>
  </div>    
  )
}
