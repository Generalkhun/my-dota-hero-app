import { Grid } from '@material-ui/core';
import { uniq,get } from 'lodash';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useContext } from 'react'
import FavoriteHerosDisplay from '../components/FavoriteHerosDisplay';
import { FavoriteHerosContext } from '../contextProviders/FavoriteHerosProvider'

interface Props {
    herosData
}

const myfavhero = ({ heroStats }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const favHerosContextValue = useContext(FavoriteHerosContext)
    return (
        <Grid container style={{ marginLeft: 20, marginTop: 20 }}>
            <FavoriteHerosDisplay
                favHerosList={uniq(get(favHerosContextValue,'currentFavHeros.favHerosList'))}
                heroStats={heroStats}
            />
            <Grid item>

            </Grid>
        </Grid>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    //const resHero = await fetch(`https://api.opendota.com/api/heroes`)
    const resHeroStats = await fetch(`https://api.opendota.com/api/heroStats`)
    // http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_full.png

    //const resHeroData = await resHero.json()
    const heroStats = await resHeroStats.json()
    if (!heroStats) {
        return {
            notFound: true,
        }
    }
    return {
        props: { heroStats }, // will be passed to the page component as props
    }
}

export default myfavhero
