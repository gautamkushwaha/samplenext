import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Link from 'next/link';
import Cards from './Components/Home/Cards'
import Contacts from './Components/Contact'
import Experience from './Components/Home/Experience'
import Projects from './Components/Projects'
import Technology from './Components/Home/HostingFeatures'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head >
        <title>GautamKushwaha | Home</title>
        <meta name="keywords" content="gautam" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

    <Cards/>
   <Experience/>
   <Technology/>
   <Projects/>
   <Contacts/>
    </>
  )
}

