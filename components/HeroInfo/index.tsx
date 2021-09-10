import { Grid } from '@material-ui/core'
import React from 'react'
import HeroDetailInfo from './components/HeroAbilitiesInfo';
import HeroCardMedia from './components/HeroCardMedia'
import { mapHeroAbilitiesData, mapHeroCardMediaData, mapHeroGamesData } from './mapDataUtils';

interface Props {
    heroStat: any
}



const HeroInfo = ({ heroStat }: Props) => {
    console.log('heroStat',heroStat);
    
    const heroCardMediaData = mapHeroCardMediaData(heroStat)
    const heroAbilitiesData = mapHeroAbilitiesData(heroStat)
    const heroGamesData = mapHeroGamesData(heroStat)

    return (
        <Grid style={{ marginTop: 20, marginLeft: 40 }} container>
            <Grid item xs={10} sm={4} md={4} lg={3}>
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
