import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Banner from '@/components/Banner/ImageLeft'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Banner/>
   <Footer/>
    </>
  )
}
