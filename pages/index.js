import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import TusharGupta from "../Images/TusharGupta.jpg"
import AdityaSharma from "../Images/AdityaSharma.jpg"
import SudhanshuSharma from "../Images/SudhanshuSharma.jpg"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hacktober students </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' flex gap-8 justify-center flex-wrap min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 md:p-5'>
       
        
        <Card image={TusharGupta}name = "Tushar Gupta" about="jai shree ram. keep chilling " instagram= "https://www.instagram.com/trust_afk/"  twitter="https://twitter.com/ohh_hii_tusharr" linkedin="https://www.linkedin.com/in/tushar-gupta-10a151202/"/>
      
    
        <Card image={AdityaSharma}name = "Aditya Sharma" about="future billionaire pr abhi gareeb hu." instagram= "https://www.instagram.com/iaddy29/"  twitter="https://twitter.com/iaddy29" linkedin="https://www.linkedin.com/in/aditya-sharma-2b4a64222/"/>
       
       <Card image={SudhanshuSharma}name = "Sudhanshu Sharma" about="dm for fun rate 100/day" instagram= "https://www.instagram.com/cpt_n3m0_22/"  twitter="https://twitter.com/Sudhanshu226922" linkedin="https://www.linkedin.com/in/sudhanshu-sharma-9376931b7/"/>
       
      </main>


    </div>
  )
}
