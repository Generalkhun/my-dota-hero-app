import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useState } from 'react'
import { DisplaySetting } from '../components/DisplaySetting';
import HeroListDisplay from '../components/HeroListDisplay';

interface Props {
    data: any
}

const herolist = ({ resHeroStatsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [searchedHero, setSearchHero] = useState('')
    return (
        <>
            <DisplaySetting heroList={resHeroStatsData} />
            <HeroListDisplay
                resHeroStatsData={resHeroStatsData}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    //const resHero = await fetch(`https://api.opendota.com/api/heroes`)
    const resHeroStats = await fetch(`https://api.opendota.com/api/heroStats`)
    // http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_full.png

    //const resHeroData = await resHero.json()
    const resHeroStatsData = await resHeroStats.json()
    if (!resHeroStatsData) {
        return {
            notFound: true,
        }
    }
    return {
        props: { resHeroStatsData }, // will be passed to the page component as props
    }
}


export default herolist
