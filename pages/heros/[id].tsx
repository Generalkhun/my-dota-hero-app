
import { Grid, Paper } from '@material-ui/core'
import { filter } from 'lodash'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import HeroInfo from '../../components/HeroInfo'

interface Props {

}

const Details = ({ heroStat }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    const { id } = router.query
    // if id is not valid, explicitly redirect to 404 page
    if (!id) {
        router.push('/404')
    }
    return (
        <HeroInfo
            heroStat={heroStat}
        />
    )
}



// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    const resHeroStats = await fetch('https://api.opendota.com/api/heroStats')
    const heroStats = await resHeroStats.json()

    console.log('getStaticPaths', heroStats);


    // Get the paths we want to pre-render based on posts
    const paths = heroStats.map((heroStat) => ({
        params: { id: heroStat.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
type Params = {
    params: {
        id: string
    }
}
export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const resHeroStats = await fetch('https://api.opendota.com/api/heroStats')
    const heroStats = await resHeroStats.json()
    const heroStat = filter(heroStats, (stat) => {
        return stat.id.toString() === params.id
    })

    console.log('heroStat', heroStat);

    // Pass post data to the page via props
    return { props: { heroStat } }
}

export default Details