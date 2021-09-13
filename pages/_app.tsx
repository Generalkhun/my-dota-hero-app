import React, { useState } from 'react'
import Layouts from '../components/Layouts'
import '../styles/globals.css'
import { FavoriteHerosProvider } from '../contextProviders/FavoriteHerosProvider'
import dynamic from 'next/dynamic'


// global styles are required to be added to `_app.js` per Next.js requirements.
import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgreeBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }) {
  return (
    <FavoriteHerosProvider>
      <Layouts>
        <TopProgressBar />
        <Component {...pageProps} />
      </Layouts>
    </FavoriteHerosProvider>

  )
}

export default MyApp
