
import { Grid, Paper } from '@material-ui/core'
import { filter } from 'lodash'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useContext } from 'react'
import HeroInfo from '../../components/HeroInfo'
import { HerosStatsDataContext } from '../../contextProviders/HerosStatsDataProvider'

interface Props {

}

const Details = (

    // { heroStat }: InferGetStaticPropsType<typeof getStaticProps> : used on serverside rendering  (currently not working, see the bottom chunk)

) => {
    const router = useRouter()
    const { id } = router.query

    // get heros data from the context here

    let heroStat
    if (typeof window !== 'undefined') {
        const heroStatsContext = useContext(HerosStatsDataContext)
        // filter only this hero data and store on heroStat

        heroStat = filter(heroStatsContext.HeroStatsData, (stat) => {
            return stat.id.toString() === id
        })[0]
    } else {
        heroStat = {}
    }


    // if id is not valid, explicitly redirect to 404 page
    if (!id) {
        typeof window !== 'undefined' && router.push('/404')
    }
    return (
        <>{typeof window === 'undefined' ? <></> : <HeroInfo
            heroStat={heroStat}
        />}</>

    )
}

// typeof window === 'undefined' is to check wether it is serverside or not


/**
 * Serverside rendering code : cannot fetch on build production due to limit of fetching data. 
 * the api https://api.opendota.com/api/heroStats is not able to fetched something like https://api.opendota.com/api/heroStats/[id] 
 * so we need to fetch https://api.opendota.com/api/heroStats on every dynamic page which is non blockable.
 * 
 * Solution: we will fetch https://api.opendota.com/api/heroStats on the main page and will save the data into useContext instead
 */

// // This function gets called at build time
// export const getStaticPaths: GetStaticPaths = async () => {
//     // Call an external API endpoint to get posts
//     const resHeroStats = await fetch('https://api.opendota.com/api/heroStats')
//     const heroStats = await resHeroStats.json()

//     // Get the paths we want to pre-render based on posts
//     const paths = heroStats.map((heroStat) => ({
//         params: { id: heroStat.id.toString() },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

// // This also gets called at build time
// type Params = {
//     params: {
//         id: string
//     }
// }
// export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const resHeroStats = await fetch('https://api.opendota.com/api/heroStats')
//     const heroStats = await resHeroStats.json()
//     const heroStat = filter(heroStats, (stat) => {
//         return stat.id.toString() === params.id
//     })[0]

//     // Pass post data to the page via props
//     return { props: { heroStat } }
// }

export default Details