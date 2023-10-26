import Button from '@/components/button'
import WithSubnavigation from '@/components/navigation'
import TitlePage from '@/components/titlepage'
import React, {useState} from "react"

import Head from 'next/head'

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)
    
    const afficher = () => {
      if (isVisible){
        setIsVisible(false)
      }
      else{
        setIsVisible(true)
      }
    }
  
    return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{marginRight:"5%", marginLeft:"5%"}}>
          <TitlePage title="Home" />
          <p>xxxxxxxxx</p>
          <p>xxxxxxxxx</p>
          <p>xxxxxxxxx</p>
          <p>xxxxxxxxx</p>
          <br />
          <Button title="Afficher" style={{backgroundColor:"red", padding:5, borderRadius:5, color:"white"}} onClick={()=>{afficher()}}/>
          {isVisible?
            <p>HHHHHHHHHHHHHHHHHH</p>
          :""}
        </div>

      </main>
    </>
  )
}
