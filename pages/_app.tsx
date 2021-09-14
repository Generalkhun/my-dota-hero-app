import React, { useState } from 'react'
import Layouts from '../components/Layouts'
import '../styles/globals.css'
import { FavoriteHerosProvider } from '../contextProviders/FavoriteHerosProvider'
import dynamic from 'next/dynamic'


// global styles are required to be added to `_app.js` per Next.js requirements.
import "nprogress/nprogress.css";
import { HerosStatsDataProvider } from '../contextProviders/HerosStatsDataProvider'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgreeBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }) {
  return (
    <HerosStatsDataProvider>
      <FavoriteHerosProvider>
        <Layouts>
          <TopProgressBar />
          <Component {...pageProps} />
        </Layouts>
      </FavoriteHerosProvider>
    </HerosStatsDataProvider>


  )
}

export default MyApp
