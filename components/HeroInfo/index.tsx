import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import HeroDetailInfo from './components/HeroAbilitiesInfo';
import HeroCardMedia from './components/HeroCardMedia'
import { mapHeroAbilitiesData, mapHeroCardMediaData, mapHeroGamesData } from './mapDataUtils';

interface Props {
    heroStat: any
}

const useStyles = makeStyles((theme) => ({
    heroCardMediaGridWrapper: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 10,
            paddingBottom: 40
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 60,
            paddingBottom: 40
        },
        [theme.breakpoints.between('sm','md')]: {
            paddingBottom: 40
        }
    },
}))


const HeroInfo = ({ heroStat }: Props) => {
    const classes = useStyles()
    const heroCardMediaData = mapHeroCardMediaData(heroStat)
    const heroAbilitiesData = mapHeroAbilitiesData(heroStat)
    const heroGamesData = mapHeroGamesData(heroStat)

    return (
        <Grid style={{ marginTop: 20, marginLeft: 40 }} container>
            <Grid item xs={10} sm={5} md={4} lg={3} className={classes.heroCardMediaGridWrapper}>
                <HeroCardMedia
                    heroCardMediaData={heroCardMediaData}
                />
            </Grid>
            <Grid item xs={10} sm={6} md={7} lg={8}>
                <HeroDetailInfo
                    heroAbilitiesData={heroAbilitiesData}
                    heroGamesData={heroGamesData}
                />
            </Grid>
        </Grid>
    )
}

export default HeroInfo
