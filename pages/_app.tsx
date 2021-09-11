import React, { useState } from 'react'
import Layouts from '../components/Layouts'
import '../styles/globals.css'
import { FavoriteHerosProvider } from '../contextProviders/FavoriteHerosProvider'
function MyApp({ Component, pageProps }) {
  return (
    <FavoriteHerosProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </FavoriteHerosProvider>

  )
}

export default MyApp
