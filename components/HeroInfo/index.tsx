import { Grid } from '@material-ui/core'
import React from 'react'
import HeroAbilitiesInfo from './components/HeroAbilitiesInfo';
import HeroCardMedia from './components/HeroCardMedia'
import { mapHeroAbilitiesData, mapHeroCardMediaData } from './mapDataUtils';

interface Props {
    heroStat: any
}



const HeroInfo = ({ heroStat }: Props) => {

    console.log('heroStat', heroStat);
    const heroCardMediaData = mapHeroCardMediaData(heroStat)
    const heroAbilitiesData = mapHeroAbilitiesData(heroStat)

    return (
        <Grid style={{ marginTop: 20, marginLeft: 40, height: '60vh' }} container>
            <Grid item xs={10} sm={4} md={4} lg={3}>
                <HeroCardMedia
                    heroCardMediaData={heroCardMediaData}
                />
            </Grid>
            <Grid item xs={10} sm={6} md={7} lg={8}>
                <HeroAbilitiesInfo 
                    heroAbilitiesData={heroAbilitiesData}
                />
            </Grid>
        </Grid>
    )
}

export default HeroInfo
