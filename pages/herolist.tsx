import React from 'react'

interface Props {

}

const herolist = (props: Props) => {
    console.log(props);

    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    )
}

export async function getStaticProps(context) {
    const resHero = await fetch(`https://api.opendota.com/api/heroes`)
    const resHeroStats = await fetch(`https://api.opendota.com/api/heroStats`)
    // http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_full.png

    const resHeroData = await resHero.json()
    const resHeroStatsData = await resHeroStats.json()
    if (!resHeroData || !resHeroStatsData) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data: { resHeroData, resHeroStatsData } }, // will be passed to the page component as props
    }
}


export default herolist
