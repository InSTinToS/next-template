import { appInfo } from '@app/static/appInfo'

import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <link rel='canonical' href={appInfo.url} />

        <title>Home</title>
      </Head>

      <main className='flex items-center justify-center h-screen border-2 border-white-500'>
        <div className='text-3xl text-white-500'>Hello Next</div>
      </main>
    </>
  )
}

export default Home
