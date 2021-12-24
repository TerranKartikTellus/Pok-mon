import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="text-2xl ">
      <Head>
        <title>Pokémon</title>
        <meta name="description" content="Which Pokémon is rounder?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col justify-center items-center">
        <div className=''>Which Pokémon is rounder ?</div>
        <div className='p-10'></div>
        <div className='ring-2 flex flex-row justify-center items-center'>
          <div className='bg-red-100 w-28 h-28 '></div>
          <div>VS</div>
          <div className='bg-red-100 w-28 h-28 '></div>
        </div>
      </main>

      
    </div>
  )
}

export default Home
