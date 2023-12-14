// import Image from 'next/image'
// import styles from './page.module.css'
import { Inter } from 'next/font/google'
import Footer from './_components/footer'
// import Signup from './(public)/account/register/page'
// import HeaderComponent from './_components/header'
import Header from './_components/header'
// import Script from 'next/script';
// import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (

    <div className="main mx-auto">
      {/* <HeaderComponent/> */}
      
    {/* <Head> */}
    {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
    {/* <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"/>
    </Head> */}
    <Header/>
   
      landing page
    <Footer/>

  </div> 
   
  )
}
