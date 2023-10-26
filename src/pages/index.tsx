import WithSubnavigation from '@/components/navigation'
import TitlePage from '@/components/titlepage'

import Head from 'next/head'

export default function Home() {
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
          {/* <Simple /> */}
        </div>

      </main>
    </>
  )
}
